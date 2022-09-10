const gulp = require('gulp');
const webserver = require('gulp-webserver');
const opn = require('opn');

const server = {
    host: 'localhost',
    port: '8080'
};

gulp.task('webserver', function() {
    gulp.src('public')
        .pipe(webserver({
            host: server.host,
            port: server.port,
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('openbrowser', function() {
    opn(`http://${server.host}:${server.port}`);
});

gulp.task('watch', function() {
    gulp.watch('public/html/*.html');
    gulp.watch('public/css/*.css');
});

gulp.task('default', gulp.series('webserver', 'openbrowser', 'watch'));
