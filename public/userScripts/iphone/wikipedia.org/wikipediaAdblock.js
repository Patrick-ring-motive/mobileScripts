if (window.location.host.indexOf('wikipedia') > -1) {
  var sty = document.createElement('style');


  var s = '';
  s = s + ' div.frb-inline-topbar{display:none;visibility:hidden;max-height:0px;height:0px;min-height:0px;}';
  s=s+' div.frb-inline{display:none;visibility:hidden;max-height:0px;height:0px;min-height:0px;}';

  sty.innerHTML = s;
try{
  document.head.prepend(sty);
  }catch(e){

try{

document.body.prepend(sty);

}catch(e){

  document.getElementsByTagName('*')[0].prepend(sty);
}
}

  
}
