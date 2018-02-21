(function()
{
  'use strict';

  var charset = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

  for(var n = 0; n < charset.length; n++){
    for(var m = 0; m < charset.length; m++){
      document.write(charset[n]+charset[m]+'<br>');
    }
  }
}
)();
