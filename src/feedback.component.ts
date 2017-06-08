import {Component, Input, ViewChild} from "@angular/core";
import {FeedbackModalComponent} from "./feedback-modal.component";
import {FeedbackService} from "./feedback.service";
import {FeedbackConfiguration} from "./feedback-configuration.model";

@Component({
  selector: "ngx-bootstrap-feedback",
  templateUrl: "./feedback.component.html"
})
export class FeedbackComponent {

  @ViewChild(FeedbackModalComponent)
  private feedbackModal: FeedbackModalComponent;

  @Input()
  configuration: FeedbackConfiguration;

  isHidden = false;
  isLoading = false;
  isScreenshotMode = false;

  constructor(private feedback: FeedbackService) {
    feedback.buttonComponent = this;
  }

  /**
   * Cancel taking of screenshot.
   */
  public cancelScreenshot(): void {
    if (this.configuration.onCancelScreenshot) {
      this.configuration.onCancelScreenshot();
    }

    this.isScreenshotMode = false;

    this.feedbackModal.openModal();
    this.feedback.destroyCanvas();
  }

  /**
   * Clear screenshots.
   */
  public clearScreenshots(): void {
    this.feedback.clearScreenshots();
  }

  /**
   * Get all screenshots taken.
   * @return {string[]} the screenshots as dataUrls.
   */
  public getScreenshots(): string[] {
    return this.feedback.getScreenshots();
  }

  /**
   * Open feedback modal.
   */
  public openFeedbackModal(): void {
    if (this.configuration.onOpen) {
      this.configuration.onOpen();
    }

    this.isHidden = true;
    this.feedbackModal.openModal();
  }

  /**
   * Take a screenshot.
   */
  public takeScreenshot(): void {
    this.feedback.takeScreenshot();
  }
}
