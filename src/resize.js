var ResizeDancer = function(top, left, timeBetweenSteps) {
  
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.resizeDancerNo++;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.html('<span class=" dancer resizeDancer"><img class ="resizeDancers" src="https://orig00.deviantart.net/dcc8/f/2016/304/4/8/wario_in_opening_of_mario_party_by_merry255-damu15m.gif"></span>');
  this.$node.on('mouseover', function() {
  $(".resizeDancers").attr("src","http://media.tnh.me/530bb317ddcb21150ab9acf2/530d73b3ddcb2146d591d386" );
  setTimeout(function () {
  $(".resizeDancers").attr("src", "" );
    }, 500);
 });
};

ResizeDancer.prototype = Object.create(Dancer.prototype);

ResizeDancer.prototype.constructor = ResizeDancer;

ResizeDancer.prototype.step = function() {
  
  // call the old version of step at the beginning of any call to this new version of step
  if (this.counter === 0) {
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.left = $("body").width() * Math.random();
    this.top = $("body").height() * Math.random();
    this.setPosition(this.top, this.left);
    $(".resizeDancer img").toggleClass("sizing");
  } else {
    $(".resizeDancer img").removeClass("sizing");
  }
  
};