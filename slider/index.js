var template = require('./slider.jade');
require('./slider.styl');
 
function Slider()
 {      
      var _DOM;
      var _leftOffset;
	  var _stage;
      var _thumb;
      
      this.getDOM = function()
      {
        if (!_DOM) createDOM();
        return _DOM;
      }  
    
      this.init = function()
      {
        _thumb = _DOM.querySelector('.thumb');		
		_stage = _DOM.querySelector('.stage');		
        _leftOffset = _DOM.getBoundingClientRect().left;
        
        _stage.onmousedown = function(event)
        {
            moveThumbToPosition(event.clientX - _leftOffset);
        
            document.onmousemove = function(event)
            {
              moveThumbToPosition(event.clientX - _leftOffset);
            }
          
            document.onmouseup = function(event)
            {
              document.onmousemove = null;
              document.onmouseup = null;
            }
        }
        
        _stage.ondragstart = function(){return false;}
      }
      
      function createDOM()
      {
        _DOM = document.createElement('div');
		_DOM.innerHTML = template();
      }
      
      function moveThumbToPosition(pos)
      {
		var newPos = pos - _thumb.getBoundingClientRect().width/2;
		
        if (newPos < 0)
        {
			newPos = 0;
        }
		
		if (newPos > _stage.getBoundingClientRect().width - _thumb.getBoundingClientRect().width)
        {
			newPos = _stage.getBoundingClientRect().width - _thumb.getBoundingClientRect().width;
        }
		
	    _thumb.style.left = newPos + 'px';    
      }
  }
	
module.exports = Slider;