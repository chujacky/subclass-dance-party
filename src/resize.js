var ResizeDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="dancer"><img src="https://media.giphy.com/media/l378cwPKMti2m34wE/giphy.gif"></span>');
};

ResizeDancer.prototype = Object.create(Dancer.prototype);

ResizeDancer.prototype.constructor = ResizeDancer;

ResizeDancer.prototype.step = function() {
  
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.left +=10;
  this.setPosition(this.top, this.left);
  this.$node.toggleClass("resize");

}