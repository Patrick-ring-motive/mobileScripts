
setInterval(async function(){
  
  
let dlnks=document.querySelectorAll('a[href*="deloitte.wsj.com"]');
for(let i=0;i<dlnks.length;i++){

dlnks[i].href=dlnks[i].href.replace('deloitte.wsj.com','dwsj.webserve.workers.dev');

}

let lnks=document.querySelectorAll('a[href*="wsj.com"]');
for(let i=0;i<lnks.length;i++){

lnks[i].href=lnks[i].href.replace('www.wsj.com','wsj.webserve.workers.dev');

}


},1000);

setInterval(async function(){
  
  if(document.querySelector('a[href*="wsjshop.com/"]')){

   let dswj =document.querySelector('a[href*="wsjshop.com/"]');
   dswj.innerText='Insights';
   dswj.href="https://dwsj.webserve.workers.dev/";
  
}
  
  
  },1000);
