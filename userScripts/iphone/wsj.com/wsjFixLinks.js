
setInterval(async function(){
  
  
let lnks=document.querySelectorAll('a[href*="deloitte.wsj.com"]');
for(let i=0;i<lnks.length;i++){

lnks[i].href=lnks[i].href.replace('deloitte.wsj.com','dwsj.webserve.workers.dev');

}

let lnks=document.querySelectorAll('a[href*="wsj.com"]');
for(let i=0;i<lnks.length;i++){

lnks[i].href=lnks[i].href.replace('www.wsj.com','wsj.webserve.workers.dev');

}
if(document.querySelector('a[href*="wsjshop.com/"]')){

   let dswj =document.querySelector('a[href*="wsjshop.com/"]');
   dswj.href="https://dwsj.webserve.workers.dev/";
   dswj.innerText='Insights';
}

},1000);
