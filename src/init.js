$(document).ready(function() {
  window.dancers = [];
  window.blinky = [];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    if (dancerMakerFunctionName === 'LineDancer') {
      console.log("hi");
      var dancer = new dancerMakerFunction(0, 0, 500);
      window.dancers.push(dancer);
      
    } else if (dancerMakerFunctionName === 'ResizeDancer') {
      
      var dancer = new dancerMakerFunction($('body').height() / 2, $('body').width() / 2, 800);
      window.dancers.push(dancer);
    } else {
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      ); 
      window.dancers.push(dancer);
      window.blinky.push([dancer.left, dancer.top]);
    }
    $('body').append(dancer.$node);
  });
  var lineUp = function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      console.log('hello')
      window.dancers[i].lineUp();
      window.dancers[i].counter = 1;
    }
  };
    
  var returnNormal = function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].counter = 0;
      window.dancers[i].step();
      this.timeBetweenSteps = 800;
    }
  };
  
  

    
  $('.lineUpButton').on('click', lineUp);
  $('.returnNormalButton').off('click', lineUp);
    
  $('.returnNormalButton').on('click', returnNormal);
  $('.lineUpButton').off('click', returnNormal);

  
});

