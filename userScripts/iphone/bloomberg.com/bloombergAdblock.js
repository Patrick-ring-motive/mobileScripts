if (window.location.host.indexOf('wsj.com') > -1) {
  var sty = document.createElement('style');


  var s = '';
  s = s + '  div.canopy-container{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div[style*="position:absolute;top:0;right:0;left:0;bottom:0;"]{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div.responsive-wrapper{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';


  sty.innerHTML = s;
  document.body.appendChild(sty);
}
