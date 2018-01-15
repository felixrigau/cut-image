var app = {
  events:{
    moveCutSquare:function () {
      var square = document.querySelector('.cut-square');
      var clientX = document.querySelector('.clientX');
      var clientY = document.querySelector('.clientY');
      square.addEventListener('mousemove',function (e) {
        if (e.buttons === 1) {
          square.style.left=(parseInt(square.style.left)+event.movementX).toString()+'px';
          square.style.top=(parseInt(square.style.top)+event.movementY).toString()+'px';
          clientX.innerText = parseInt(clientX.innerText)+event.movementX;
          clientY.innerText = parseInt(clientY.innerText)+event.movementY;
          console.log(e.buttons);
          console.log(event.movementX,event.movementY);
        }
      });
    }
  }
};

(function () {
    app.events.moveCutSquare();
})();
