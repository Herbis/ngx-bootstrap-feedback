import {Component, Input, ViewChild} from "@angular/core";
import {FeedbackService} from "./feedback.service";
import {FeedbackConfiguration} from "./feedback-configuration.model";
import {FeedbackModel} from "./feedback.model";
import {Modal} from "@herbis/ngx-modal";

@Component({
  selector: "ngx-bootstrap-feedback-modal",
  templateUrl: "./feedback-modal.component.html"
})
export class FeedbackModalComponent {

  @Input()
  configuration: FeedbackConfiguration;

  @ViewChild(Modal)
  private modal: Modal;

  constructor(private feedback: FeedbackService) {
    feedback.modalComponent = this;
  }

  /**
   * Cancel the feedback.
   */
  public cancel(): void {
    /* Callback on cancel.*/
    if (this.configuration.onCancel) {
      this.configuration.onCancel();
    }

    this.closeModal();
  }

  /**
   * Close this modal.
   */
  public closeModal(): void {
    this.modal.close();
    this.feedback.showSendFeedbackButton();
  }

  /**
   * Open feedback modal.
   */
  public openModal(): void {
    this.modal.open();
  }

  /**
   * Submit the form.
   * @param form the form.
   */
  public submit(form: HTMLFormElement): void {
    let feedbackSubmission = new FeedbackModel();
    feedbackSubmission.form = form;
    feedbackSubmission.screenshots = this.feedback.getScreenshots();

    /* Callback on submit validation */
    if (this.configuration.onSubmitValidation) {
      if (!this.configuration.onSubmitValidation(feedbackSubmission)) {
        return; // Do not proceed if validation unsuccessful.
      }
    }

    /* Callback on submit. */
    if (this.configuration.onSubmit) {
      this.configuration.onSubmit(feedbackSubmission);
      this.closeModal();
    } else {
      console.warn("No onSubmit callback function configured. It probably should.");
    }
  }
}
