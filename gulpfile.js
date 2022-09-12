const gulp = require('gulp');
const phantom = require('gulp-phantom');
const casper = require('gulp-casperjs');

const jslint = require('gulp-jslint');
const csslint = require('gulp-csslint');
const csslintStylish = require('csslint-stylish');

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
// const gls = require('gulp-live-server');

// gulp.task('serve', function () {
//     // const server = gls.static('public', config.port); //default ('public', 3000);
//     const server = gls.new('index.js'); //with node
//     server.start();

//     // gulp.watch(['public/css/*', 'public/index.html', 'public/js/*'], function (file) {
//     //     server.notify.apply(server, [file]);
//     // });
// });

// gulp.task('watch', function() {
//     gulp.watch('public/html/index.html');
//     gulp.watch('public/css/*');
//     gulp.watch('public/js/*');
// })

// gulp.task('default', gulp.series('serve', 'watch'));

// With browser-sync *********************************************************
// const browserSync = require('browser-sync').create();

// gulp.task('serve', function() {
//     browserSync.init({
//         server: {
//             baseDir: 'public'
//         },
//         port: 8080,
//         open: false,
//         notify: false,
//         ghostMode: false,
//         ui: false,
//         online: false,
//         // tunnel: true,
//         // tunnel: 'projectname', //Demonstration page: http://projectname.localtunnel.me
//     });
// });

// gulp.task('default', gulp.series('serve'));

// With gulp-nodemon *********************************************************
// const env = require('gulp-env');
const nodemon = require('gulp-nodemon');

const config = {
    host: 'localhost',
    port: '8080',
};

gulp.task('nodemon', function() {
    process.env.PORT = config.port;
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: {
            PORT: config.port
        }
    });
});

gulp.task('phantom', function() {
    return gulp.src('phantom/*.js')
        .pipe(phantom())
        .pipe(gulp.dest('./test_data/'));
});

gulp.task('casper', function() {
    return gulp.src('casper/*.js')
        .pipe(casper({
            casperjsOptions: ['--ignore-ssl-errors=true', '--ssl-protocol=any']
        }))
        .pipe(gulp.dest('./test_data/'));
});

gulp.task('validate-js', function() {
    return gulp.src('public/js/*.js')
        .pipe(jslint())
        .pipe(jslint.reporter('default'));
});

gulp.task('validate-css', function() {
    return gulp.src('public/css/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter(csslintStylish));
});

gulp.task('default', gulp.series('nodemon'));
