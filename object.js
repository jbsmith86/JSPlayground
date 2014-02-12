var castleModule = (function () {

  var castle = [];

  return {

    addPerson: function( values ) {
      castle.push(values);
    },

    getPersonCount: function () {
      return castle.length;
    },

    getKnightCount: function () {
      count = 0;
      for (i=0;i<castle.length;i++) {
        if (castle[i].type == "Knight") {
          count++
        };
      };
      return count;
    },

    getMaidenCount: function () {
      count = 0;
      for (i=0;i<castle.length;i++) {
        if (castle[i].type == "Maiden") {
          count++
        };
      };
      return count;
    },

    toString: function () {
      string = ''
      for (i=0;i<castle.length;i++) {
        string += ("Name: " + castle[i].name + " ")
        string += ("Type: " + castle[i].type + ". ")
      };
      return string
    }

  };
})();


castleModule.addPerson({
  name: "Balin",
  type: "Knight"
});

castleModule.addPerson({
  name: "Calogrenant",
  type: "Knight"
});

castleModule.addPerson({
  name: "Durnure",
  type: "Knight"
});

castleModule.addPerson({
  name: "Guinevere",
  type: "Maiden"
});

castleModule.addPerson({
  name: "Caelia",
  type: "Maiden"
});

castleModule.addPerson({
  name: "Cerdic",
  type: "Knight"
});



console.log( 'People in castle: ' + castleModule.getPersonCount() );
console.log( 'Knights: ' + castleModule.getKnightCount() );
console.log( 'Maidens: ' + castleModule.getMaidenCount() );
console.log( castleModule.toString() );




