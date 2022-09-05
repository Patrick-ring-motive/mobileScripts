//////////////////////////////////////////page storage utils below///////////////////////////////////////////////

window.pageStorage = {
	
	initd : false,
	
	storageBox : null,
	
	boxId : "XQXQpageStorageXQXQ",
 
    init : function(){ var box=document.createElement('div');
	if(document.getElementById(this.boxId+"pageStorageBox"+this.boxId)){document.head.removeChild(document.getElementById(this.boxId+"pageStorageBox"+this.boxId));}
		box.id=this.boxId+"pageStorageBox"+this.boxId;
		box.style.visibility="hidden";
		box.style.display="none";
		box.className=this.boxId+"main";
		document.head.appendChild(box);
		this.storageBox=box;
		this.initd=true;
		return this.initd;
	},
	
	getItem : function(ind){
		if(!this.initd)this.init();
		var rawval=false;
		var indc=this.boxId+ind+this.boxId;
		var elem=document.getElementById(indc);
		if(elem){
		 rawval=document.getElementById(indc).getAttribute("pageStorageValue");	
			if(rawval.length > 0){
				
				var val=rawval.split(this.boxId)[1];
				if(rawval.length > 0){
					return val;
				}else{return rawval;}
			}else{return false;}
		}else{
			return rawval;
		}				
		
	},
	setItem : function(ind,rawval){
		if(!this.initd)this.init();
		var indc=this.boxId+ind+this.boxId;
		var elem=document.getElementById(indc);
		if(!elem){
			
			elem=document.createElement('div');
			elem.id=indc;
			elem.className=this.boxId;
			elem.style.visibility="hidden";
			elem.style.display="none";
			this.storageBox.appendChild(elem);
		}
		elem.setAttribute("pageStorageValue",this.boxId+rawval+this.boxId);
		return true;
	},
	removeItem : function(ind){
		if(!this.initd)this.init();
		var indc=this.boxId+ind+this.boxId;
		var elem=document.getElementById(indc);
		if(elem){
			this.storageBox.removeChild(elem);
			return true;
			}else{return false;}
		
	},
	
	getFloat : function (index){
		if(!this.initd)this.init();
		var fl = parseFloat(this.getItem(index));
		
		if(isNaN(fl))return false;
		
		return fl;
		
	},

	setFloat : function (index,floatVal){
		if(!this.initd)this.init();
		return this.setItem(index,""+floatVal);
		return true;
	},

	getInt : function (index){
		if(!this.initd)this.init();
		var i = parseInt(this.getItem(index));
		
		if(isNaN(i))return false;
		
		return i;
		
	},

	setInt : function (index,intVal){
		if(!this.initd)this.init();
		return this.setItem(index,""+intVal);
		return true;
	}
	
	
	
  
}


//////////////////////////////////////////window storage utils below///////////////////////////////////////////////

window.winStorage  = {
	initd : false,
	
	storageBox : new Map(),
	
	
	
	
	getItem : function(ind){

	return storageBox.get(ind);
		
	},
	setItem : function(ind,rawval){
	return storageBox.set(ind,rawval);
	},
	removeItem : function(ind){
	
		return storageBox.delete(ind);
		
		
	},
	
	getFloat : function (index){
		
		var fl = parseFloat(this.getItem(index));
		
		if(isNaN(fl))return false;
		
		return fl;
		
	},

	setFloat : function (index,floatVal){
		
		return this.setItem(index,""+floatVal);
		return true;
	},

	getInt : function (index){
		
		var i = parseInt(this.getItem(index));
		
		if(isNaN(i))return false;
		
		return i;
		
	},

	setInt : function (index,intVal){
		
		return this.setItem(index,""+intVal);
		return true;
	}
	
	
	
	
  
}
//////////////////////////////////////////////////////path storage utils below///////////////////////////////////////////////

window.pathStorage = {
	
	initd : false,
	
	storageBox : null,
	
	path : encodeURIComponent(window.location.pathname),
	
	
	getItem : function(ind){
		var pind=this.path+"XQXQpathStorageXQXQ"
		var nind=pind+ind;
		var rawval = localStorage.getItem(nind);
		if(rawval){return rawval;}else{return false;}
	},
	setItem : function(ind,rawval){
		var pind=this.path+"XQXQpathStorageXQXQ"
		var nind=pind+ind;
		localStorage.setItem(nind,rawval);
		return true;
	},
	removeItem : function(ind){
		var pind=this.path+"XQXQpathStorageXQXQ"
		var nind=pind+ind;
		return localStorage.removeItem(nind);
		
		
	},
	
	getFloat : function (index){
		
		var fl = parseFloat(this.getItem(index));
		
		if(isNaN(fl))return false;
		
		return fl;
		
	},

	setFloat : function (index,floatVal){
		
		return this.setItem(index,""+floatVal);
		return true;
	},

	getInt : function (index){
		
		var i = parseInt(this.getItem(index));
		
		if(isNaN(i))return false;
		
		return i;
		
	},

	setInt : function (index,intVal){
		
		return this.setItem(index,""+intVal);
		return true;
	}
	
	
	
  
}


//////////////////////////////////////////////////////local storage utils below/////////////////////////////////





Storage.prototype.getFloat = function (index){
	
	var fl = parseFloat(this.getItem(index));
	
	if(isNaN(fl))return false;
	
	return fl;
	
}

Storage.prototype.setFloat = function (index,floatVal){
	
	return this.setItem(index,""+floatVal);
	
}

Storage.prototype.getInt = function (index){
	
	var i = parseInt(this.getItem(index));
	
	if(isNaN(i))return false;
	
	return i;
	
}

Storage.prototype.setInt = function (index,intVal){
	
	return this.setItem(index,""+intVal);
	
}

///////////////////////////////////////////////////domain storage below//////////////////////////////////////////////////////

window.domainStorage = {

getItem: function(name) {
  var match = document.cookie.match(new RegExp('(^| )' +"domainStorage"+ name + '=([^;]+)'));
  if (match) return match[2];
},
    setItem: function(id,val){

    this.setMyCookie(id+"="+val);

},
    mydomain: function(){
var mydomain = this.getDomainName(document.domain);
    return mydomain;
},
    getDomainName: function(hostName)
{
    return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
},
    setMyCookie: function(str){
document.cookie = "domainStorage"+str+"; Domain="+this.mydomain();

},
	removeItem : function(ind){
		this.setMyCookie(id+"=");
		
	},
	
	getFloat : function (index){
		var fl = parseFloat(this.getItem(index));
		
		if(isNaN(fl))return false;
		
		return fl;
		
	},

	setFloat : function (index,floatVal){
		
		return this.setItem(index,""+floatVal);
		
	},

	getInt : function (index){
	
		var i = parseInt(this.getItem(index));
		
		if(isNaN(i))return false;
		
		return i;
		
	},

	setInt : function (index,intVal){
		
		return this.setItem(index,""+intVal);
		
	}
	




}

window.getName = function (d){
  const error = new Error();
 
  const firefoxMatch = (error.stack.split('\n')[0 + d].match(/^.*(?=@)/) || [])[0];
  const chromeMatch = error.stack.split('at ')[d].split(' ')[0];
  const safariMatch = error.stack.split('\n')[0 + d];

  // firefoxMatch ? console.log('firefoxMatch', firefoxMatch) : void 0;
  // chromeMatch ? console.log('chromeMatch', chromeMatch) : void 0;
  // safariMatch ? console.log('safariMatch', safariMatch) : void 0;

  return firefoxMatch || chromeMatch || safariMatch;
}
