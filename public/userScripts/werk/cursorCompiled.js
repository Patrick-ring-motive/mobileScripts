(()=>{var e={179:function(){var e=window||self||this;function t(t){return e.setTimeout?e.setTimeout(t,0):t()}e.clearStub=function(){},e.setImmediate=e.setImmediate||t,e.clearImmediate=e.clearImmediate||e.clearTimeout,e.requestAnimationFrame=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame,e.requestIdleCallback||e.setImmediate||e.queueMicrotask,e.mozRequestAnimationFrame=e.requestAnimationFrame,e.webkitRequestAnimationFrame=e.requestAnimationFrame,e.msRequestAnimationFrame=e.requestAnimationFrame,e.oRequestAnimationFrame=e.requestAnimationFrame,e.cancelAnimationFrame=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.cancelIdleCallback||e.clearTimeout||e.clearImmediate||e.clearStub,e.mozCancelAnimationFrame=e.cancelAnimationFrame,e.webkitCancelAnimationFrame=e.cancelAnimationFrame,e.msCancelAnimationFrame=e.cancelAnimationFrame,e.oCancelAnimationFrame=e.cancelAnimationFrame,e.requestIdleCallback=e.requestIdleCallback||e.requestAnimationFrame,e.cancelIdleCallback=e.cancelIdleCallback||e.cancelAnimationFrame||e.clearTimeout||e.clearImmediate||e.clearStub,e.queueMicrotask=e.queueMicrotask||t,e.nextTick=e.nextTick||e.queueMicrotask||e.requestIdleCallback||e.setImmediate}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}(()=>{"use strict";a(179);var e=window||self||void 0;e.sleep=function(e){return new Promise((t=>{setTimeout(t,e)}))},e.unblock=function(){return new Promise((e=>{requestIdleCallback(e,{timeout:100}),requestAnimationFrame(e)}))},e.idleCheck=async function(e){for(;"complete"!==document.readyState;)await unblock();requestIdleCallback(e)},e.idle=function(){return new Promise((e=>{idleCheck(e)}))},setInterval((async function(){if(await idle(),!document.getElementById("cursorID")){let e=document.createElement("style");e.id="cursorID",e.innerText='HTML,BODY,canvas,div{cursor: url("https://downloads.totallyfreecursors.com/cursor_files/blue-light1.ani"), url("https://downloads.totallyfreecursors.com/thumbnails/blue-light1.gif"), auto;}',window.location.href.indexOf("tocpelk")>-1&&(e.innerText='HTML,BODY,canvas,div{cursor: url("https://downloads.totallyfreecursors.com/cursor_files/bullseyeorange.ani"), url("https://downloads.totallyfreecursors.com/thumbnails/bullseyeorange.gif"), auto;}'),document.body.appendChild(e)}}),1e3)})()})();