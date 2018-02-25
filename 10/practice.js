(function()
{
  'use strict';

  var myBirthTime = new Date(1987,2,26,0,0);
  function updataParagraph(){
    var now = new Date();
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    var days = seconds / (60 * 24 * 24);
    document.getElementById('birth-day').innerText = '生まれてから'
    + days + '日経過。';
    }
    setInterval(updataParagraph, 50);
}
)();
