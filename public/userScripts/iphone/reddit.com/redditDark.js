persistScript('https://mobile-scripts.vercel.app/userScripts/iphone/reddit.com/redditDark.css','link');

doInterval(async function(){
  
  
  if(document.querySelector('span[style*="filter: none;"]')){
  
    document.querySelector('span[style*="filter: none;"]').style.removeProperty('filter');
    
  }
                           
                           
},501);
