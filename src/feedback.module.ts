import {NgModule} from "@angular/core";
import {FeedbackComponent} from "./feedback.component";
import {FeedbackModalComponent} from "./feedback-modal.component";
import {ModalModule} from "@herbis/ngx-modal";
import {FeedbackScreenshotComponent} from "./feedback-screenshot.component";
import {FeedbackService} from "./feedback.service";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    FeedbackComponent,
    FeedbackModalComponent,
    FeedbackScreenshotComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    FeedbackComponent,
    FeedbackScreenshotComponent
  ],
  providers: [
    FeedbackService
  ]
})
export class FeedbackModule {
  constructor() {}
}
