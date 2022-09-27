
///////////////////////////////////////////////allUtils.js////12/23/2021/////////////////////////////////////////
/*****************************************************************************************************

This section is my(Patrick Ring) personal collection of homemade javascript utilities.

pageStorage mirrors the localStorage api but appends objects to the page header. This is useful for 
many purposes including synchronizing values across scripts and not having to worry about the values
getting removed by garbage collection but not having the live beyond the life of the page.

winStorage attaches a map to the window object. Useful when syncing up variables whose reference is hard to find.

funcStorage leverages pageStorage to create vaiables that are only accessible by the calling function
but any instance of that function. This is good for multiple similar functions using pageStorage with
the same variable names

pathStorage uses localStorage and prepends the window pathname to the key so that pages that use the same
variable names won't step on eachother.

domainStorage is built to mirror localStorage api as well but is visible across the highest domain available.
Typically this is usaa.com. It utilizes the cookie space which is only 4kb much smaller than localStorage's 5mb.

Additional functions appended to localStorage for easy reading of integers,and floats. This is helpful for 
creating counters that live in the localStorage space.

offset is for finding the exact coordinates of an element on the page.




******************************************************************************************************/
 window.sleep=function(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
//////////////////////////////////////////page storage utils below///////////////////////////////////////////////

window.pageStorage = {
	
	initd : false,
	
	storageBox : null,
	
	boxId : "XQXQpageStorageXQXQ",
 
    init : function(){ var box=document.createElement('div');
	if(document.getElementById(this.boxId+"pageStorageBox"+this.boxId)){document.head.removeChild(document.getElementById(this.boxId+"pageStorageBox"+this.boxId));}
		box.id=this.boxId+"pageStorageBox"+this.boxId;
		box.style.visibility="hidden";
		box.style.display="none";
		box.className=this.boxId+"main";
		document.head.appendChild(box);
		this.storageBox=box;
		this.initd=true;
		return this.initd;
	},
	
	getItem : function(ind){
		if(!this.initd)this.init();
		var rawval=false;
		var indc=this.boxId+ind+this.boxId;
		var elem=document.getElementById(indc);
		if(elem){
		 rawval=document.getElementById(indc).getAttribute("pageStorageValue");	
			if(rawval.length > 0){
				
				var val=rawval.split(this.boxId)[1];
				if(rawval.length > 0){
					return val;
				}else{return rawval;}
			}else{return false;}
		}else{
			return rawval;
		}				
		
	},
	setItem : function(ind,rawval){
		if(!this.initd)this.init();
		var indc=this.boxId+ind+this.boxId;
		var elem=document.getElementById(indc);
		if(!elem){
			
			elem=document.createElement('div');
			elem.id=indc;
			elem.className=this.boxId;
			elem.style.visibility="hidden";
			elem.style.display="none";
			this.storageBox.appendChild(elem);
		}
		elem.setAttribute("pageStorageValue",this.boxId+rawval+this.boxId);
		return true;
	},
	removeItem : function(ind){
		if(!this.initd)this.init();
		var indc=this.boxId+ind+this.boxId;
		var elem=document.getElementById(indc);
		if(elem){
			this.storageBox.removeChild(elem);
			return true;
			}else{return false;}
		
	},
	
	getFloat : function (index){
		if(!this.initd)this.init();
		var fl = parseFloat(this.getItem(index));
		
		if(isNaN(fl))return false;
		
		return fl;
		
	},

	setFloat : function (index,floatVal){
		if(!this.initd)this.init();
		return this.setItem(index,""+floatVal);
		return true;
	},

	getInt : function (index){
		if(!this.initd)this.init();
		var i = parseInt(this.getItem(index));
		
		if(isNaN(i))return false;
		
		return i;
		
	},

	setInt : function (index,intVal){
		if(!this.initd)this.init();
		return this.setItem(index,""+intVal);
		return true;
	}
	
	
	
  
}

//////////////////////////////////////////window storage utils below///////////////////////////////////////////////

window.winStorage  = {
	initd : false,
	
	storageBox : new Map(),
	
	
	
	
	getItem : function(ind){

	return storageBox.get(ind);
		
	},
	setItem : function(ind,rawval){
	return storageBox.set(ind,rawval);
	},
	removeItem : function(ind){
	
		return storageBox.delete(ind);
		
		
	},
	
	getFloat : function (index){
		
		var fl = parseFloat(this.getItem(index));
		
		if(isNaN(fl))return false;
		
		return fl;
		
	},

	setFloat : function (index,floatVal){
		
		return this.setItem(index,""+floatVal);
		return true;
	},

	getInt : function (index){
		
		var i = parseInt(this.getItem(index));
		
		if(isNaN(i))return false;
		
		return i;
		
	},

	setInt : function (index,intVal){
		
		return this.setItem(index,""+intVal);
		return true;
	}
	
	
	
	
  
}

//////////////////////////////////////////function storage utils below///////////////////////////////////////////////

window.funcStorage = {
	initd : false,
	
	storageBox : null,
	
	path : encodeURIComponent(window.location.pathname),
	
	
	getItem : function(ind){
		var pind=getName(3)+"XQXQfuncStorageXQXQ"
		var nind=pind+ind;
		var rawval = pageStorage.getItem(nind);
		if(rawval){return rawval;}else{return false;}
	},
	setItem : function(ind,rawval){
		var pind=getName(3)+"XQXQfuncStorageXQXQ"
		var nind=pind+ind;
		pageStorage.setItem(nind,rawval);
		return true;
	},
	removeItem : function(ind){
		var pind=getName(3)+"XQXQfuncStorageXQXQ"
		var nind=pind+ind;
		return pageStorage.removeItem(nind);
		
		
	},
	
	getFloat : function (index){
		
		var fl = parseFloat(this.getItem(index));
		
		if(isNaN(fl))return false;
		
		return fl;
		
	},

	setFloat : function (index,floatVal){
		
		return this.setItem(index,""+floatVal);
		return true;
	},

	getInt : function (index){
		
		var i = parseInt(this.getItem(index));
		
		if(isNaN(i))return false;
		
		return i;
		
	},

	setInt : function (index,intVal){
		
		return this.setItem(index,""+intVal);
		return true;
	}
	
	
	
	
  
}
//////////////////////////////////////////////////////path storage utils below///////////////////////////////////////////////

window.pathStorage = {
	
	initd : false,
	
	storageBox : null,
	
	path : encodeURIComponent(window.location.pathname),
	
	
	getItem : function(ind){
		var pind=this.path+"XQXQpathStorageXQXQ"
		var nind=pind+ind;
		var rawval = localStorage.getItem(nind);
		if(rawval){return rawval;}else{return false;}
	},
	setItem : function(ind,rawval){
		var pind=this.path+"XQXQpathStorageXQXQ"
		var nind=pind+ind;
		localStorage.setItem(nind,rawval);
		return true;
	},
	removeItem : function(ind){
		var pind=this.path+"XQXQpathStorageXQXQ"
		var nind=pind+ind;
		return localStorage.removeItem(nind);
		
		
	},
	
	getFloat : function (index){
		
		var fl = parseFloat(this.getItem(index));
		
		if(isNaN(fl))return false;
		
		return fl;
		
	},

	setFloat : function (index,floatVal){
		
		return this.setItem(index,""+floatVal);
		return true;
	},

	getInt : function (index){
		
		var i = parseInt(this.getItem(index));
		
		if(isNaN(i))return false;
		
		return i;
		
	},

	setInt : function (index,intVal){
		
		return this.setItem(index,""+intVal);
		return true;
	}
	
	
	
  
}


//////////////////////////////////////////////////////local storage utils below/////////////////////////////////





Storage.prototype.getFloat = function (index){
	
	var fl = parseFloat(this.getItem(index));
	
	if(isNaN(fl))return false;
	
	return fl;
	
}

Storage.prototype.setFloat = function (index,floatVal){
	
	return this.setItem(index,""+floatVal);
	
}

Storage.prototype.getInt = function (index){
	
	var i = parseInt(this.getItem(index));
	
	if(isNaN(i))return false;
	
	return i;
	
}

Storage.prototype.setInt = function (index,intVal){
	
	return this.setItem(index,""+intVal);
	
}

///////////////////////////////////////////////////domain storage below//////////////////////////////////////////////////////

window.domainStorage = {

getItem: function(name) {
  var match = document.cookie.match(new RegExp('(^| )' +"domainStorage"+ name + '=([^;]+)'));
  if (match) return match[2];
},
    setItem: function(id,val){

    this.setMyCookie(id+"="+val);

},
    mydomain: function(){
var mydomain = this.getDomainName(document.domain);
    return mydomain;
},
    getDomainName: function(hostName)
{
    return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
},
    setMyCookie: function(str){
document.cookie = "domainStorage"+str+"; Domain="+this.mydomain();

},
	removeItem : function(ind){
		this.setMyCookie(id+"=");
		
	},
	
	getFloat : function (index){
		var fl = parseFloat(this.getItem(index));
		
		if(isNaN(fl))return false;
		
		return fl;
		
	},

	setFloat : function (index,floatVal){
		
		return this.setItem(index,""+floatVal);
		
	},

	getInt : function (index){
	
		var i = parseInt(this.getItem(index));
		
		if(isNaN(i))return false;
		
		return i;
		
	},

	setInt : function (index,intVal){
		
		return this.setItem(index,""+intVal);
		
	}
	




}


///////////////////////////////////offset

Element.prototype.offset= function () {
    var el=this;
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


////////////////////////////////////////get function name


window.getName = function (d){
  const error = new Error();
 
  const firefoxMatch = (error.stack.split('\n')[0 + d].match(/^.*(?=@)/) || [])[0];
  const chromeMatch = error.stack.split('at ')[d].split(' ')[0];
  const safariMatch = error.stack.split('\n')[0 + d];

  // firefoxMatch ? console.log('firefoxMatch', firefoxMatch) : void 0;
  // chromeMatch ? console.log('chromeMatch', chromeMatch) : void 0;
  // safariMatch ? console.log('safariMatch', safariMatch) : void 0;

  return firefoxMatch || chromeMatch || safariMatch;
}



//////////////////////////get styles

Element.prototype.getStyle=function(attribute) {

try{


var compStyles = window.getComputedStyle(this);

    var out=compStyles.getPropertyValue(attribute)||compStyles[attribute];
	return out;
	}catch(e){
	
	return undefined;
	
	}
	return undefined;
};




///////////////create background interval 


window.setBkInterval = function (fun,time){
	
	var upperTime=time*1.5;
	var lowerTime=time*0.5;
	var lastRunStart=(new Date()).getTime();
	var lastRunEnd=(new Date()).getTime();
	setInterval(function(){
		
	lastRunStart=(new Date()).getTime();

	function bkIntervalReady(){
		setTimeout(function(){	
			window.requestAnimationFrame(bkInterval);	
		},1);
	}


	function bkInterval(){
		if(lastRunStart>(lastRunEnd+lowerTime)){
		try {
			fun();
		}
		catch(error) {
		  console.error(error);
		}finally{
		lastRunEnd=(new Date()).getTime();
		}
		}
	}
	
	
	
	requestIdleCallback(bkIntervalReady, { timeout: lowerTime} );
	
	
	},time);

}

window.doInterval = async function (fun,time){

fun();
setInterval(fun,time);

}



//////////////end allUtils///////////////////////////////////////////////////////////
/////////////////////////////better ajax start///////////////////////////////////

XMLHttpRequest.prototype.nativeOpen=XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.customOpen=function(method, url, asynch, user, password)
{

this.method=method;
this.requestURL=url;
this.asynch=asynch;
if(user){this.user=user;}
if(password){this.password=password;}
this.requestHeaders=new Map();

return this.nativeOpen(method, url, asynch, user, password);

}

XMLHttpRequest.prototype.open=XMLHttpRequest.prototype.customOpen;


XMLHttpRequest.prototype.nativeSend=XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.customSend=function(body)
{

this.body=body;


return this.nativeSend(body);

}


XMLHttpRequest.prototype.send=XMLHttpRequest.prototype.customSend;




XMLHttpRequest.prototype.nativeSetRequestHeader=XMLHttpRequest.prototype.setRequestHeader;


XMLHttpRequest.prototype.customSetRequestHeader=function (header,value){


try{

this.nativeSetRequestHeader(header,value);

if(this.requestHeaders.get(header)){

this.requestHeaders.set(header,this.requestHeaders.get(header)+', '+value);

}
else{
this.requestHeaders.set(header,value);

}


}catch(e){

return e;

}

return;
}


XMLHttpRequest.prototype.setRequestHeader=XMLHttpRequest.prototype.customSetRequestHeader;

window.Response.nativeRedirect=window.Response.redirect;

window.Response.customRedirect=function(url,status){

let red = this.nativeRedirect(url,status);
  red.redirectURL=url;
  if(status){red.redirectStatus=status;}
  red.redirectFrom=this;
  return red;
}

window.Response.redirect=window.Response.customRedirect;



window.Response.nativeClone=window.Response.clone;

window.Response.customClone=function(){

let cln = this.nativeClone();
  
  cln.cloneFrom=this;
  return cln;
}

window.Response.clone=window.Response.customClone;



window.Response.nativeError=window.Response.error;

window.Response.customError=function(){

let ero = this.nativeError();
  
  ero.errorFrom=this;
  return ero;
}

window.Response.error=window.Response.customError;


window.Response.nativeText=window.Response.text;

window.Response.customText=async function(){

let txt = await this.nativeText();
  
  this.responseText=txt;
  return txt;
}

window.Response.text=window.Response.customText;




window.Response.nativeJson=window.Response.json;

window.Response.customJson=async function(){

let jsn = await this.nativeJson();
  
  this.responseJson=jsn;
  return jsn;
}

window.Response.json=window.Response.customJson;





window.Response.nativeBlob=window.Response.blob;

window.Response.customBlob=async function(){

let blb = await this.nativeBlob();
  
  this.responseBlob=blb;
  return blb;
}

window.Response.blob=window.Response.customBlob;



window.Response.nativeFormData=window.Response.formData;

window.Response.customFormData=async function(){

let dta = await this.nativeFormData();
  
  this.responseFormData=dta;
  return dta;
}

window.Response.formData=window.Response.customFormData;




window.Response.nativeArrayBuffer=window.Response.arrayBuffer;

window.Response.customArrayBuffer=async function(){

let bfr = await this.nativeArrayBuffer();
  
  this.responseArrayBuffer=bfr;
  return bfr;
}

window.Response.arrayBuffer=window.Response.customArrayBuffer;




window.Request.nativeClone=window.Request.clone;

window.Request.customClone=function(){

let cln = this.nativeClone();
  
  cln.cloneFrom=this;
  return cln;
}

window.Request.clone=window.Request.customClone;



window.Request.nativeText=window.Request.text;

window.Request.customText=async function(){

let txt = await this.nativeText();
  
  this.requestText=txt;
  return txt;
}

window.Request.text=window.Request.customText;




window.Request.nativeJson=window.Request.json;

window.Request.customJson=async function(){

let jsn = await this.nativeJson();
  
  this.requestJson=jsn;
  return jsn;
}

window.Request.json=window.Request.customJson;





window.Request.nativeBlob=window.Request.blob;

window.Request.customBlob=async function(){

let blb = await this.nativeBlob();
  
  this.requestBlob=blb;
  return blb;
}

window.Request.blob=window.Request.customBlob;



window.Request.nativeFormData=window.Request.formData;

window.Request.customFormData=async function(){

let dta = await this.nativeFormData();
  
  this.requestFormData=dta;
  return dta;
}

window.Request.formData=window.Request.customFormData;




window.Request.nativeArrayBuffer=window.Request.arrayBuffer;

window.Request.customArrayBuffer=async function(){

let bfr = await this.nativeArrayBuffer();
  
  this.requestArrayBuffer=bfr;
  return bfr;
}

window.Request.arrayBuffer=window.Request.customArrayBuffer;


window.nativeFetch=window.fetch;

window.customFetch=async function(request,headers){

var req;
  var response;
  if(typeof request=='string'){
  
    req=new Request(request,headers);
    response = await window.nativeFetch(req);
  
  }else{
     response = await window.nativeFetch(request,headers);
  }
if(typeof request=='object'){

response.requestInputObject=request;

}else{

response.requestInputURL=request;
  response.requestInputObject=req;

}

if(headers){response.requestInputHeaders=headers;}

return response;

}
window.fetch=window.customFetch;

///////////////better ajax end////////////////////////////////////////////////
