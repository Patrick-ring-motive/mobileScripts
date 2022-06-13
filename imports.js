

async function importGitScript(){

try{

if(!document.getElementById('patrickGITScript')){
   
   var mjs=document.createElement('script');
  
  mjs.id='patrickGITScript';
  
  mjs.src='https://raw.githubusercontent.com/Patrick-ring-motive/mobileScripts/main/iphone.js';
   
  document.body.appendChild(mjs);
  
   }


}catch(e){}



}

setInterval(async function(){importGitScript();},500);
importGitScript();
