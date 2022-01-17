
styl();// for all

setInterval(function(){styl();},200);

function styl(){

    if(!document.getElementById('sty')){
var sty=document.createElement('style');
sty.id='sty';
sty.innerHTML='';

sty.innerHTML=sty.innerHTML+' [id*="google_ads"]{display:none;visibility:hidden;}';
sty.innerHTML=sty.innerHTML+' [class*="sponsored"]{display:none;visibility:hidden;}';

sty.innerHTML=sty.innerHTML+' .premium-banner-outer{display:none;visibility:hidden;}';
sty.innerHTML=sty.innerHTML+' .justify-content-center{display:none;visibility:hidden;}';
sty.innerHTML=sty.innerHTML+' #divcookie{display:none;visibility:hidden;}';
sty.innerHTML=sty.innerHTML+' div[id*="adBreak"]{display:none;visibility:hidden;}';
sty.innerHTML=sty.innerHTML+' div[id*="primis"]{display:none;visibility:hidden;}';
sty.innerHTML=sty.innerHTML+' div[id*="primis_player"]{display:none;visibility:hidden;}';
sty.innerHTML=sty.innerHTML+' div[id*="primis_container_div"]{display:none;visibility:hidden;}';
        sty.innerHTML=sty.innerHTML+' #ctl00_cite{display:none;visibility:hidden;}';
                sty.innerHTML=sty.innerHTML+' #frb-main{display:none;visibility:hidden;}';
          sty.innerHTML=sty.innerHTML+' #frb-inline{display:none;visibility:hidden;max-height:0px;max-witdh:0px;}';
         sty.innerHTML=sty.innerHTML+' #frb-nag{display:none;visibility:hidden;max-height:0px;max-witdh:0px;}';



document.body.appendChild(sty);
    }
}
