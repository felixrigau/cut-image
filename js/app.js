var component = {
  dimensions:{
    square:{
      width:200,
      height:200,
    },
  },

  events:{
    moveCutSquare:function () {
      var square = document.querySelector('.cut-square');
      square.addEventListener('mousemove',function (e) {
        if (e.buttons === 1 && !e.shiftKey) {
          if (square.style.left && square.style.top && square.style.backgroundPositionX && square.style.backgroundPositionY) {
            square.style.left=(parseInt(square.style.left)+event.movementX).toString()+'px';
            square.style.top=(parseInt(square.style.top)+event.movementY).toString()+'px';
            square.style.backgroundPositionX=(parseInt(square.style.backgroundPositionX)+event.movementX*-1).toString()+'px';
            square.style.backgroundPositionY=(parseInt(square.style.backgroundPositionY)+event.movementY*-1).toString()+'px';
          }else {
            square.style.left=(0+event.movementX).toString()+'px';
            square.style.top=(0+event.movementY).toString()+'px';
            square.style.backgroundPositionX=(0+event.movementX*-1).toString()+'px';
            square.style.backgroundPositionY=(0+event.movementY*-1).toString()+'px';
          }
        }
      });
    },
    
    resizeCutSquare:function () {
      var button = document.querySelector('.resize');
      var square = document.querySelector('.cut-square');
      button.addEventListener('mousemove',function (e) {
        if (e.buttons === 1 && e.shiftKey === true) {
          if (square.style.width && square.style.height) {
            square.style.width=(parseInt(square.style.width)+event.movementX).toString()+'px';
            square.style.height=(parseInt(square.style.height)+event.movementY).toString()+'px';
            console.log("X:"+event.movementX," Y:"+event.movementY)
          }else {
            square.style.width=(component.dimensions.square.width+event.movementX).toString()+'px';
            square.style.height=(component.dimensions.square.width+event.movementY).toString()+'px';
            console.log("X:"+event.movementX," Y:"+event.movementY)
          }
        }
      });
    }
  },

  actions:{
    cut:function () {
      var button = document.querySelector('.cut');
      button.addEventListener('click',function () {
        var image = document.querySelector('.original-image'),
            cutSquare = document.querySelector('.cut-square'),
            canvas = document.createElement('canvas'),
            context = canvas.getContext('2d'),
            sx = parseInt(cutSquare.style.left.replace('px','')),
            sy = parseInt(cutSquare.style.top.replace('px','')),
            sWidth = cutSquare.clientWidth,
            sHeight = cutSquare.clientHeight;
            canvas.width = component.dimensions.square.width;
            canvas.height = component.dimensions.square.height;
        context.drawImage(image,sx,sy,sWidth,sHeight,0,0,sWidth,sHeight);
        var newImage = new Image();
        newImage.src = canvas.toDataURL('image/png');
        var croppedImageContainer = document.querySelector('.cropped-images');
        croppedImageContainer.appendChild(newImage);
      });
    }
  }
};

(function () {
    component.events.moveCutSquare();
    component.events.resizeCutSquare();
    component.actions.cut();
})();
