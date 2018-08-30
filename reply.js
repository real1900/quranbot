var Realm = require('realm');


const SuraSchema = {
  name: 'QSura',
  properties: {
    sura_no:{type: 'int',    default: 0}
  }
};


// var realm = 

// console.log(

// Open a realm at another path
Realm.open({
  path: 'default.realm',
  schema: [SuraSchema]
}).then(realm => {

  console.log("Realm  found!")
  
  let suras = realm.objects('QSura').first;
  
  console.log(suras);
  
  
});



console.log("HEEEEELLLLLLLlllllllooooo!!!!")

const respmap = {
  "mls" : "I can gladly access the MLS system for you",
  "tres figueiras" : "Neigbourhood selected : Tres Figueiras",
  "2 bdrm" :  "There are 201 two bedroom apartment listings in this region",
  "1 bdrm": "There are 102 one bedroom apartment listings in this region",
  "studio": "There are 33 studio apartment listings in this region"
};

module.exports = respmap;