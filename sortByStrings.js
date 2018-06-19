function sortByStrings(s,t) {
  const result = [];
  for(var x in t) {
    for(var y in s) {
      if(t[x] == s[y]) {
        result.push(s[y]);
      }
    }
  }
  return result.join("");
}

sortByStrings("spotify is awesome", "fullofawesomeness")