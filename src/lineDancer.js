var LineDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
 
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.html('<span class="dancer"><img src="https://media.giphy.com/media/l378cwPKMti2m34wE/giphy.gif"></span>');
};

LineDancer.prototype = Object.create(Dancer.prototype);

LineDancer.prototype.constructor = LineDancer;

LineDancer.prototype.step = function() {
  
  // call the old version of step at the beginning of any call to this new version of step
  if (this.counter === 0) {
    this.oldStep();
  
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.left +=30;
    this.top +=10;
    this.setPosition(this.top, this.left);
    this.collide();
  }
};

LineDancer.prototype.collide = function() {
  var left = this.left;
  var top = this.top;
  for(var i = 0; i < window.blinky.length; i++) {
    console.log('hi hari');
    if (left + 50 > window.blinky[i][0] && left + 50 < window.blinky[i][0] + 150 && top + 50 > window.blinky[i][1] && top + 50 < window.blinky[i][1] + 250) {
      console.log("hit");
      this.$node.html('<span class="dancer"><img src="https://media.giphy.com/media/1DhnKsl9UbtWU/giphy.gif"></span>');
    }
  }
  
};