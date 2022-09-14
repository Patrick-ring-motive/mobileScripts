
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

