var template = require('./slider.jade');
require('./slider.styl');
 
class Slider{      
	constructor(){
		
      this._DOM;
      this._leftOffset;
	  this._stage;
      this._thumb;
	}
    
	
	get getDOM()
    {
      if (!this._DOM) this._createDOM();
      return this._DOM;
    }  
    
    init()
    {
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
      
     _createDOM()
      {
        this._DOM = document.createElement('div');
		this._DOM.innerHTML = template();
      }
      
     _moveThumbToPosition(pos)
      {
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
	 
  }
	
module.exports = Slider;