$.getJSON("data/data.json", function (json) {
    var length = Object.keys(json).length;
    var innerL = Object.keys(json[0]).length;

    var tableref = document.getElementById('info');
    var tablehead = document.getElementById('tableHead');
    var tHead = "";

    var inn = Object.keys(json[0]);
    for (var i = 0; i < innerL; i++) {
        tHead += "<th scope=\"col\">" + inn[i] + "</th>\n"
    }
    tableHead.innerHTML = tHead;

    for (var i = 0; i < length; i++) {
        var inner = Object.keys(json[i]);
        var newRow = tableref.insertRow(-1);
        for (var j = 0; j < innerL; j++) {
            var newCell = newRow.insertCell(-1);
            newCell.innerHTML = json[i][inner[j]];
        }
    }


});