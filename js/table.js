var path = "";
var temp = "<table class=\"table\" id=\"info\">\n<thead id=\"clear\">\n<tr id=\"tableHead\">\n</tr>\n</thead>\n<tbody id=\"tableBody\">\n</tbody>\n</table>"

$(document).ready(function() {
    
    var tablehead = document.getElementById('info');

        $("#algorithm").on('click', function(){
            
            tablehead.innerHTML = temp;
            path = "data/algorithmrank.json";
            makeTable();
            
        });
        $("#continent").on('click', function(){
            
            tablehead.innerHTML = temp;
            path = "data/continentinfo.json";
            makeTable();
            
        });
        $("#cpp").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/cpprank.json";
            makeTable();
        });
        $("#datastruct").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/datastructrank.json";
            makeTable();
        });
        $("#gender").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/genderDemographic.json";
            makeTable();
        });
        $("#java").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/javarank.json";
            makeTable();
        });
        $("#math").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/mathrank.json";
            makeTable();
        });
        $("#python").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/pythonrank.json";
            makeTable();
        });
        $("#race").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/racedemographic.json";
            makeTable();
        });
        $("#ruby").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/rubyrank.json";
            makeTable();
        });
        $("#shell").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/shellrank.json";
            makeTable();
        });
        $("#sql").on('click', function(){
            tablehead.innerHTML = temp;
            path = "data/sqlrank.json";
            makeTable();
        });
    
        
        
});

var makeTable = function(){
    $.getJSON(path, function (json) {
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
}