import '../../../lib/sleep.js';

setInterval(async function() {
  await idle();
  if (!document.getElementById('cursorID')) {

    let st = document.createElement('style');
    st.id = 'cursorID';
    st.innerText = 'HTML,BODY,canvas,div{cursor: url("https://downloads.totallyfreecursors.com/cursor_files/blue-light1.ani"), url("https://downloads.totallyfreecursors.com/thumbnails/blue-light1.gif"), auto;}';

    if (window.location.href.indexOf('tocpelk') > -1) {

      st.innerText = 'HTML,BODY,canvas,div{cursor: url("https://downloads.totallyfreecursors.com/cursor_files/bullseyeorange.ani"), url("https://downloads.totallyfreecursors.com/thumbnails/bullseyeorange.gif"), auto;}';

    }

    document.body.appendChild(st);
  }
}, 1000);
