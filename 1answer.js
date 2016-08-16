function reverseString(string) {
  if(!string) {
    return null;
  }
  var palin = string.split("").reverse().join("");

    if (palin === string){
        return true;
  }
  var o = '';
  for (var i = string.length - 1; i >= 0; i--)
    o += string[i];
  return o;
}
