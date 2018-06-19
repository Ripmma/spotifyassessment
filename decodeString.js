var decodeString = function(s) {
  s = s.replace(/]/g , "");
  s = s.replace(/\[/g , "");
  s = s.split("");

  for(var i = s.length - 1; i > 0; i--) {
    var nextInLoop = parseInt(s[i - 1]);
    if(isNaN(nextInLoop)) {
      s[i - 1] = s[i - 1] + s[i]
    } else {
      s[i - 1] = s[i].repeat(nextInLoop);
    }
  }
  return s[0]
};

decodeString("2[ab]");