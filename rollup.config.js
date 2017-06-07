export default {
    entry: 'build/dist/index.js',
    dest: 'build/dist/bundles/ngx-bootstrap-feedback.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ngx.bootstrap.feedback',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@herbis/ngx-modal': "ngx.modal",
        'rxjs/Observable': 'Rx',
    }
}