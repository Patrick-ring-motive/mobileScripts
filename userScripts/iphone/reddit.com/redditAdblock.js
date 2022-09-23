redditDark();
setInterval(async function(){redditDark();},500);

async function redditDark(){
//reddit darkmode
if((document.domain.indexOf('reddit')>-1)){
	
	var stuff = document.getElementsByTagName('*');

for(var i=0;i<stuff.length;i++){
var compStyles = window.getComputedStyle(stuff[i]);
if(stuff[i].tagName=='A'){stuff[i].style.color='white';continue;}

    if(compStyles.getPropertyValue('background').indexOf('rgb(255, 255, 255)'>=1)) {
		
		stuff[i].style.backgroundColor='#1A1A1B';stuff[i].style.color='white';
		}
 if(stuff[i].textContent.length>0) {stuff[i].style.color='white';}
}
}


}

if((document.domain.indexOf('reddit')>-1)&&(window.location.href.indexOf('comments')==-1)){// reddit

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
    
        var spans=document.querySelectorAll('a[rel*="sponsored"]');

    for(var i=0;i<spans.length;i++){

     
    spans[i].parentElement.parentElement.parentElement.style.display='none';
    

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
