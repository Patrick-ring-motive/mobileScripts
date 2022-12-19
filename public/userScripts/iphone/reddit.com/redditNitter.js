untwitter();
setInterval(async function(){untwitter();},1000);


async function untwitter(){

let lnks=document.querySelectorAll('a[href*="twitter.com"]');
  const lnks_length=lnks.length;
  for(let i=0;i<lnks_length;i++){
  
  lnks[i].href=lnks[i].href.replaceAll('twitter.com','nitter.net');
    lnks[i].target="_blank";
  
  }



}
