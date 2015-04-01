var template = require('./slider.jade');
require('./slider.styl');
 
export default function Slider(){      
	this._DOM;
    this._leftOffset;
	this._stage;
    this._thumb;
}
	
Slider.prototype.getDOM = function(){
    if (!this._DOM) this._createDOM();
    return this._DOM;
}  
    
Slider.prototype.init = function(){
	this._thumb = this._DOM.querySelector('.thumb');		
	this._stage = this._DOM.querySelector('.stage');		
	this._leftOffset = this._DOM.getBoundingClientRect().left;
        
	this._stage.onmousedown = function(event)
    {
        this._moveThumbToPosition(event.clientX - this._leftOffset);
        
        document.onmousemove = function(event)
        {
            this._moveThumbToPosition(event.clientX - this._leftOffset);
        }.bind(this);
          
        document.onmouseup = function(event)
		{
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }.bind(this);
        
    this._stage.ondragstart = function(){return false;}
		
}
      
Slider.prototype._createDOM = function(){
	this._DOM = document.createElement('div');
	this._DOM.innerHTML = template();
}
      
Slider.prototype._moveThumbToPosition = function(pos){
	var newPos = pos - this._thumb.getBoundingClientRect().width/2;
		
    if (newPos < 0)
    {
		newPos = 0;
    }
		
	if (newPos > this._stage.getBoundingClientRect().width - this._thumb.getBoundingClientRect().width)
    {
		newPos = this._stage.getBoundingClientRect().width - this._thumb.getBoundingClientRect().width;
    }
		
	this._thumb.style.left = newPos + 'px';    
}	