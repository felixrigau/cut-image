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
      var clientX = document.querySelector('.clientX');
      var clientY = document.querySelector('.clientY');
      square.addEventListener('mousemove',function (e) {
        if (e.buttons === 1) {
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
          clientX.innerText = parseInt(clientX.innerText)+event.movementX;
          clientY.innerText = parseInt(clientY.innerText)+event.movementY;
          console.log(e.buttons);
          console.log(event.movementX,event.movementY);
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
        context.drawImage(image,sx,sy,sWidth,sHeight);
        console.log(canvas.toDataURL('image/png'));
      });
    }
  }
};

(function () {
    component.events.moveCutSquare();
    component.actions.cut();
})();
