hideAds();
setInterval(async function() { hideAds(); }, 500);



async function hideAds() {

  let closeBtn = document.querySelector('img[src*="svg-close-btn-white"]');
  if (closeBtn) {
    closeBtn.click();
  }

}