// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.counter = 0;
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  
  
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  
};

Dancer.prototype.step = function() {
  
  // the basic dancer doesn't do anything interesting at all on each step,<img class="full" src="http://faalconn.com/wp-content/uploads/ch/chic-new-doge-memes-arrived-liquified.jpg" width="918" alt="Doge Meme Shoes: Chic New Doge Memes Arrived Liquified">
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  var index = window.dancers.indexOf(this);
  this.top = $("body").height() / 2;
  this.left = index * 200 + 100;
  
  this.setPosition(this.top, this.left);
}