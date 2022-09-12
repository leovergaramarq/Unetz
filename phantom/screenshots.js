const system = require('system');
const webSite = require('webpage').create();

var _URL;
// if(system.args.length == 3) {
//     console.log('args: ' + system.args[1] + ', ' + system.args[2]);
//     _URL = 'http://' + system.args[1] + ':' + system.args[2];
//     console.log('URL: ' + _URL);
// } else if(system.env.PORT) {
//     console.log('env: ' + system.env.PORT);
//     _URL = 'http://localhost:' + system.env.PORT;
// } else {
//     console.log('failed to get port');
//     phantom.exit();
//     _URL = 'http://localhost:8080';
// }

_URL = 'http://localhost:8080';

const dimensions = [
    { width: 1024, height: 768 },
    { width: 1280, height: 1024 },
    { width: 1600, height: 1200 },
    { width: 1920, height: 1080 },
];

webSite.open(_URL, function(status) {
    if(status === 'success') {
        dimensions.forEach(function(dimension) {
            capture(dimension, dimension['width'] + 'x' + dimension['height'] + '.png');
        });
        phantom.exit();
    }else {
        console.log('Unable to access network');
        phantom.exit();
    }
});

function capture(dimension, output) {
    webSite.viewportSize = dimension;
    webSite.render(output, {
        // format: 'png',
        quality: '100'
    });
}
