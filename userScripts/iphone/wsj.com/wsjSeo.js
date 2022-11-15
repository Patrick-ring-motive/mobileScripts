
 window.sleep=function(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


async function  seoLink(URL){
  
for(let i=0;i<1;i++){try{
  
let ifr = document.createElement('iframe');
ifr.src=URL;
document.body.appendChild(ifr);
  
}catch(e){continue;}}
  
await sleep(1);              
                
  
for(let i=0;i<1;i++){try{
  
let sty1 = document.createElement('link');
sty1.href=URL;
  sty1.rel=preload;
  sty1.as='document';
  sty1.type='text/html';
document.body.appendChild(sty1);
  
}catch(e){continue;}}
  
await sleep(1);
  
  
for(let i=0;i<1;i++){try{
  
let al = document.createElement('a');
al.href=URL;
document.body.appendChild(al);
  
}catch(e){continue;}}

await sleep(1);
                     
for(let i=0;i<1;i++){try{
  
let ifr = document.createElement('iframe');
ifr.src=URL;
document.body.appendChild(ifr);
  
}catch(e){continue;}}
  
await sleep(1);              
                     
} 
