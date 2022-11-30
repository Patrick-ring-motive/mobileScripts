if (window.location.host.indexOf('fandom.com') > -1) {
  var sty = document.createElement('style');


  var s = 'div.wds-global-navigation{top:0;} video{display:none;visibility:hidden;} iframe{display:none;visibility:hidden;}  div.article-featured-video{display:none;visibility:hidden;} div.featured-video__wrapper{display:none;visibility:hidden;} #ds_cpp{display:none;visibility:hidden;} div.mw-parser-output{overflow:hidden;} footer.wds-global-footer{display:none;visibility:hidden;} #WikiaBar{display:none;visibility:hidden;} #WikiaRailWrapper{display:none;visibility:hidden;} #WikiaRail{display:none;visibility:hidden;} #mixed-content-footer{display:none;visibility:hidden;} iframe[title=advertisement]{display:none;visibility:hidden;} img[alt=Advertisement]{display:none;visibility:hidden;} div.gpt-ad{display:none;visibility:hidden;}';
  s = s + ' div.ad-placement{display:none;visibility:hidden;} div.afs_ads{display:none;visibility:hidden;} div.ad-slot{display:none;visibility:hidden;} div.ad-slot-placeholder{display:none;visibility:hidden;} ';

  s = s + ' div.article-featured-video{display:none;visibility:hidden;} div.top-ads-container{display:none;visibility:hidden;} ';
  s = s + ' video{display:none;visibility:hidden;} div.top-ads-container{display:none;visibility:hidden;} ';



  s = ' #siteNotice{display:none;visibility:hidden;opacity:0;max-height:0px;} ';
  s = s + ' div.top-ads-container{display:none;visibility:hidden;opacity:0;max-height:0px;}';
  s = s + ' div.wds-banner-notification__container{display:none;visibility:hidden;opacity:0;max-height:0px;}';
  s = s + ' #mixed-content-footer{display:none;visibility:hidden;opacity:0;max-height:0px;}';
  s = s + '   div.bottom-ads-container{display:none;visibility:hidden;opacity:0;max-height:0px;}';
  s = s + ' #WikiaBarWrapper{display:none;visibility:hidden;opacity:0;max-height:0px;}';
  s = s + '   div.wds-global-footer__main{display:none;visibility:hidden;opacity:0;max-height:0px;}';
  s = s + '   #featured-video__player{display:none;visibility:hidden;opacity:0;max-height:0px;}';
  s = s + '   div.notifications-box{display:none;visibility:hidden;opacity:0;max-height:0px;transform: scale(0.0);position:absolute;z-index:-99;}';
  s = s + '   div.ad-slot-placeholder{display:none;visibility:hidden;opacity:0;max-height:0px;transform: scale(0,0);position:absolute;z-index:-99;}';
  s = s + '   div.recirculation-prefooter{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;}';
  s = s + '   footer.global-footer{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;}';

    s=s+'   div.featured-video-player-container{display:none;visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;}';

     s=s+'    div.mobile-global-navigation__wrapper{filter:hue-rotate(180deg);} ';
   s=s+ ' body a{color:#3366cc} ';
    s=s+ " body.rubik div, body.rubik span{font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Lato','Helvetica','Arial',sans-serif;} ";
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
}
