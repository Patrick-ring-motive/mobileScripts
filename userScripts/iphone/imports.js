

async function importIphoneAllScript(){

try{

if(!document.getElementById('iphoneAllScript')){
   
   let mjs=document.createElement('script');
  
  mjs.id='iphoneAllScript';
  
  mjs.src='https://mobile-scripts.vercel.app/userScripts/iphone/all.js?'+new Date().getTime();
   
  document.body.appendChild(mjs);
  
   }


}catch(e){}



}

setInterval(async function(){importIphoneAllScript();},500);
importIphoneAllScript();
