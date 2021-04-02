var blocklyapp = document.getElementById("blockly");

var workspace = Blockly.inject(blocklyapp, {
    toolbox: document.getElementById("toolbox"),
    grid: {
        spacing: 20,
        length: 5,
        colour: '#ccc',
        snap: true,
    },
    trashcan: false,
});

// load code
var onclick = workspace.newBlock("onclick");
onclick.moveBy(30, 30);
onclick.initSvg();
onclick.render();

var ondoubleclick = workspace.newBlock("ondoubleclick");
ondoubleclick.moveBy(30, 130);
ondoubleclick.initSvg();
ondoubleclick.render();

var onhold = workspace.newBlock("onhold");
onhold.moveBy(30, 230);
onhold.initSvg();
onhold.render();

getCONFIG("click", (data) => {
    data.split("\n").reverse().forEach(line => {
        if(line != "") {
            var newblock = workspace.newBlock("stream");
            newblock.initSvg();
            newblock.render();
            newblock.setFieldValue(parseInt(line.substring(7, 11), 16), "duration");
            newblock.setFieldValue(line.substring(0, 6), "color");
            newblock.setFieldValue(parseInt(line.substring(12, 14), 16), "length");
            newblock.setFieldValue(line.substring(15, 16) == "1", "faded");

            onclick.getInput("tbr").connection.connect(newblock.previousConnection);

            ondoubleclick.moveBy(0, 30);
            onhold.moveBy(0, 30);
        }
    });
});

getCONFIG("doubleclick", (data) => {
    data.split("\n").reverse().forEach(line => {
        if(line != "") {
            var newblock = workspace.newBlock("stream");
            newblock.initSvg();
            newblock.render();
            newblock.setFieldValue(parseInt(line.substring(7, 11), 16), "duration");
            newblock.setFieldValue(line.substring(0, 6), "color");
            newblock.setFieldValue(parseInt(line.substring(12, 14), 16), "length");
            newblock.setFieldValue(line.substring(15, 16) == "1", "faded");

            ondoubleclick.getInput("tbr").connection.connect(newblock.previousConnection);

            onhold.moveBy(0, 30);
        }
    });
});

getCONFIG("hold", (data) => {
    data.split("\n").reverse().forEach(line => {
        if(line != "") {
            var newblock = workspace.newBlock("stream");
            newblock.initSvg();
            newblock.render();
            newblock.setFieldValue(parseInt(line.substring(7, 11), 16), "duration");
            newblock.setFieldValue(line.substring(0, 6), "color");
            newblock.setFieldValue(parseInt(line.substring(12, 14), 16), "length");
            newblock.setFieldValue(line.substring(15, 16) == "1", "faded");

            onhold.getInput("tbr").connection.connect(newblock.previousConnection);
        }
    });
});

Blockly.JavaScript.INDENT = "";

document.getElementById("update").onclick = function() {
    sendCONFIG("click", Blockly.JavaScript.blockToCode(onclick));
    sendCONFIG("doubleclick", Blockly.JavaScript.blockToCode(ondoubleclick));
    sendCONFIG("hold", Blockly.JavaScript.blockToCode(onhold));
}

document.getElementById("close").onclick = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            window.close();
        }
    }

    xhttp.open("GET", "CLOSE", true);
    xhttp.send();
}

function sendCONFIG(name, data) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log("send to " + name + ": OK");
        }
    }

    xhttp.open("GET", "CONFIG@" + name + "@" + data, true);
    xhttp.send();
}

function getCONFIG(name, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }

    xhttp.open("GET", "CONFIG@" + name + "@", true);
    xhttp.send();
}