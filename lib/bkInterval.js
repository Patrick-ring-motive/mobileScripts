
var wandow = window || self || this;

/*//////////////create background interval */


wandow.setBkInterval = function(fun, time) {

  var upperTime = time * 1.5;
  var lowerTime = time * 0.5;
  var lastRunStart = (new Date()).getTime();
  var lastRunEnd = (new Date()).getTime();
  setInterval(function() {

    lastRunStart = (new Date()).getTime();

    function bkIntervalReady() {
      setTimeout(function() {
        wandow.requestAnimationFrame(bkInterval);
      }, 1);
    }


    function bkInterval() {
      if (lastRunStart > (lastRunEnd + lowerTime)) {
        try {
          fun();
        }
        catch (error) {
          console.error(error);
        } finally {
          lastRunEnd = (new Date()).getTime();
        }
      }
    }



    requestIdleCallback(bkIntervalReady, { timeout: lowerTime });


  }, time);

}

wandow.doInterval = async function(fun, time) {

  fun();
  setInterval(fun, time);

}
