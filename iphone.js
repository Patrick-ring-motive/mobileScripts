
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




if(document.domain.indexOf('reddit')>-1){// reddit

var sty=document.createElement('style');


sty.innerHTML='div.ad-banner{display:none;visibility:hidden;}';

document.body.appendChild(sty);

hidePromoted();

setInterval(function(){hidePromoted();},2000);

function hidePromoted(){

    var spans=document.getElementsByTagName('span');

    for(var i=0;i<spans.length;i++){

        if(spans[i].innerHTML=='promoted'){
    spans[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none';
    }

    }

        var h3=document.getElementsByTagName('h3');

    for(var j=0;j<h3.length;j++){

        if(h3[j].innerHTML=='Top livestream'){
    h3[j].parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none';
    }

    }

            var di=document.getElementsByTagName('div');

    for(var k=0;k<di.length;k++){

        if(di[k].innerHTML=='Reddit Premium'){
    di[k].parentElement.parentElement.parentElement.parentElement.style.display='none';
    }

    }



}



}
