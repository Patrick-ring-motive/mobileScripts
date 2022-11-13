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
