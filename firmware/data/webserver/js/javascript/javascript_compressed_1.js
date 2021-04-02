// Do not edit this file; automatically generated by gulp.

/* eslint-disable */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define(['./blockly_compressed.js'], factory);
  } else if (typeof exports === 'object') { // Node.js
    module.exports = factory(require('./blockly_compressed.js'));
  } else { // Browser
    root.Blockly.JavaScript = factory(root.Blockly);
  }
}(this, function(Blockly) {
  'use strict';Blockly.JavaScript=new Blockly.Generator("JavaScript");Blockly.JavaScript.addReservedWords("break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments,"+Object.getOwnPropertyNames(Blockly.utils.global).join(","));
Blockly.JavaScript.ORDER_ATOMIC=0;Blockly.JavaScript.ORDER_NEW=1.1;Blockly.JavaScript.ORDER_MEMBER=1.2;Blockly.JavaScript.ORDER_FUNCTION_CALL=2;Blockly.JavaScript.ORDER_INCREMENT=3;Blockly.JavaScript.ORDER_DECREMENT=3;Blockly.JavaScript.ORDER_BITWISE_NOT=4.1;Blockly.JavaScript.ORDER_UNARY_PLUS=4.2;Blockly.JavaScript.ORDER_UNARY_NEGATION=4.3;Blockly.JavaScript.ORDER_LOGICAL_NOT=4.4;Blockly.JavaScript.ORDER_TYPEOF=4.5;Blockly.JavaScript.ORDER_VOID=4.6;Blockly.JavaScript.ORDER_DELETE=4.7;
Blockly.JavaScript.ORDER_AWAIT=4.8;Blockly.JavaScript.ORDER_EXPONENTIATION=5;Blockly.JavaScript.ORDER_MULTIPLICATION=5.1;Blockly.JavaScript.ORDER_DIVISION=5.2;Blockly.JavaScript.ORDER_MODULUS=5.3;Blockly.JavaScript.ORDER_SUBTRACTION=6.1;Blockly.JavaScript.ORDER_ADDITION=6.2;Blockly.JavaScript.ORDER_BITWISE_SHIFT=7;Blockly.JavaScript.ORDER_RELATIONAL=8;Blockly.JavaScript.ORDER_IN=8;Blockly.JavaScript.ORDER_INSTANCEOF=8;Blockly.JavaScript.ORDER_EQUALITY=9;Blockly.JavaScript.ORDER_BITWISE_AND=10;
Blockly.JavaScript.ORDER_BITWISE_XOR=11;Blockly.JavaScript.ORDER_BITWISE_OR=12;Blockly.JavaScript.ORDER_LOGICAL_AND=13;Blockly.JavaScript.ORDER_LOGICAL_OR=14;Blockly.JavaScript.ORDER_CONDITIONAL=15;Blockly.JavaScript.ORDER_ASSIGNMENT=16;Blockly.JavaScript.ORDER_YIELD=17;Blockly.JavaScript.ORDER_COMMA=18;Blockly.JavaScript.ORDER_NONE=99;
Blockly.JavaScript.ORDER_OVERRIDES=[[Blockly.JavaScript.ORDER_FUNCTION_CALL,Blockly.JavaScript.ORDER_MEMBER],[Blockly.JavaScript.ORDER_FUNCTION_CALL,Blockly.JavaScript.ORDER_FUNCTION_CALL],[Blockly.JavaScript.ORDER_MEMBER,Blockly.JavaScript.ORDER_MEMBER],[Blockly.JavaScript.ORDER_MEMBER,Blockly.JavaScript.ORDER_FUNCTION_CALL],[Blockly.JavaScript.ORDER_LOGICAL_NOT,Blockly.JavaScript.ORDER_LOGICAL_NOT],[Blockly.JavaScript.ORDER_MULTIPLICATION,Blockly.JavaScript.ORDER_MULTIPLICATION],[Blockly.JavaScript.ORDER_ADDITION,
Blockly.JavaScript.ORDER_ADDITION],[Blockly.JavaScript.ORDER_LOGICAL_AND,Blockly.JavaScript.ORDER_LOGICAL_AND],[Blockly.JavaScript.ORDER_LOGICAL_OR,Blockly.JavaScript.ORDER_LOGICAL_OR]];Blockly.JavaScript.isInitialized=!1;
Blockly.JavaScript.init=function(a){Blockly.JavaScript.definitions_=Object.create(null);Blockly.JavaScript.functionNames_=Object.create(null);Blockly.JavaScript.variableDB_?Blockly.JavaScript.variableDB_.reset():Blockly.JavaScript.variableDB_=new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_);Blockly.JavaScript.variableDB_.setVariableMap(a.getVariableMap());for(var b=[],c=Blockly.Variables.allDeveloperVariables(a),d=0;d<c.length;d++)b.push(Blockly.JavaScript.variableDB_.getName(c[d],Blockly.Names.DEVELOPER_VARIABLE_TYPE));
a=Blockly.Variables.allUsedVarModels(a);for(d=0;d<a.length;d++)b.push(Blockly.JavaScript.variableDB_.getName(a[d].getId(),Blockly.VARIABLE_CATEGORY_NAME));b.length&&(Blockly.JavaScript.definitions_.variables="var "+b.join(", ")+";");this.isInitialized=!0};
Blockly.JavaScript.finish=function(a){var b=[],c;for(c in Blockly.JavaScript.definitions_)b.push(Blockly.JavaScript.definitions_[c]);delete Blockly.JavaScript.definitions_;delete Blockly.JavaScript.functionNames_;Blockly.JavaScript.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.JavaScript.scrubNakedValue=function(a){return a+";\n"};Blockly.JavaScript.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.JavaScript.multiline_quote_=function(a){return a.split(/\n/g).map(Blockly.JavaScript.quote_).join(" + '\\n' +\n")};
Blockly.JavaScript.scrub_=function(a,b,c){var d="";if(!a.outputConnection||!a.outputConnection.targetConnection){var e=a.getCommentText();e&&(e=Blockly.utils.string.wrap(e,Blockly.JavaScript.COMMENT_WRAP-3),d+=Blockly.JavaScript.prefixLines(e+"\n","// "));for(var f=0;f<a.inputList.length;f++)a.inputList[f].type==Blockly.inputTypes.VALUE&&(e=a.inputList[f].connection.targetBlock())&&(e=Blockly.JavaScript.allNestedComments(e))&&(d+=Blockly.JavaScript.prefixLines(e,"// "))}a=a.nextConnection&&a.nextConnection.targetBlock();
c=c?"":Blockly.JavaScript.blockToCode(a);return d+b+c};
Blockly.JavaScript.getAdjusted=function(a,b,c,d,e){c=c||0;e=e||Blockly.JavaScript.ORDER_NONE;a.workspace.options.oneBasedIndex&&c--;var f=a.workspace.options.oneBasedIndex?"1":"0";a=0<c?Blockly.JavaScript.valueToCode(a,b,Blockly.JavaScript.ORDER_ADDITION)||f:0>c?Blockly.JavaScript.valueToCode(a,b,Blockly.JavaScript.ORDER_SUBTRACTION)||f:d?Blockly.JavaScript.valueToCode(a,b,Blockly.JavaScript.ORDER_UNARY_NEGATION)||f:Blockly.JavaScript.valueToCode(a,b,e)||f;if(Blockly.isNumber(a))a=Number(a)+c,d&&
(a=-a);else{if(0<c){a=a+" + "+c;var g=Blockly.JavaScript.ORDER_ADDITION}else 0>c&&(a=a+" - "+-c,g=Blockly.JavaScript.ORDER_SUBTRACTION);d&&(a=c?"-("+a+")":"-"+a,g=Blockly.JavaScript.ORDER_UNARY_NEGATION);g=Math.floor(g);e=Math.floor(e);g&&e>=g&&(a="("+a+")")}return a};Blockly.JavaScript.colour={};Blockly.JavaScript.colour_picker=function(a){return[Blockly.JavaScript.quote_(a.getFieldValue("COLOUR")),Blockly.JavaScript.ORDER_ATOMIC]};Blockly.JavaScript.colour_random=function(a){return[Blockly.JavaScript.provideFunction_("colourRandom",["function "+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+"() {","  var num = Math.floor(Math.random() * Math.pow(2, 24));","  return '#' + ('00000' + num.toString(16)).substr(-6);","}"])+"()",Blockly.JavaScript.ORDER_FUNCTION_CALL]};
Blockly.JavaScript.colour_rgb=function(a){var b=Blockly.JavaScript.valueToCode(a,"RED",Blockly.JavaScript.ORDER_NONE)||0,c=Blockly.JavaScript.valueToCode(a,"GREEN",Blockly.JavaScript.ORDER_NONE)||0;a=Blockly.JavaScript.valueToCode(a,"BLUE",Blockly.JavaScript.ORDER_NONE)||0;return[Blockly.JavaScript.provideFunction_("colourRgb",["function "+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+"(r, g, b) {","  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;","  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;",
"  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;","  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);","  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);","  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);","  return '#' + r + g + b;","}"])+"("+b+", "+c+", "+a+")",Blockly.JavaScript.ORDER_FUNCTION_CALL]};
Blockly.JavaScript.colour_blend=function(a){var b=Blockly.JavaScript.valueToCode(a,"COLOUR1",Blockly.JavaScript.ORDER_NONE)||"'#000000'",c=Blockly.JavaScript.valueToCode(a,"COLOUR2",Blockly.JavaScript.ORDER_NONE)||"'#000000'";a=Blockly.JavaScript.valueToCode(a,"RATIO",Blockly.JavaScript.ORDER_NONE)||.5;return[Blockly.JavaScript.provideFunction_("colourBlend",["function "+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+"(c1, c2, ratio) {","  ratio = Math.max(Math.min(Number(ratio), 1), 0);","  var r1 = parseInt(c1.substring(1, 3), 16);",
"  var g1 = parseInt(c1.substring(3, 5), 16);","  var b1 = parseInt(c1.substring(5, 7), 16);","  var r2 = parseInt(c2.substring(1, 3), 16);","  var g2 = parseInt(c2.substring(3, 5), 16);","  var b2 = parseInt(c2.substring(5, 7), 16);","  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);","  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);","  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);","  r = ('0' + (r || 0).toString(16)).slice(-2);","  g = ('0' + (g || 0).toString(16)).slice(-2);","  b = ('0' + (b || 0).toString(16)).slice(-2);",
"  return '#' + r + g + b;","}"])+"("+b+", "+c+", "+a+")",Blockly.JavaScript.ORDER_FUNCTION_CALL]};Blockly.JavaScript.lists={};Blockly.JavaScript.lists_create_empty=function(a){return["[]",Blockly.JavaScript.ORDER_ATOMIC]};Blockly.JavaScript.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.JavaScript.valueToCode(a,"ADD"+c,Blockly.JavaScript.ORDER_NONE)||"null";return["["+b.join(", ")+"]",Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript.lists_repeat=function(a){var b=Blockly.JavaScript.provideFunction_("listsRepeat",["function "+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+"(value, n) {","  var array = [];","  for (var i = 0; i < n; i++) {","    array[i] = value;","  }","  return array;","}"]),c=Blockly.JavaScript.valueToCode(a,"ITEM",Blockly.JavaScript.ORDER_NONE)||"null";a=Blockly.JavaScript.valueToCode(a,"NUM",Blockly.JavaScript.ORDER_NONE)||"0";return[b+"("+c+", "+a+")",Blockly.JavaScript.ORDER_FUNCTION_CALL]};
Blockly.JavaScript.lists_length=function(a){return[(Blockly.JavaScript.valueToCode(a,"VALUE",Blockly.JavaScript.ORDER_MEMBER)||"[]")+".length",Blockly.JavaScript.ORDER_MEMBER]};Blockly.JavaScript.lists_isEmpty=function(a){return["!"+(Blockly.JavaScript.valueToCode(a,"VALUE",Blockly.JavaScript.ORDER_MEMBER)||"[]")+".length",Blockly.JavaScript.ORDER_LOGICAL_NOT]};
Blockly.JavaScript.lists_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.JavaScript.valueToCode(a,"FIND",Blockly.JavaScript.ORDER_NONE)||"''";b=(Blockly.JavaScript.valueToCode(a,"VALUE",Blockly.JavaScript.ORDER_MEMBER)||"[]")+"."+b+"("+c+")";return a.workspace.options.oneBasedIndex?[b+" + 1",Blockly.JavaScript.ORDER_ADDITION]:[b,Blockly.JavaScript.ORDER_FUNCTION_CALL]};
Blockly.JavaScript.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.JavaScript.valueToCode(a,"VALUE","RANDOM"==c?Blockly.JavaScript.ORDER_NONE:Blockly.JavaScript.ORDER_MEMBER)||"[]";switch(c){case "FIRST":if("GET"==b)return[d+"[0]",Blockly.JavaScript.ORDER_MEMBER];if("GET_REMOVE"==b)return[d+".shift()",Blockly.JavaScript.ORDER_MEMBER];if("REMOVE"==b)return d+".shift();\n";break;case "LAST":if("GET"==b)return[d+".slice(-1)[0]",Blockly.JavaScript.ORDER_MEMBER];
if("GET_REMOVE"==b)return[d+".pop()",Blockly.JavaScript.ORDER_MEMBER];if("REMOVE"==b)return d+".pop();\n";break;case "FROM_START":a=Blockly.JavaScript.getAdjusted(a,"AT");if("GET"==b)return[d+"["+a+"]",Blockly.JavaScript.ORDER_MEMBER];if("GET_REMOVE"==b)return[d+".splice("+a+", 1)[0]",Blockly.JavaScript.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+".splice("+a+", 1);\n";break;case "FROM_END":a=Blockly.JavaScript.getAdjusted(a,"AT",1,!0);if("GET"==b)return[d+".slice("+a+")[0]",Blockly.JavaScript.ORDER_FUNCTION_CALL];
if("GET_REMOVE"==b)return[d+".splice("+a+", 1)[0]",Blockly.JavaScript.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+".splice("+a+", 1);";break;case "RANDOM":d=Blockly.JavaScript.provideFunction_("listsGetRandomItem",["function "+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+"(list, remove) {","  var x = Math.floor(Math.random() * list.length);","  if (remove) {","    return list.splice(x, 1)[0];","  } else {","    return list[x];","  }","}"])+"("+d+", "+("GET"!=b)+")";if("GET"==b||"GET_REMOVE"==b)return[d,
Blockly.JavaScript.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+";\n"}throw Error("Unhandled combination (lists_getIndex).");};
Blockly.JavaScript.lists_setIndex=function(a){function b(){if(c.match(/^\w+$/))return"";var g=Blockly.JavaScript.variableDB_.getDistinctName("tmpList",Blockly.VARIABLE_CATEGORY_NAME),h="var "+g+" = "+c+";\n";c=g;return h}var c=Blockly.JavaScript.valueToCode(a,"LIST",Blockly.JavaScript.ORDER_MEMBER)||"[]",d=a.getFieldValue("MODE")||"GET",e=a.getFieldValue("WHERE")||"FROM_START",f=Blockly.JavaScript.valueToCode(a,"TO",Blockly.JavaScript.ORDER_ASSIGNMENT)||"null";switch(e){case "FIRST":if("SET"==d)return c+
"[0] = "+f+";\n";if("INSERT"==d)return c+".unshift("+f+");\n";break;case "LAST":if("SET"==d)return a=b(),a+(c+"["+c+".length - 1] = "+f+";\n");if("INSERT"==d)return c+".push("+f+");\n";break;case "FROM_START":e=Blockly.JavaScript.getAdjusted(a,"AT");if("SET"==d)return c+"["+e+"] = "+f+";\n";if("INSERT"==d)return c+".splice("+e+", 0, "+f+");\n";break;case "FROM_END":e=Blockly.JavaScript.getAdjusted(a,"AT",1,!1,Blockly.JavaScript.ORDER_SUBTRACTION);a=b();if("SET"==d)return a+(c+"["+c+".length - "+e+
"] = "+f+";\n");if("INSERT"==d)return a+(c+".splice("+c+".length - "+e+", 0, "+f+");\n");break;case "RANDOM":a=b();e=Blockly.JavaScript.variableDB_.getDistinctName("tmpX",Blockly.VARIABLE_CATEGORY_NAME);a+="var "+e+" = Math.floor(Math.random() * "+c+".length);\n";if("SET"==d)return a+(c+"["+e+"] = "+f+";\n");if("INSERT"==d)return a+(c+".splice("+e+", 0, "+f+");\n")}throw Error("Unhandled combination (lists_setIndex).");};
Blockly.JavaScript.lists.getIndex_=function(a,b,c){return"FIRST"==b?"0":"FROM_END"==b?a+".length - 1 - "+c:"LAST"==b?a+".length - 1":c};
Blockly.JavaScript.lists_getSublist=function(a){var b=Blockly.JavaScript.valueToCode(a,"LIST",Blockly.JavaScript.ORDER_MEMBER)||"[]",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2");if("FIRST"==c&&"LAST"==d)b+=".slice(0)";else if(b.match(/^\w+$/)||"FROM_END"!=c&&"FROM_START"==d){switch(c){case "FROM_START":var e=Blockly.JavaScript.getAdjusted(a,"AT1");break;case "FROM_END":e=Blockly.JavaScript.getAdjusted(a,"AT1",1,!1,Blockly.JavaScript.ORDER_SUBTRACTION);e=b+".length - "+e;break;case "FIRST":e=
"0";break;default:throw Error("Unhandled option (lists_getSublist).");}switch(d){case "FROM_START":a=Blockly.JavaScript.getAdjusted(a,"AT2",1);break;case "FROM_END":a=Blockly.JavaScript.getAdjusted(a,"AT2",0,!1,Blockly.JavaScript.ORDER_SUBTRACTION);a=b+".length - "+a;break;case "LAST":a=b+".length";break;default:throw Error("Unhandled option (lists_getSublist).");}b=b+".slice("+e+", "+a+")"}else{e=Blockly.JavaScript.getAdjusted(a,"AT1");a=Blockly.JavaScript.getAdjusted(a,"AT2");var f=Blockly.JavaScript.lists.getIndex_,
g={FIRST:"First",LAST:"Last",FROM_START:"FromStart",FROM_END:"FromEnd"};b=Blockly.JavaScript.provideFunction_("subsequence"+g[c]+g[d],["function "+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+"(sequence"+("FROM_END"==c||"FROM_START"==c?", at1":"")+("FROM_END"==d||"FROM_START"==d?", at2":"")+") {","  var start = "+f("sequence",c,"at1")+";","  var end = "+f("sequence",d,"at2")+" + 1;","  return sequence.slice(start, end);","}"])+"("+b+("FROM_END"==c||"FROM_START"==c?", "+e:"")+("FROM_END"==d||"FROM_START"==
d?", "+a:"")+")"}return[b,Blockly.JavaScript.ORDER_FUNCTION_CALL]};
Blockly.JavaScript.lists_sort=function(a){var b=Blockly.JavaScript.valueToCode(a,"LIST",Blockly.JavaScript.ORDER_FUNCTION_CALL)||"[]",c="1"===a.getFieldValue("DIRECTION")?1:-1;a=a.getFieldValue("TYPE");var d=Blockly.JavaScript.provideFunction_("listsGetSortCompare",["function "+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+"(type, direction) {","  var compareFuncs = {",'    "NUMERIC": function(a, b) {',"        return Number(a) - Number(b); },",'    "TEXT": function(a, b) {',"        return a.toString() > b.toString() ? 1 : -1; },",
'    "IGNORE_CASE": function(a, b) {',"        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },","  };","  var compare = compareFuncs[type];","  return function(a, b) { return compare(a, b) * direction; }","}"]);return[b+".slice().sort("+d+'("'+a+'", '+c+"))",Blockly.JavaScript.ORDER_FUNCTION_CALL]};
Blockly.JavaScript.lists_split=function(a){var b=Blockly.JavaScript.valueToCode(a,"INPUT",Blockly.JavaScript.ORDER_MEMBER),c=Blockly.JavaScript.valueToCode(a,"DELIM",Blockly.JavaScript.ORDER_NONE)||"''";a=a.getFieldValue("MODE");if("SPLIT"==a)b||(b="''"),a="split";else if("JOIN"==a)b||(b="[]"),a="join";else throw Error("Unknown mode: "+a);return[b+"."+a+"("+c+")",Blockly.JavaScript.ORDER_FUNCTION_CALL]};
Blockly.JavaScript.lists_reverse=function(a){return[(Blockly.JavaScript.valueToCode(a,"LIST",Blockly.JavaScript.ORDER_FUNCTION_CALL)||"[]")+".slice().reverse()",Blockly.JavaScript.ORDER_FUNCTION_CALL]};Blockly.JavaScript.logic={};
Blockly.JavaScript.controls_if=function(a){var b=0,c="";Blockly.JavaScript.STATEMENT_PREFIX&&(c+=Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX,a));do{var d=Blockly.JavaScript.valueToCode(a,"IF"+b,Blockly.JavaScript.ORDER_NONE)||"false";var e=Blockly.JavaScript.statementToCode(a,"DO"+b);Blockly.JavaScript.STATEMENT_SUFFIX&&(e=Blockly.JavaScript.prefixLines(Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX,a),Blockly.JavaScript.INDENT)+e);c+=(0<b?" else ":"")+"if ("+
d+") {\n"+e+"}";++b}while(a.getInput("IF"+b));if(a.getInput("ELSE")||Blockly.JavaScript.STATEMENT_SUFFIX)e=Blockly.JavaScript.statementToCode(a,"ELSE"),Blockly.JavaScript.STATEMENT_SUFFIX&&(e=Blockly.JavaScript.prefixLines(Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX,a),Blockly.JavaScript.INDENT)+e),c+=" else {\n"+e+"}";return c+"\n"};Blockly.JavaScript.controls_ifelse=Blockly.JavaScript.controls_if;
Blockly.JavaScript.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.JavaScript.ORDER_EQUALITY:Blockly.JavaScript.ORDER_RELATIONAL,d=Blockly.JavaScript.valueToCode(a,"A",c)||"0";a=Blockly.JavaScript.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.JavaScript.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.JavaScript.ORDER_LOGICAL_AND:Blockly.JavaScript.ORDER_LOGICAL_OR,d=Blockly.JavaScript.valueToCode(a,"A",c);a=Blockly.JavaScript.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};
Blockly.JavaScript.logic_negate=function(a){var b=Blockly.JavaScript.ORDER_LOGICAL_NOT;return["!"+(Blockly.JavaScript.valueToCode(a,"BOOL",b)||"true"),b]};Blockly.JavaScript.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.JavaScript.ORDER_ATOMIC]};Blockly.JavaScript.logic_null=function(a){return["null",Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript.logic_ternary=function(a){var b=Blockly.JavaScript.valueToCode(a,"IF",Blockly.JavaScript.ORDER_CONDITIONAL)||"false",c=Blockly.JavaScript.valueToCode(a,"THEN",Blockly.JavaScript.ORDER_CONDITIONAL)||"null";a=Blockly.JavaScript.valueToCode(a,"ELSE",Blockly.JavaScript.ORDER_CONDITIONAL)||"null";return[b+" ? "+c+" : "+a,Blockly.JavaScript.ORDER_CONDITIONAL]};Blockly.JavaScript.loops={};
Blockly.JavaScript.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.JavaScript.valueToCode(a,"TIMES",Blockly.JavaScript.ORDER_ASSIGNMENT)||"0",c=Blockly.JavaScript.statementToCode(a,"DO");c=Blockly.JavaScript.addLoopTrap(c,a);a="";var d=Blockly.JavaScript.variableDB_.getDistinctName("count",Blockly.VARIABLE_CATEGORY_NAME),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.JavaScript.variableDB_.getDistinctName("repeat_end",Blockly.VARIABLE_CATEGORY_NAME),
a+="var "+e+" = "+b+";\n");return a+("for (var "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};Blockly.JavaScript.controls_repeat=Blockly.JavaScript.controls_repeat_ext;
Blockly.JavaScript.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.JavaScript.valueToCode(a,"BOOL",b?Blockly.JavaScript.ORDER_LOGICAL_NOT:Blockly.JavaScript.ORDER_NONE)||"false",d=Blockly.JavaScript.statementToCode(a,"DO");d=Blockly.JavaScript.addLoopTrap(d,a);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.JavaScript.controls_for=function(a){var b=Blockly.JavaScript.variableDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME),c=Blockly.JavaScript.valueToCode(a,"FROM",Blockly.JavaScript.ORDER_ASSIGNMENT)||"0",d=Blockly.JavaScript.valueToCode(a,"TO",Blockly.JavaScript.ORDER_ASSIGNMENT)||"0",e=Blockly.JavaScript.valueToCode(a,"BY",Blockly.JavaScript.ORDER_ASSIGNMENT)||"1",f=Blockly.JavaScript.statementToCode(a,"DO");f=Blockly.JavaScript.addLoopTrap(f,a);if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&
Blockly.isNumber(e)){var g=Number(c)<=Number(d);a="for ("+b+" = "+c+"; "+b+(g?" <= ":" >= ")+d+"; "+b;b=Math.abs(Number(e));a=(1==b?a+(g?"++":"--"):a+((g?" += ":" -= ")+b))+(") {\n"+f+"}\n")}else a="",g=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(g=Blockly.JavaScript.variableDB_.getDistinctName(b+"_start",Blockly.VARIABLE_CATEGORY_NAME),a+="var "+g+" = "+c+";\n"),c=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.JavaScript.variableDB_.getDistinctName(b+"_end",Blockly.VARIABLE_CATEGORY_NAME),a+=
"var "+c+" = "+d+";\n"),d=Blockly.JavaScript.variableDB_.getDistinctName(b+"_inc",Blockly.VARIABLE_CATEGORY_NAME),a+="var "+d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a=a+("if ("+g+" > "+c+") {\n")+(Blockly.JavaScript.INDENT+d+" = -"+d+";\n"),a+="}\n",a+="for ("+b+" = "+g+"; "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+"; "+b+" += "+d+") {\n"+f+"}\n";return a};
Blockly.JavaScript.controls_forEach=function(a){var b=Blockly.JavaScript.variableDB_.getName(a.getFiel