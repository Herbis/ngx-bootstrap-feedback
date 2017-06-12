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
  fileSizeTooLargeErrorMessage?: string;
  fileTypeNotAllowedErrorMessage?: string;
  submitFeedbackButtonText?: string;
  takeScreenshotButtonText?: string;
  uploadButtonText?: string;

  /* Styles */
  cancelFeedbackButtonClass?: string;
  cancelScreenshotButtonClass?: string;
  enterScreenshotModeButtonClass?: string;
  feedbackButtonClass?: string;
  feedbackModalClass?: string;
  screenshotEmbedClass?: string;
  screenshotEmbedRemoveButtonClass?: string;
  submitFeedbackButtonClass?: string;
  takeScreenshotButtonClass?: string;
  uploadButtonClass?: string;
  uploadErrorMessageClass?: string;

  /* Other options. */
  allowedImageTypes?: string;
  enableLoadingIconClass?: boolean;
  disableScreenshotMode?: boolean;
  disableUpload?: boolean;
  maxSingleFileSize?: number;
  screenshotOnlyHighlighted?: boolean;

}
