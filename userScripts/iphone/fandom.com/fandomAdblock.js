if(window.location.host.indexOf('fandom.com')>-1){
var sty=document.createElement('style');


var s='div.wds-global-navigation{top:0;} video{display:none;visibility:hidden;} iframe{display:none;visibility:hidden;}  div.article-featured-video{display:none;visibility:hidden;} div.featured-video__wrapper{display:none;visibility:hidden;} #ds_cpp{display:none;visibility:hidden;} div.mw-parser-output{overflow:hidden;} footer.wds-global-footer{display:none;visibility:hidden;} #WikiaBar{display:none;visibility:hidden;} #WikiaRailWrapper{display:none;visibility:hidden;} #WikiaRail{display:none;visibility:hidden;} #mixed-content-footer{display:none;visibility:hidden;} iframe[title=advertisement]{display:none;visibility:hidden;} img[alt=Advertisement]{display:none;visibility:hidden;} div.gpt-ad{display:none;visibility:hidden;}';
s=s+' div.ad-placement{display:none;visibility:hidden;} div.afs_ads{display:none;visibility:hidden;} div.ad-slot{display:none;visibility:hidden;} div.ad-slot-placeholder{display:none;visibility:hidden;} ';

    s=s+' div.article-featured-video{display:none;visibility:hidden;} div.top-ads-container{display:none;visibility:hidden;} ';
    sty.innerHTML=s;
document.body.appendChild(sty);
}