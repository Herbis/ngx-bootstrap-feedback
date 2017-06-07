import {Component, Input, ViewChild} from "@angular/core";
import {Modal} from "@herbis/ngx-modal";
import {FeedbackService} from "./feedback.service";
import {FeedbackConfiguration} from "./feedback-configuration.model";
import {FeedbackModel} from "./feedback.model";

@Component({
  selector: "adsh-feedback-modal",
  templateUrl: "./feedback-modal.html"
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
   * Close this modal.
   */
  public closeModal(): void {
    this.modal.close();
    this.feedback.showSendFeedbackButton();

    /* Callback on cancel.*/
    if (this.configuration.onCancel) {
      this.configuration.onCancel();
    }
  }

  /**
   * Hide this modal.
   */
  public hideModal(): void {
    this.modal.close();
  }

  /**
   * Open feedback modal.
   */
  public openModal(): void {
    this.modal.open();
  }

  /**
   * Show this modal.
   */
  public showModal(): void {
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

    /* Callback on submit. */
    if (this.configuration.onSubmit) {
      this.configuration.onSubmit(feedbackSubmission);
    } else {
      console.warn("No onSubmit callback function configured. It probably should.");
    }

    this.closeModal();
  }
}
