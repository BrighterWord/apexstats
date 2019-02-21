function buildChar() {
    var people = '{ "data" : [' +
        '{"name":"Bangalore", "type":"Professional Solder"},'+
        '{"name":"Bloodhound", "type":"Technological Tracker"},'+
        '{"name":"Caustic", "type":"Toxic Trapper"},'+
        '{"name":"Gibraltar", "type":"Shielded Fortress"},'+
        '{"name":"Lifeline", "type":"Combat Medic"},'+
        '{"name":"Mirage", "type":"Holographic Trickster"},'+
        '{"name":"Pathfinder", "type":"Forward Scout"},'+
        '{"name":"Wraith", "type":"Interdimensional Skrimisher"} ]}';

    var characters = JSON.parse(people);

    var gridLayout = document.getElementById("charLayout");
    for (j = 0; j < 4; j++) {
        var gridDiv = document.createElement("div");
        gridDiv.className = "w3-quarter";
        var gridImg = document.createElement("img");
        gridImg.src ="img/" + characters.data[j].name + ".png";
        gridImg.style = "width:100%";
        var gridH3 = document.createElement("h3");
        gridH3.textContent = characters.data[j].name;
        var gridP = document.createElement("p");
        gridP.textContent = characters.data[j].type;
        gridDiv.appendChild(gridImg);
        gridDiv.appendChild(gridH3);
        gridDiv.appendChild(gridP);
        gridLayout.appendChild(gridDiv);
    }
    
    var gridLayout = document.getElementById("charLayout2");
    for (j = 3; j < 7; j++) {
        var gridDiv = document.createElement("div");
        gridDiv.className = "w3-quarter";
        var gridImg = document.createElement("img");
        gridImg.src ="img/" + characters.data[j].name + ".png";
        gridImg.style = "width:100%";
        var gridH3 = document.createElement("h3");
        gridH3.textContent = characters.data[j].name;
        var gridP = document.createElement("p");
        gridP.textContent = characters.data[j].type;
        gridDiv.appendChild(gridImg);
        gridDiv.appendChild(gridH3);
        gridDiv.appendChild(gridP);
        gridLayout.appendChild(gridDiv);
    }  
}