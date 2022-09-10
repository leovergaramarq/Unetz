const gulp = require('gulp');

// With gulp-webserver ******************************************************

// const webserver = require('gulp-webserver');
// const opn = require('opn');

// const server = {
//     host: 'localhost',
//     port: '8080',
// };

// gulp.task('webserver', function() {
//     gulp.src('public')
//         .pipe(webserver({
//             host: server.host,
//             port: server.port,
//             livereload: true,
//             directoryListing: false,
//             open: true,
//             // fallback: 'html/index.html' //in case index.html is not in the root of the public folder
//         }));
// });

// gulp.task('openbrowser', function() {
//     opn(`http://${server.host}:${server.port}`);
// });

// gulp.task('watch', function() {
//     gulp.watch('public/html/*');
//     gulp.watch('public/css/*');
//     gulp.watch('public/js/*');
// });

// gulp.task('default', gulp.series('webserver', 'openbrowser', 'watch'));

// With gulp-live-server ******************************************************
const gls = require('gulp-live-server');

const config = {
    host: 'localhost',
    port: '8080',
};

gulp.task('serve', function () {
    // const server = gls.static('public', config.port); //default ('public', 3000);
    const server = gls.new('index.js'); //with node
    server.start();

    gulp.watch(['public/css/*', 'public/*.html', 'public/js/*'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('default', gulp.series('serve'));
