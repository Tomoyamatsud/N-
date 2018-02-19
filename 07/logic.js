(function()
{
  'use strict';

  var age = 16;
  var isFemale = true;

  if( age >= 0 && age <= 15)
  {
    document.write("チケットは800円です。");
  }
  else if( age < 0 || age > 120)
  {
    document.write("範囲エラーです。");
  }
  else
  {
    if( isFemale == true )
    {
      document.write("チケットは1000円です。");
    }
    else
    {
      document.write("チケットは1800円です。");
    }
  }
}
)();
