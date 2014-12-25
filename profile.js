function getProfileImage(lookupId, sourceTree) {
  var koliwada = 
  {
    1       : 'https://cloud.githubusercontent.com/assets/10024457/5312249/19a1f552-7c7c-11e4-914a-dde9dc4e656c.jpg',
    2006    : 'https://cloud.githubusercontent.com/assets/10024457/5551920/a8410696-8c0c-11e4-8325-b54b6a457aae.PNG',
    20061   : 'https://cloud.githubusercontent.com/assets/10024457/5278852/0885c98e-7b04-11e4-92e7-7a724fa20822.PNG',
    200521  : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png',
    200522  : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png',
    200611  : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png',
    200711  : 'https://cloud.githubusercontent.com/assets/10024457/5312248/19a13414-7c7c-11e4-9e7c-c4ea54db0121.png',
    1002111 : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png',
    20013   : 'https://cloud.githubusercontent.com/assets/10024457/5551923/a85cf982-8c0c-11e4-9b42-509a67963150.PNG',
    20012   : 'https://cloud.githubusercontent.com/assets/10024457/5551925/a86665da-8c0c-11e4-8d08-198562ea7759.PNG',
    20031   : 'https://cloud.githubusercontent.com/assets/10024457/5551926/a86f794a-8c0c-11e4-9c08-11d682666932.PNG',
    20021   : 'https://cloud.githubusercontent.com/assets/10024457/5551924/a85e599e-8c0c-11e4-8a4b-d48cfb32707d.PNG',
    20022   : 'https://cloud.githubusercontent.com/assets/10024457/5551929/a898bb34-8c0c-11e4-80a0-bfe16cf82722.PNG',
    20062   : 'https://cloud.githubusercontent.com/assets/10024457/5551922/a85b1bf8-8c0c-11e4-87ed-5865a4680082.PNG',
    20051   : 'https://cloud.githubusercontent.com/assets/10024457/5551921/a848bbb6-8c0c-11e4-9ad9-0c6efb1bfc1d.PNG',
    20081   : 'https://cloud.githubusercontent.com/assets/10024457/5551927/a8796bc6-8c0c-11e4-9299-472d98c54c8d.PNG',
    20053   : 'https://cloud.githubusercontent.com/assets/10024457/5551928/a8922c10-8c0c-11e4-9282-d3afe797a38a.PNG'
  };
  
  var kolkunte = 
  {
    1       : 'https://cloud.githubusercontent.com/assets/10024457/5355115/e7b87dda-7fb5-11e4-9d3a-28e137858d03.jpg',
    20051   : 'https://cloud.githubusercontent.com/assets/10024457/5278852/0885c98e-7b04-11e4-92e7-7a724fa20822.PNG',
    200511  : 'https://cloud.githubusercontent.com/assets/10024457/5279032/301c0eca-7b06-11e4-8366-c3ebda454ca2.png',
  };
  
  var bellary = 
  {
    1       : 'https://cloud.githubusercontent.com/assets/10024457/5355115/e7b87dda-7fb5-11e4-9d3a-28e137858d03.jpg',
  };
  
  var arsikere = 
  {
    1       : 'https://cloud.githubusercontent.com/assets/10024457/5434342/fa9a5d4a-8476-11e4-9c90-416248451831.jpg',
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
