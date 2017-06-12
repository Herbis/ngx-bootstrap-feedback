# ngx-bootstrap-feedback
[![npm version](https://img.shields.io/npm/v/ngx-bootstrap-feedback.svg)](https://www.npmjs.com/package/ngx-bootstrap-feedback)

## <a name="overview">Overview
This module provides a modal popup *(powered by bootstrap)* for collecting user feedback. 

##### <a name="overview-features">Features:
* Customizable form body.
* Configurable [styles](#configuration-style-properties), [text](#configuration-text-properties), [callbacks](#configuration-event-callbacks).
* Optional screenshot taking and / or uploading functionality.
* Configurable allowed image types (for uploading).

*Heavily inspired by [angular-bootstrap-feedback](https://github.com/RobertYoung/angular-bootstrap-feedback).*

## <a name="requirements">Requirements:
```
"bootstrap": "^3.3.7",`
"@angular/core": "^2.4.0 || ^4.0.0",
"@herbis/ngx-modal": "^0.1.0", // Modal Functionality
"rxjs": "^5.0.1",
"html2canvas": "0.5.0-beta4" // Optional*
```
You will also need have the following scripts added in your application (*.angular-cli.json example*):
```
{
  ...
  "apps": [
    {
        ...
        "styles": [
          "../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
          "../../../node_modules/ngx-bootstrap-feedback/dist/css/feedback-take-screenshot.min.css" // Optional*
        ],
        "scripts": [
          "../../../node_modules/bootstrap/dist/js/bootstrap.min.js",
          "../../../node_modules/html2canvas/dist/html2canvas.min.js" // Optional* 
        ],
        ...
    }
  ]
  ...
}
```
> * Optionals are only required for 'Take Screenshot' feature.

## <a name="installation-and-usage">Installation and Usage
##### <a name="usage-npm-install">Install using NPM
```npm install ngx-bootstrap-feedback --save```
##### <a name="usage-import">Import Feedback module in the required module (usually app root module).
```
import {FeedbackModule} from "ngx-bootstrap-feedback/feedback.module";

@NgModule({
  ...
  imports: [
    ...
    FeedbackModule,
    ...
  ],
  ...
})
...
```
See [below](#configuration-options) for available configuration options.
##### <a name="usage-configuration">Initialize feedback configuration
```
...
this.feedbackConfiguration = {
  onCancel: () => this.clearFeedbackFields(),
  onSubmit: (feedback: FeedbackModel) => this.onSubmitFeedback(feedback),
  screenshotOnlyHighlighted: true
};
...
```
##### <a name="usage-configuration">Add selectors to your component template (usually root) and bind configuration to them.
```
...
<ngx-bootstrap-feedback [configuration]="feedbackConfiguration">
  <!-- Your customizations. -->
  ...
      <!-- Screenshot field (Optional). -->
      <ngx-bootstrap-feedback-screenshot [configuration]="feedbackConfiguration"></ngx-bootstrap-feedback-screenshot>
  ...
</ngx-bootstrap-feedback>
...
```

###### <a name="usage-example">Example:
```
<ngx-bootstrap-feedback [configuration]="feedbackConfiguration">
  <!-- Your customizations. -->
  <div class="row">
    <!-- Input fields. -->
    <div class="col-md-6">
      <!-- Subject field. -->
      <div class="row">
        <div class="col-xs-12">
          <div class="form-group form-group-sm">
            <label class="control-label" for="subject-input">Subject</label>
            <input type="text" class="form-control" id="subject-input" required [(ngModel)]="feedbackSubject">
          </div>
        </div>
      </div>
      <!-- Description field. -->
      <div class="row">
        <div class="col-md-12">
          <div class=" form-group form-group-sm">
            <label for="description-input">Description:</label>
            <textarea id="description-input" class="form-control width-locked" rows="5" required [(ngModel)]="feedbackDescription"></textarea>
          </div>
        </div>
      </div>
      <!-- Contact field. -->
      <div class="row">
        <div class="col-xs-12">
          <div class="form-group form-group-sm">
            <label class="control-label" for="contact-input">Contact</label>
            <input type="text" class="form-control" id="contact-input" [(ngModel)]="feedbackContact">
          </div>
        </div>
      </div>
    </div>
    <!-- Screenshot field (Optional). -->
    <div class="col-md-6">
      <ngx-bootstrap-feedback-screenshot [configuration]="feedbackConfiguration"></ngx-bootstrap-feedback-screenshot>
    </div>
  </div>
</ngx-bootstrap-feedback>
```

## <a name="configuration"></a>Configuration
### <a name="configuration-options"></a>Configuration Options
#### <a name="configuration-event-callbacks"></a>Event callbacks
|Event|Description|Emits|
|:--------|:-------------|------:|
|onCancel|Fired when the feedback is canceled from the modal.|-|
|onCancelScreenshot|Fired when canceling from the screenshot mode.|-|
|onEnterTakeScreenshot|Fired when entering screenshot mode.|-|
|onHighlightDrawn|Fired when a highlight is drawn in the screenshot mode.|highlight: HTMLDivElement|
|onOpen|Fired when the feedback modal is opened.|-|
|onScreenshotTaken|Fired when a screenshot is taken by the user.|screenshot: string (base64 data url)|
|onSubmit|Fired when the user submits feedback from the modal.|feedbackSubmission: FeedbackModel|

#### <a name="configuration-text-properties">Text properties
|Property|Description|Default|
|:-------------|:----------------------|-------:|
|cancelFeedbackButtonText|The cancel button text of the modal.|*Cancel*|
|cancelScreenshotButtonText|The cancel button text in screenshot mode.|*Cancel*|
|enterScreenshotModeButtonText|The enter screenshot mode button text.|*Take Screenshot*|
|feedbackButtonText|The feedback button text.|*Send Feedback*|
|feedbackModalTitle|The title of the modal.|*Send Feedback*|
|fileSizeTooLargeErrorMessage|Error message shown when uploading a single file that's too large. {size} - file size, {maxsize} - max size.|*File size too large. Max allowed - {maxsize}.*|
|fileTypeNotAllowedErrorMessage|Error message shown when uploading unsupported file type. {type} - file MIME type.|*File type {type} not allowed.*|
|submitFeedbackButtonText|The submit button text of the modal.|*Submit*|
|takeScreenshotButtonText|The capture screenshot button text in screenshot mode.|*Take Screenshot*|
|uploadButtonText|The upload screenshot button text.|*Upload*|

#### <a name="configuration-style-properties">Style properties
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
|uploadErrorMessageClass|The class applied to the upload error message in feedback modal.|*text-danger*|

#### <a name="configuration-other-properties">Other properties
|Property|Description|Default|
|:-------------|:----------------------|-------:|
|allowedImageTypes|Allowed image types for uploading (separated by spaces).|*image/png image/gif image/jpeg*|
|enableLoadingIconClass|Apply *loading-icon* class to capture screenshot button when capturing.|*false*|
|disableScreenshotMode|Disable capture screenshot mode.|*false*|
|disableUpload|Disable ability to upload a screenshot.|*false*|
|maxSingleFileSize|Max single file size (in KB) allowed.|*2048*|
|screenshotOnlyHighlighted|Capture screenshot only of the highlighted area.|*false*|


## <a name="contributing">Contributing
Pull requests and issues are welcome.