import {Injectable} from "@angular/core";
import {FeedbackComponent} from "./feedback.component";
import {FeedbackScreenshotComponent} from "./feedback-screenshot.component";
import {FeedbackModalComponent} from "./feedback-modal.component";


@Injectable()
export class FeedbackService {

  buttonComponent: FeedbackComponent;
  modalComponent: FeedbackModalComponent;
  screenshotComponent: FeedbackScreenshotComponent;

  /**
   * Clear all screenshots.
   */
  clearScreenshots(): void {
    if (this.screenshotComponent) {
      this.screenshotComponent.clearScreenshots();
    }
  }

  /**
   * Destroy screenshot canvas.
   */
  destroyCanvas(): void {
    this.screenshotComponent.destroyCanvas();
  }

  /**
   * Get all screenshots.
   * @return {Array} the screenshots.
   */
  getScreenshots(): string[] {
    if (this.screenshotComponent) {
      return this.screenshotComponent.screenshots;
    } else {
      return [];
    }
  }

  /**
   * Hide the feedback modal.
   */
  hideFeedbackModal(): void {
    this.modalComponent.hideModal();
  }

  /**
   * Hide send feedback button.
   */
  hideSendFeedbackButton(): void {
    this.buttonComponent.isHidden = true;
  }

  /**
   * Lock take screenshot buttons.
   */
  lockTakeScreenshotButtons(): void {
    this.buttonComponent.isLoading = true;
  }

  /**
   * Unlock take screenshot buttons.
   */
  unlockTakeScreenshotButtons(): void {
    this.buttonComponent.isLoading = false;
  }

  /**
   * Show feedback modal.
   */
  showFeedbackModal(): void {
    this.modalComponent.showModal();
  }

  /**
   * Show send feedback button.
   */
  showSendFeedbackButton(): void {
    this.buttonComponent.isHidden = false;
  }

  /**
   * Set screenshot mode.
   * @param isScreenshotMode whether screenshot mode or not.
   */
  setScreenshotMode(isScreenshotMode: boolean): void {
    this.buttonComponent.isScreenshotMode = isScreenshotMode;
  }

  /**
   * Take a screenshot.
   */
  takeScreenshot(): void {
    this.screenshotComponent.takeScreenshot();
  }
}
