var app = {
  events:{
    moveCutSquare:function () {
      var square = document.querySelector('.cut-square');
      var clientX = document.querySelector('.clientX');
      var clientY = document.querySelector('.clientY');
      square.addEventListener('mousemove',function (e) {
        if (e.buttons === 1) {
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
