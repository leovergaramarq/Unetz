const _URL = 'http://localhost:8080';

casper.test.begin('General tests', 1, function(test) {

    casper.start(_URL, function() {
        test.assertExists('.banner-arrow.arrow-right', 'Banner right arrow exists');
        test.assertNotVisible('.banner-arrow.right-arrow', 'Banner right arrow is not visible');
    })
    .then(function() {
        this.mouse.move('#banner-prom .slider');
        console.log('Moved mouse to banner...');
        this.waitUntilVisible('.banner-arrow.arrow-right');
        test.assertVisible('.banner-arrow.arrow-right', 'Banner right arrow visible');

        casper.viewport(1280, 720);
        this.capture('./test_data/Unetz.png');
    })
    casper.run(function() {
        test.done();
    });
    
});
