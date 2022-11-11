if (window.location.host.indexOf('wsj.com') > -1) {
  var sty = document.createElement('style');


  var s = '';
  s = s + '  div#wrapper-AD_MOBILE2{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div#cx-snippet-overlay{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div.css-1vlbiim-Container{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
 // s = s + '  div[aria-label="What to Read Next"]{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div[aria-label="Sponsored Offers"]{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div[data-block="doNotPrint"]{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div.adWrapper{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
 // s = s + '  footer{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '    div[class*="LoginButtonsWrapper"]{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
 // s = s + '  section:after{max-height:0px;} ';
  sty.innerHTML = s;
  document.body.appendChild(sty);
}
