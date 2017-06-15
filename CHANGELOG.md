<a name="1.1.3"></a>
## [1.1.3](https://github.com/Herbis/ngx-bootstrap-feedback/compare/1.1.2...1.1.3) (15-06-2017)

#### Bug Fixes
* Added screenshot data url DOM sanitation, to avoid screenshot not display on some systems.
* Fixed a bug when configured with 'only highlighted' and taking an image with no highlight. Now takes a screenshot of the whole page.
* Fixed a bug where highlight attributes (sizes) would persist on next image, if not highlighted.  
* Adjusted html2canvas requirement error on 'Take Screenshot' to be thrown earlier to avoid application deadlock.

<a name="1.1.2"></a>
## [1.1.2](https://github.com/Herbis/ngx-bootstrap-feedback/compare/1.1.1...1.1.2) (14-06-2017)

#### Bug Fixes
* Fixed a bug where uploadErrorMessage variable would cause a compile error because of it being private and used from a template.


<a name="1.1.1"></a>
## [1.1.1](https://github.com/Herbis/ngx-bootstrap-feedback/compare/1.1.0...1.1.1) (14-06-2017)

#### Bug Fixes
* Fixed a bug where onCancel callback would be called on both submit and cancel actions.

<a name="1.1.0"></a>
# [1.1.0](https://github.com/Herbis/ngx-bootstrap-feedback/compare/1.0.0...1.1.0) (13-06-2017)

#### Features
* Added on submit validation callback.
* Added max image count configuration option.
#### Bug Fixes
* Fixed send feedback button only opening feedback modal if clicked directly on text.

<a name="1.0.0"></a>
# [1.0.0](github.com/Herbis/ngx-bootstrap-feedback/commits/1.0.0) (12-06-2017)
Initial Release
