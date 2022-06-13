

async function importGitScript(){

try{

if(!document.getElementById('patrickGITScript')){
   
   var mjs=document.createElement('script');
  
  mjs.id='patrickGITScript';
  
  mjs.src='https://gwiki.usaab.workers.dev/Patrick-ring-motive/mobileScripts/main/imports.js';
   
  document.body.appendChild(mjs);
  
   }


}catch(e){}



}

setInterval(async function(){importGitScript();},500);
importGitScript();
