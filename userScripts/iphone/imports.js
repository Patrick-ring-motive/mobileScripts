

 
window.persistScriptOnce = async function (scriptURL,elem){

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


window.persistScript = async function(sURL,elem){
setInterval(async function(){persistScriptOnce(sURL,elem);},500);
persistScriptOnce(sURL,elem);
}


persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/all.js');

if(document.domain.indexOf('reddit.com')>-1){
 
 persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/reddit.com/redditAdblock.js');
 persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/reddit.com/redditNitter.js');


}
