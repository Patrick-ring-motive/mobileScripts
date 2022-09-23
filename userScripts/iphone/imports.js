=

 
window.persistScriptOnce = async function (scriptURL){

try{

if(!document.getElementById(scriptURL)){
   
   let mjs=document.createElement('script');
  
  mjs.id=scriptURL;
  
  mjs.src=scriptURL + '?' + new Date().getTime();
   
  document.body.appendChild(mjs);
  
   }


}catch(e){}



}


window.persistScript = async function(sURL){
setInterval(async function(){persistScriptOnce(sURL);},500);
persistScriptOnce(sURL);
}


persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/all.js');
