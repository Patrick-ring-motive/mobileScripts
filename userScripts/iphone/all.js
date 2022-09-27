
persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/all.css','link');


if(window.location.href.split('/')[2].indexOf('twitter.com')>-1){


window.location.href=window.location.href.replaceAll('twitter.com','nitter.net');


}
