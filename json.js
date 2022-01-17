const fs = require('fs');
let json_db = fs.readFileSync('db.json');
let rows = JSON.parse(json_db);
console.log(rows[0]);

//rows.forEach(element => console.log(element));
for (var i = 0; i < rows.length; i++){
  console.log("array index: " + i);
  var element = rows[i];
  for (var key in element){
    var value = element[key];
    console.log(element);
    if(element["like"] == false)
    {
      console.log("Not liked")
    }
    //console.log(" - " + key + ": " + value);
  }
}



