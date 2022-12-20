if (document.domain.indexOf('tocpelk.usaa.com') > -1) {

  setInterval(async function() {

    document.title = document.title.replace('Kibana', 'Ҡibana Test');
    document.title = document.title.replace('Elastic', 'Ҡibana Test');

    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+zs7P+8vLz/vr6+/8PDw//Dw8P/w8PD/8PDw//Dw8P/xsbG//Ly8v/////////////////////////////////Kysr/ampq/3h4eP+CgoL/h4eH/4aGhv+Ghob/hYWF/5iYmP/y8vL/////////////////////////////////uLi4/y0tLf9ubm7/e3t7/4aGhv+IiIj/iIiI/4aGhv+9vb3//////////////////////////////////////7m5uf8HBwf/NDQ0/3Nzc/98fHz/h4eH/4eHh/+ZmZn/7Ozs//////////////////////////////////////+5ubn/BgYG/wMDA/9DQ0P/dnZ2/319ff+QkJD/2NjY////////////////////////////////////////////ubm5/wcHB/8AAAD/CQkJ/1FRUf+MjIz/1dXV//7+/v///////////////////////////////////////////7m5uf8HBwf/AAAA/wAAAP8VFRX/tLS0//////////////////////////////////////////////////////+5ubn/BwcH/wAAAP8AAAD/AAAA/zo6Ov/e3t7/////////////////////////////////////////////////ubm5/wcHB/8AAAD/AAAA/wAAAP8AAAD/VVVV/+7u7v///////////////////////////////////////////7m5uf8HBwf/AAAA/wAAAP8AAAD/AAAA/wICAv9zc3P/+Pj4//////////////////////////////////////+5ubn/BwcH/wAAAP8AAAD/AAAA/wAAAP8AAAD/BwcH/46Ojv/9/f3/////////////////////////////////3Nzc/4SEhP+AgID/gICA/4CAgP+AgID/gICA/39/f/+Tk5P/8PDw////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==';
    let links = document.querySelectorAll("link[rel~='icon']");
    const l = links.length;
    for (let i = 0; i < l; i++) {

      links[i].href = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+zs7P+8vLz/vr6+/8PDw//Dw8P/w8PD/8PDw//Dw8P/xsbG//Ly8v/////////////////////////////////Kysr/ampq/3h4eP+CgoL/h4eH/4aGhv+Ghob/hYWF/5iYmP/y8vL/////////////////////////////////uLi4/y0tLf9ubm7/e3t7/4aGhv+IiIj/iIiI/4aGhv+9vb3//////////////////////////////////////7m5uf8HBwf/NDQ0/3Nzc/98fHz/h4eH/4eHh/+ZmZn/7Ozs//////////////////////////////////////+5ubn/BgYG/wMDA/9DQ0P/dnZ2/319ff+QkJD/2NjY////////////////////////////////////////////ubm5/wcHB/8AAAD/CQkJ/1FRUf+MjIz/1dXV//7+/v///////////////////////////////////////////7m5uf8HBwf/AAAA/wAAAP8VFRX/tLS0//////////////////////////////////////////////////////+5ubn/BwcH/wAAAP8AAAD/AAAA/zo6Ov/e3t7/////////////////////////////////////////////////ubm5/wcHB/8AAAD/AAAA/wAAAP8AAAD/VVVV/+7u7v///////////////////////////////////////////7m5uf8HBwf/AAAA/wAAAP8AAAD/AAAA/wICAv9zc3P/+Pj4//////////////////////////////////////+5ubn/BwcH/wAAAP8AAAD/AAAA/wAAAP8AAAD/BwcH/46Ojv/9/f3/////////////////////////////////3Nzc/4SEhP+AgID/gICA/4CAgP+AgID/gICA/39/f/+Tk5P/8PDw////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==';

    }
    if (!document.getElementById('st')) {

      let st = document.createElement('style');
      st.id = 'st';

      st.innerHTML = 'body{filter:hue-rotate(180deg);} svg{filter:grayscale(100%);} img{filter:grayscale(100%);} .kibanaWelcomeLogo{filter:grayscale(100%);} span.euiLoadingSpinner{filter:grayscale(100%);} svg[aria-label="Elastic Logo"]{filter:grayscale(100%); /*background-image:url("https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt38b131256d241912/5d0cfe3a970556dd5800ebfe/logo-kibana-64-color.svg"); background-size: contain;*/ } /*svg[aria-label="Elastic Logo"]>path{visibility:hidden;}*/';
      // st.innerHTML=st.innerHTML+' path[fill="#00BFB3"]{display:none;}  path[fill="#FFF"]{display:none;} path[fill="#FEC514"]{display:none;} path[fill="#F04E98"]{display:none;}  path[fill="#1BA9F5"]{display:none;}  path[fill="#93C90E"]{display:none;}  path[fill="#07C"]{display:none;} ';

      document.body.appendChild(st);

    }

    try {
      let logo = document.querySelector('.euiHeaderLogo').firstElementChild;
      //logo.style.opacity='0';
      if (logo.innerHTML.toString().trim().length > 0)
        //logo.innerHTML='';
        //  logo.style.backgroundImage='url("https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt38b131256d241912/5d0cfe3a970556dd5800ebfe/logo-kibana-64-color.svg")';
        //  logo.style.backgroundSize='contain';
        logo.style.filter = 'grayscale(100%)';
      //https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt38b131256d241912/5d0cfe3a970556dd5800ebfe/logo-kibana-64-color.svg
    } catch (e) { }
  }, 1000);
  let st = document.createElement('style');
  st.id = 'st';

  st.innerHTML = 'body{filter:hue-rotate(180deg);} svg{filter:grayscale(100%);} img{filter:grayscale(100%);} .kibanaWelcomeLogo{filter:grayscale(100%);} span.euiLoadingSpinner{filter:grayscale(100%);} svg[aria-label="Elastic Logo"]{filter:grayscale(100%); /*background-image:url("https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt38b131256d241912/5d0cfe3a970556dd5800ebfe/logo-kibana-64-color.svg"); background-size: contain;*/ } /*svg[aria-label="Elastic Logo"]>path{visibility:hidden;}*/';
  //st.innerHTML=st.innerHTML+' path[fill="#00BFB3"]{display:none;}  path[fill="#FFF"]{display:none;} path[fill="#FEC514"]{display:none;} path[fill="#F04E98"]{display:none;}  path[fill="#1BA9F5"]{display:none;}  path[fill="#93C90E"]{display:none;}  path[fill="#07C"]{display:none;} ';

  document.body.appendChild(st);
}