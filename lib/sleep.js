var wandow = window || self || this;
 wandow.sleep=function(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}