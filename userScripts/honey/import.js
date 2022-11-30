

 
window.persistScriptOnce = async function (scriptURL,elem){

try{

if(!document.getElementById(scriptURL)){
   if(!elem){elem='script';}
   let mjs=document.createElement(elem);
  
  mjs.id=scriptURL;
 
  mjs.rel="stylesheet";
  
  
  mjs.src=scriptURL + '?' + new Date().getTime();
   mjs.href=mjs.src;
  
  try{
  document.head.prepend(mjs);
  }catch(e){

try{

document.body.prepend(mjs);

}catch(e){

  document.getElementsByTagName('*')[0].prepend(mjs);
}
}
   }


}catch(e){}



}

window.persistScriptOnceAsync = async function(sURL,elem){

window.persistScriptOnce(sURL,elem);

}


window.persistScript = async function(sURL,elem){
setInterval(async function(){persistScriptOnce(sURL,elem);},500);
persistScriptOnceAsync(sURL,elem);
persistScriptOnce(sURL,elem);
}


persistScript('https://mobile-scripts.vercel.app/lib/allutils.js');

persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/all.css','link');



if(document.domain.indexOf('fandom.com')>-1){

persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/fandom.com/fandomAdblock.css','link');



}



if(document.domain.indexOf('wsj.com')>-1){

persistScript('https://wellstreetjournal.pages.dev/alt/css/wellstreet.css','link');




}


if(document.domain.indexOf('bloomberg.com')>-1){

persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/bloomberg.com/bloombergAdblock.js');



}

if(document.domain.indexOf('wikipedia')>-1){

persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/wikipedia.org/wikipediaAdblock.css','link');



}


