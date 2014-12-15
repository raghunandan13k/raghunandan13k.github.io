function getProfileImage(lookupId, sourceTree) {
  var koliwada = 
  {
    1       : 'https://cloud.githubusercontent.com/assets/10024457/5312249/19a1f552-7c7c-11e4-914a-dde9dc4e656c.jpg',
    20061   : 'https://cloud.githubusercontent.com/assets/10024457/5278852/0885c98e-7b04-11e4-92e7-7a724fa20822.PNG',
    200521  : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png',
    200522  : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png',
    200611  : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png',
    200711  : 'https://cloud.githubusercontent.com/assets/10024457/5312248/19a13414-7c7c-11e4-9e7c-c4ea54db0121.png',
    1002111 : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png'
  };
  
  var kolkunte = 
  {
    1       : 'https://cloud.githubusercontent.com/assets/10024457/5355115/e7b87dda-7fb5-11e4-9d3a-28e137858d03.jpg',
    20051   : 'https://cloud.githubusercontent.com/assets/10024457/5278852/0885c98e-7b04-11e4-92e7-7a724fa20822.PNG',
    200511  : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png',
  };
  
  var bellary = 
  {
    
  };
  
  var arsikere = 
  {
    
  };
  
  if(sourceTree == 'KOLIWADA' && (typeof koliwada[lookupId] != "undefined") ) 
  {
    return koliwada[lookupId];
  }
  else if(sourceTree == 'KOLKUNTE' && (typeof kolkunte[lookupId] != "undefined") ) 
  {
    return kolkunte[lookupId];
  }
  else if(sourceTree == 'BELLARY' && (typeof kolkunte[lookupId] != "undefined") ) 
  {
    return bellary[lookupId];
  }
  else if(sourceTree == 'ARSIKERE' && (typeof kolkunte[lookupId] != "undefined") ) 
  {
    return arsikere[lookupId];
  }
  
  // return default image
  return 'https://cloud.githubusercontent.com/assets/10024457/5278526/5f1952a6-7b00-11e4-97d4-88f1c15edca5.png';
}
