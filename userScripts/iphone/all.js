try{
  if(window.location.href.split('/')[2].indexOf('twitter.com')>-1){


     window.location.href=window.location.href.replaceAll('twitter.com','nitter.net');


  }
}catch(e){}



persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/all.css','link');


