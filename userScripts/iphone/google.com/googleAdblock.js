
async function hideSponsor() {

  const sps = document.querySelectorAll('[id*="gws-ads"]');
  const sps_length = sps.length;
  for (let i = 0; i < sps.length; i++) {


    sps[i].parentElement.parentElement.parentElement.parentElement.style = '   display: none !important; visibility: hidden !important; opacity: 0 !important; max-height: 0px !important; height: 0px !important; transform: scale(0,0) !important; position: absolute !important; z-index: -99 !important;';


  }


  const spsw = document.querySelectorAll('w-ad-creative-spacer');
  const spsw_length = spsw.length;
  for (let i = 0; i < spsw.length; i++) {


    spsw[i].parentElement.style = '   display: none !important; visibility: hidden !important; opacity: 0 !important; max-height: 0px !important; height: 0px !important; transform: scale(0,0) !important; position: absolute !important; z-index: -99 !important;';


  }

  const spsa = document.querySelectorAll('[href*="google.com/aclk"]');
  const spsa_length = spsa.length;
  for (let i = 0; i < spsa.length; i++) {


    spsa[i].parentElement.parentElement.parentElement.parentElement.style = '   display: none !important; visibility: hidden !important; opacity: 0 !important; max-height: 0px !important; height: 0px !important; transform: scale(0,0) !important; position: absolute !important; z-index: -99 !important;';


  }

    const spsh = document.querySelectorAll('h3[role="heading"]');
  const spsh_length = spsh.length;
  for (let i = 0; i < spsh.length; i++) {

if(spsh[i].innerText.toLowerCase().indexOf('sponsor')>-1){
    spsh[i].parentElement.parentElement.style = '   display: none !important; visibility: hidden !important; opacity: 0 !important; max-height: 0px !important; height: 0px !important; transform: scale(0,0) !important; position: absolute !important; z-index: -99 !important;';
}

  }

}
hideSponsor();
setInterval(async function() { hideSponsor(); }, 500);