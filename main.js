function toCamelCase(str){
    var regex = /[-_]\w/g;
  return str.replace(regex, function(match) {
    return match.charAt(1).toUpperCase();
  });   
}