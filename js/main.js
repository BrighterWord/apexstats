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
    var gridDiv = document.createElement("div");
    gridDiv.setAttribute = ("class", "w3-quarter");
    for (i = 0; i < 4; i++) {
        var gridImg = document.createElement("img");
        gridImg.src ="img/" + characters.data[i].name + ".png";
        gridImg.setAttribute = ("style", "width:100%")
        var gridH3 = document.createElement("h3");
        gridH3.textContent = characters.data[i].name;
        var gridP = document.createElement("p");
        gridP.textContent = characters.data[i].type;
        gridDiv.appendChild(gridImg);
        gridDiv.appendChild(gridH3);
        gridDiv.appendChild(gridP);
    }
    gridLayout.appendChild(gridDiv);
}