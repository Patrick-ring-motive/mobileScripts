persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/reddit.com/redditAdblock.css','link');

if((document.domain.indexOf('reddit')>-1)&&(window.location.href.indexOf('comments')==-1)){// reddit



hidePromoted();

setInterval(function(){hidePromoted();},2000);

function hidePromoted(){
    
    if(document.querySelector('button[class="XPromoPopup__actionButton"]')){document.querySelector('button[class="XPromoPopup__actionButton"]').click();}

    var spans=document.getElementsByTagName('span');

    for(var i=0;i<spans.length;i++){

        if(spans[i].innerHTML=='promoted'){
    spans[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none';
    }

    }
    
        var spans=document.querySelectorAll('a[rel*="sponsored"]');

    for(var i=0;i<spans.length;i++){
spans[i].parentElement.style.display='none';
     let notComment=spans[i].parentElement.parentElement.parentElement;
     
     if(!notComment.getAttribute('class')){notComment.style.display='none';}
    

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
