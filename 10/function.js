(function()
{
  'use strict';

  var myBirthTime = new Date(1987,2,26,0,0);
  function updataParagraph(){
    var now = new Date();
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText = '生まれてから'
    + seconds + '秒経過。';
    }
    setInterval(updataParagraph, 50);
}
)();
