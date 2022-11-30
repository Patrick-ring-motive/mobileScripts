// ==UserScript==
// @name         iphone import
// @namespace    http://reddit.com
// @version      0.0.2
// @description  import from git
// @author       patrick
// @match        *://*
// @run-at       document-start
// ==/UserScript==

 
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
setInterval(async function(){window.persistScriptOnce(sURL,elem);},500);
window.persistScriptOnce(sURL,elem);
}


persistScript('https://mobile-scripts.vercel.app/userScripts/honey/imports.js');