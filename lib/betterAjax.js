
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


window.nativeFetch=window.fetch;

window.customFetch=async function(request,headers){


var response = await window.nativeFetch(request,headers);

if(typeof request=='object'){

response.requestInputObject=request;

}else{

response.requestInputURL=request;

}

if(headers){response.requestInputHeaders=headers;}

return response;

}
window.fetch=window.customFetch;

