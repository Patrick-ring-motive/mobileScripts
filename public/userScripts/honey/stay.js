// ==UserScript==
// @name         iphone import
// @namespace    http://reddit.com
// @version      0.0.2
// @description  import from git
// @author       patrick
// @match        *://*
// @run-at       document-start
// ==/UserScript==

Node.prototype.appendChildren=function() {
  
  var append_arguments_length = arguments.length;
  
  for (var append_i = 0; append_i < append_arguments_length; append_i++) {
    try {
      
      var append_element = arguments[append_i];
      
      if (typeof append_element === "string") {

        this.appendChild(document.createTextNode(append_element));

      } else {

        this.appendChild(append_element);

      }

    } catch (e) { continue; }
  }

}


Node.prototype.prependChild = function(){

this.insertBefore(arguments[0],this.firstChild);
  
}

Node.prototype.prependChildren=function() {
  
  var prepend_arguments_length = arguments.length;
  
  for (var prepend_i = 0; prepend_i < prepend_arguments_length; prepend_i++) {
    try {
      
      var prepend_element = arguments[prepend_i];
      
      if (typeof prepend_element === "string") {

        this.prependChild(document.createTextNode(prepend_element));

      } else {

        this.prependChild(prepend_element);

      }

    } catch (e) { continue; }
  }

}

Node.prototype.beforeNode=function() {
  
  var before_arguments_length = arguments.length;
  
  for (var before_i = 0; before_i < before_arguments_length; before_i++) {
    try {
      
      var before_element = arguments[before_i];
      var this_parent=this.parentNode || this.parentElement;
      if (typeof before_element === "string") {

        this_parent.insertBefore(document.createTextNode(before_element),this);

      } else {
        
        this_parent.insertBefore(before_element,this);
       
      }

    } catch (e) { continue; }
  }

}

Node.prototype.insertAfter = function(){
  var after_sibling = arguments[1].nextSibling || arguments[1].nextElementSibling;
if(after_sibling){
this.insertBefore(arguments[0],after_sibling);
}else{
  this.insertBefore(arguments[0],arguments[1]);
  this.insertBefore(arguments[1],arguments[0]);
}
}

Node.prototype.afterNode=function() {
  
  var after_arguments_length = arguments.length;
  
  for (var after_i = 0; after_i < after_arguments_length; after_i++) {
    try {
      
      var after_element = arguments[after_i];
      var this_parent=this.parentNode || this.parentElement;
      if (typeof after_element === "string") {

        this_parent.insertAfter(document.createTextNode(after_element),this);

      } else {
        
        this_parent.insertAfter(after_element,this);
       
      }

    } catch (e) { continue; }
  }

}

Node.prototype.adjacent=function(){
  var adjacent_element = arguments[1];
  var adjacent_position = arguments[0];
  
  if(adjacent_position == 'beforebegin'){
    this.before(adjacent_element);
  }else if(adjacent_position == 'afterbegin'){
    this.prepend(adjacent_element);
  }else if(adjacent_position == 'beforeend'){
    this.append(adjacent_element);
  }else if(adjacent_position == 'afterend'){
    this.after(adjacent_element);
  }else{
    return null;
  }
  return adjacent_element;
  
}

Node.prototype.adjacentHTML=function(){
var adjacent_parser = new DOMParser();
return this.adjacent(arguments[0],adjacent_parser.parseFromString(arguments[1], "text/html"));

  
}

Node.prototype.append = Node.prototype.append || Node.prototype.appendChildren;
Node.prototype.prepend = Node.prototype.prepend || Node.prototype.prependChildren;
Node.prototype.before = Node.prototype.before || Node.prototype.beforeNode;
Node.prototype.after = Node.prototype.after || Node.prototype.afterNode;
Node.prototype.insertAdjacentElement = Node.prototype.insertAdjacentElement || Node.prototype.adjacent;
Node.prototype.insertAdjacentText = Node.prototype.insertAdjacentText || Node.prototype.adjacent;
Node.prototype.insertAdjacentHTML = Node.prototype.insertAdjacentHTML || Node.prototype.adjacentHTML;





 
window.persistScriptOnce = function (scriptURL,elem){

try{

if(!document.getElementById(scriptURL)){
  
  if(!elem){elem='script';}
   
   let mjs=document.createElement(elem);
  
  mjs.id=scriptURL;
  mjs.rel="stylesheet";
  
  
  mjs.src=scriptURL + '?' + new Date().getTime();
   mjs.href=mjs.src;
  try{
  document.head.prepend(mjs);
  }catch(e){

try{

document.body.prepend(mjs);

}catch(e){

  document.getElementsByTagName('*')[0].prepend(mjs);
}
}
   }


}catch(e){}



}


window.persistScriptOnceAsync = async function(sURL,elem){

window.persistScriptOnce(sURL,elem);

}

window.persistScript = function(sURL,elem){
setInterval(async function(){window.persistScriptOnce(sURL,elem);},500);
window.persistScriptOnceAsync(sURL,elem);
window.persistScriptOnce(sURL,elem);
}


persistScript('https://mobile-scripts.vercel.app/userScripts/honey/imports.js');
