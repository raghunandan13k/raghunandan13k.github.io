function getProfileImage(lookupId) {
  var map = 
  {
    20061:'https://cloud.githubusercontent.com/assets/10024457/5278852/0885c98e-7b04-11e4-92e7-7a724fa20822.PNG'
  };
  
  if(typeof map[lookupId] != "undefined") 
  {
    return map[lookupId];
  }
  
  // return default image
  return 'https://cloud.githubusercontent.com/assets/10024457/5278526/5f1952a6-7b00-11e4-97d4-88f1c15edca5.png';
}
