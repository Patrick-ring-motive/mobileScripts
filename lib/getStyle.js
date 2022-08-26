//////////////////////////get styles

Element.prototype.getStyle=function(attribute) {

try{


var compStyles = window.getComputedStyle(this);

    var out=compStyles.getPropertyValue(attribute)||compStyles[attribute];
	return out;
	}catch(e){
	
	return undefined;
	
	}
	return undefined;
};
