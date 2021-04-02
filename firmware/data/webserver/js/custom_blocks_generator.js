Blockly.Blocks['onclick'] = {
    init: function() {
        this.appendDummyInput().appendField("Onclick");
        this.appendStatementInput("tbr").setCheck("stream");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setDeletable(false);
    }
};

Blockly.JavaScript['onclick'] = function(block) {
    return Blockly.JavaScript.statementToCode(block, 'tbr');
};

Blockly.Blocks['ondoubleclick'] = {
    init: function() {
        this.appendDummyInput().appendField("Ondoubleclick");
        this.appendStatementInput("tbr").setCheck("stream");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setDeletable(false);
    }
};

Blockly.JavaScript['ondoubleclick'] = function(block) {
    return Blockly.JavaScript.statementToCode(block, 'tbr');
};

Blockly.Blocks['onhold'] = {
    init: function() {
        this.appendDummyInput().appendField("Onhold");
        this.appendStatementInput("tbr").setCheck("stream");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setDeletable(false);
    }
};

Blockly.JavaScript['onhold'] = function(block) {
    return Blockly.JavaScript.statementToCode(block, 'tbr');
};

Blockly.Blocks['stream'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Stream     Duration")
            .appendField(new Blockly.FieldNumber(0, 0, 65535), "duration")
            .appendField("Color")
            .appendField(new Blockly.FieldColour("#ff0000"), "color")
            .appendField("Stretch")
            .appendField(new Blockly.FieldNumber(0, 0, 255), "length")
            .appendField("Faded")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "faded");
        this.setPreviousStatement(true, "stream");
        this.setNextStatement(true, "stream");
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['stream'] = function(block) {
    var number_duration = block.getFieldValue('duration');
    var colour_color = block.getFieldValue('color');
    var number_length = block.getFieldValue('length');
    var checkbox_faded = block.getFieldValue('faded') == 'TRUE';

    return colour_color.substring(1) + "_" + number_duration.toString(16).padStart(4, '0') + "_" + number_length.toString(16).padStart(2, '0') + "_" + (checkbox_faded ? "1" : "0") + "-";
};