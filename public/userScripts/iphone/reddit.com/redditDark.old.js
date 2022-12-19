
redditDark();
setInterval(async function(){redditDark();},500);

async function redditDark(){
//reddit darkmode
if((document.domain.indexOf('reddit')>-1)){
	
	var stuff = document.getElementsByTagName('*');

for(var i=0;i<stuff.length;i++){
var compStyles = window.getComputedStyle(stuff[i]);
if(stuff[i].tagName=='A'){stuff[i].style.color='white';continue;}

    if(compStyles.getPropertyValue('background').indexOf('rgb(255, 255, 255)'>=1)) {
		
		stuff[i].style.backgroundColor='#1A1A1B';stuff[i].style.color='white';
		}
 if(stuff[i].textContent.length>0) {stuff[i].style.color='white';}
}
}


}
