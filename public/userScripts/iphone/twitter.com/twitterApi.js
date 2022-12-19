XMLHttpRequest.prototype.nativeOpen=XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.customOpen=function(method, url, asynch, user, password)
{

this.method=method;
this.requestURL=url.replace('api.twitter.com','twitter.webserve.workers.dev/api-twitter');
this.asynch=asynch;
if(user){this.user=user;}
if(password){this.password=password;}
this.requestHeaders=new Map();

return this.nativeOpen(method, url, asynch, user, password);

}



XMLHttpRequest.prototype.open=XMLHttpRequest.prototype.customOpen;





window.nativeFetch=window.fetch;

window.customFetch=async function(request,headers){

var req;
  var response;
  if(typeof request=='string'){
  
    req=new Request(request.replace('api.twitter.com','twitter.webserve.workers.dev/api-twitter'),headers);
    response = await window.nativeFetch(req);
  
  }else{
   // req=new Request(request.url.replace('api.twitter.com','twitter.webserve.workers.dev/api-twitter'),request);
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
