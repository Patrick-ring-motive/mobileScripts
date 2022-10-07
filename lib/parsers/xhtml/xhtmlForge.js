      var documentSource = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"><head></head><body></body></html>';
      var blob = new Blob([documentSource], { type: "application/xhtml+xml" });
      XHTMLUrl = URL.createObjectURL(blob);
      
      var XHTMLLoader=document.createElement('link');
      XHTMLLoader.rel = 'preload';
      XHTMLLoader.href = XHTMLUrl;
      XHTMLLoader.as = 'document';
      XHTMLLoader.type = "application/xhtml+xml";
      document.head.appendChild(XHTMLLoader);

      var XHTMLForge=document.createElement('iframe');
      XHTMLForge.id='XHTMLForge';
      XHTMLForge.style.visibility='hidden';
      XHTMLForge.style.maxHeight='0px';
      XHTMLForge.src = XHTMLUrl;

      var XHTMLStage=document.createElement('div');
      XHTMLStage.id='XHTMLStage';
      XHTMLStage.style.visibility='hidden';
      XHTMLStage.style.maxHeight='0px';

      document.body.prepend(XHTMLForge);
      document.body.prepend(XHTMLStage);
      
      
      document.createXHTMLElement=function(tag){
      
      document.getElementById('XHTMLForge').contentDocument.body.innerHTML='<'+tag+'></'+tag+'>';
      let tg=document.getElementById('XHTMLForge').contentDocument.body.firstElementChild;
      
        document.getElementById('XHTMLStage').appendChild(tg);
        return tg;
        
      }

