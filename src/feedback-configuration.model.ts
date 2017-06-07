/**
 * Feedback configuration class.
 */
export class FeedbackConfiguration {

  /* Callback functions. */
  onCancel?: Function;
  onCancelScreenshot?: Function;
  onEnterTakeScreenshot?: Function;
  onHighlightDrawn?: Function;
  onOpen?: Function;
  onScreenshotTaken?: Function;
  onSubmit: Function;

  /* Element text / titles. */
  cancelFeedbackButtonText?: string;
  cancelScreenshotButtonText?: string;
  enterScreenshotModeButtonText?: string;
  feedbackButtonText?: string;
  feedbackModalTitle?: string;
  submitFeedbackButtonText?: string;
  takeScreenshotButtonText?: string;
  uploadButtonText?: string;

  /* Other options. */
  screenshotOnlyHighlighted?: boolean;

}
