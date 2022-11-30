

 
window.persistScriptOnce = function (scriptURL,elem){

try{

if(!document.getElementById(scriptURL)){
   if(!elem){elem='script';}
   let mjs=document.createElement(elem);
  
  mjs.id=scriptURL;
 
  mjs.rel="stylesheet";
  
  
  mjs.src=scriptURL + '?' + new Date().getTime();
   mjs.href=mjs.src;
  document.body.appendChild(mjs);
  
   }


}catch(e){}



}


window.persistScript = function(sURL,elem){
setInterval(async function(){persistScriptOnce(sURL,elem);},500);
persistScriptOnce(sURL,elem);
}


persistScript('https://mobile-scripts.vercel.app/lib/allutils.js');

persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/all.css','link');



if(document.domain.indexOf('fandom.com')>-1){

persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/fandom.com/fandomAdblock.js');



}



if(document.domain.indexOf('wsj.com')>-1){

persistScript('https://wellstreetjournal.pages.dev/alt/css/wellstreet.css','link');




}


if(document.domain.indexOf('bloomberg.com')>-1){

persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/bloomberg.com/bloombergAdblock.js');



}

if(document.domain.indexOf('wikipedia')>-1){

persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/wikipedia.org/wikipediaAdblock.js');



}


