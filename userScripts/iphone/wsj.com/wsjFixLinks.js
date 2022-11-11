
setInterval(async function(){

let lnks=document.querySelectorAll('a[href*="wsj.com"]');
for(let i=0;i<lnks.length;i++){

lnks[i].href=lnks[i].href.replace('www.wsj.com','wsj.webserve.workers.dev');

}


},1000);
