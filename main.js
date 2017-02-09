var casper = require('casper').create();
// casper.start('http://www.google.com', function() {
casper.start('http://localhost:3000/', function() {
    this.capture('./output/test1.png')
});
casper.thenOpen('http://www.google.com', function() {
    this.capture('./output/test2.png')
});
casper.run();

// casper.run(function() {
//   this.exit();
// });;