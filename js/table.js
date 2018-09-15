$.getJSON("data/data.json", function(json){
    var i = Object.keys(json[0]).length;
    console.log(i);
});