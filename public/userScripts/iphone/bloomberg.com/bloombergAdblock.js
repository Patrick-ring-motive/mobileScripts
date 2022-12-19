if (window.location.host.indexOf('bloomberg.com') > -1) {
  var sty = document.createElement('style');


  var s = '';
  s = s + '  div.canopy-container{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div[style*="position:absolute;top:0;right:0;left:0;bottom:0;"]{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div.responsive-wrapper{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  figure.lede-video{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div#fortress-verification-container-root{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div[data-component-root="LeaderboardAd"]{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  footer{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div.leaderboard-container{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;} ';
  s = s + '  div[class*="main-column"]{    -webkit-mask-image: none;} ';

  sty.innerHTML = s;
  try{
  document.head.prepend(sty);
  }catch(e){

try{

document.body.prepend(sty);

}catch(e){

  document.getElementsByTagName('*')[0].prepend(sty);
}
}
}
