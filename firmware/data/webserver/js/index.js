var loadBlocklyVar = "";
var loadJavascriptCompressedVar = "";

// print & cleaar funcion so user can see loading the app
function print(txt) {
    document.getElementById("blockly").innerHTML += txt + "<br>";
}

function printclear() {
    document.getElementById("blockly").innerHTML = "";
}

// partloader script
function loadBlocklyPart(partID) {
    print("loading blockly part " + partID + "...");

    if(partID > 24) {
        eval(loadBlocklyVar);
        // next stage
        loadJavascriptCompressed(1);
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                loadBlocklyVar += this.responseText;
                loadBlocklyPart(partID + 1);
            }
        }

        xhttp.open("GET", "js/blockly/blockly.min_" + partID + ".js", true);
        xhttp.send();
    }
}

function loadJavascriptCompressed(partID) {
    print("loading javascript_compressed part " + partID + "...");

    if(partID > 2) {
        eval(loadJavascriptCompressedVar);
        // next stage
        loadCustomBlocks();
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                loadJavascriptCompressedVar += this.responseText;
                loadJavascriptCompressed(partID + 1);
            }
        }

        xhttp.open("GET", "js/javascript/javascript_compressed_" + partID + ".js", true);
        xhttp.send();
    }
}

function loadCustomBlocks() {
    print("loading custom blocks...");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            eval(this.responseText);
            // next stage
            loadWorkspace();
        }
    }

    xhttp.open("GET", "js/custom_blocks_generator.js", true);
    xhttp.send();
}

function loadWorkspace() {
    print("loading workspace...");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            printclear();
            eval(this.responseText);
            // done
        }
    }

    xhttp.open("GET", "js/workspace.js", true);
    xhttp.send();
}

loadBlocklyPart(1);