# ngx-bootstrap-feedback
[![npm version](https://img.shields.io/npm/v/ngx-bootstrap-feedback.svg)](https://www.npmjs.com/package/ngx-bootstrap-feedback)

*Heavily inspired by [angular-bootstrap-feedback](https://github.com/RobertYoung/angular-bootstrap-feedback).*

### Requirements:
```
"bootstrap": "^3.3.7",`
"@angular/core": "^2.4.0 || ^4.0.0",
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


