(function()
{
  'use strict';
  var game = {
    startTime: null,
    displayArea: document.getElementById("display-area"),
    start: function(){
      game.startTime = new Date().getTime();
      document.body.onkeypress = game.stop;
    },
    stop: function(){
      var currentTime = new Date().getTime();
      var seconds = (currentTime - game.startTime) / 1000;

      if( 9.5 <= seconds && seconds <= 10.0){
        game.displayArea.innerText = seconds + "秒でした。すごい！";
      }
      else{
        game.displayArea.innerText = seconds + "秒でした。残念！";
      }
    }
  }

  if(confirm('okだと思ったらボタンを押してください。'))
  {
    game.start();
  }
}
)();
