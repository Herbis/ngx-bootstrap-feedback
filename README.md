# ngx-bootstrap-feedback
[![npm version](https://img.shields.io/npm/v/ngx-bootstrap-feedback.svg)](https://www.npmjs.com/package/ngx-bootstrap-feedback)

*Heavily inspired by [angular-bootstrap-feedback](https://github.com/RobertYoung/angular-bootstrap-feedback).*

### Requirements:
```
"bootstrap": "^3.3.7",`
"@angular/core": "^2.4.0 || ^4.0.0",
"@herbis/ngx-modal": "^0.1.0", // Modal Functionality
"rxjs": "^5.0.1",
"html2canvas": "0.5.0-beta4" // Optional*
```
You will also need have the following scripts added in your application (*.angular-cli.json example*):
```
"styles": [
  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "../../../node_modules/ngx-bootstrap-feedback/dist/css/feedback-take-screenshot.min.css" // Optional*
],
"scripts": [
  "../../../node_modules/bootstrap/dist/js/bootstrap.min.js",
  "../../../node_modules/html2canvas/dist/html2canvas.min.js" // Optional* 
],
```
> * Optionals are only required for 'Take Screenshot' feature.

## Options
#### Event callbacks
|Event|Description|Emits|
|:--------|:-------------|------:|
|onCancel|Fired when the feedback is canceled from the modal.|-|
|onCancelScreenshot|Fired when canceling from the screenshot mode.|-|
|onEnterTakeScreenshot|Fired when entering screenshot mode.|-|
|onHighlightDrawn|Fired when a highlight is drawn in the screenshot mode.|highlight: HTMLDivElement|
|onOpen|Fired when the feedback modal is opened.|-|
|onScreenshotTaken|Fired when a screenshot is taken by the user.|screenshot: string (base64 data url)|
|onSubmit|Fired when the user submits feedback from the modal.|feedbackSubmission: FeedbackModel|

#### Text properties
|Property|Description|Default|
|:-------------|:----------------------|-------:|
|cancelFeedbackButtonText|The cancel button text of the modal.|*Cancel*|
|cancelScreenshotButtonText|The cancel button text in screenshot mode.|*Cancel*|
|enterScreenshotModeButtonText|The enter screenshot mode button text.|*Take Screenshot*|
|feedbackButtonText|The feedback button text.|*Send Feedback*|
|feedbackModalTitle|The title of the modal.|*Send Feedback*|
|submitFeedbackButtonText|The submit button text of the modal.|*Submit*|
|takeScreenshotButtonText|The capture screenshot button text in screenshot mode.|*Take Screenshot*|
|uploadButtonText|The upload screenshot button text.|*Upload*|

#### Style properties
|Property|Description|Default|
|:-------------|:----------------------|-------:|
|cancelFeedbackButtonClass|The class applied to the cancel button in feedback modal.|*btn btn-default*|
|cancelScreenshotButtonClass|The class applied to the cancel button in screenshot mode.|*btn btn-default btn-block*|
|enterScreenshotModeButtonClass|The class applied to the enter screenshot mode in feedback modal.|*btn btn-info btn-block*|
|feedbackButtonClass|The class applied to the feedback button.|*btn send-feedback-button*|
|feedbackModalClass|The class applied to the feedback modal.|*modal-md*|
|screenshotEmbedClass|The class applied to embedded captured screenshot.|*feedback-screenshot*|
|screenshotEmbedRemoveButtonClass|The class applied to embedded captured screenshot remove button.|*close*|
|submitFeedbackButtonClass|The class applied to the submit button in feedback modal.|*btn btn-primary*|
|takeScreenshotButtonClass|The class applied to the capture button in screenshot mode.|*btn btn-primary btn-block*|
|uploadButtonClass|The class applied to the upload button in feedback modal.|*btn btn-primary btn-block*|

#### Other properties
|Property|Description|Default|
|:-------------|:----------------------|-------:|
|enableLoadingIconClass|Apply *loading-icon* class to capture screenshot button when capturing.|*false*|
|screenshotOnlyHighlighted|Capture screenshot only of the highlighted area.|*false*|