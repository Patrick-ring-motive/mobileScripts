      var SVGForge=document.createElement('div');
    
	    SVGForge.innerHTML='<svg id="SVGForge"></svg>';    
      var SVGStage=document.createElement('div');
      SVGStage.id='SVGStage';
      
      document.body.appendChild(SVGForge);
      document.body.appendChild(SVGStage);
      
      
      document.createSVGElement=function(tag){
      
      document.getElementById('SVGForge').innerHTML='<'+tag+'> </'+tag+'>';
      let tg=document.getElementById('SVGForge').firstElementChild;
      
        document.getElementById('SVGStage').appendChild(tg);
        return tg;
        
      }
