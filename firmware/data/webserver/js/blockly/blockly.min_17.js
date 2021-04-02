ckly.blockRendering.JaggedEdge.superClass_.constructor.call(this,a);this.type|=Blockly.blockRendering.Types.JAGGED_EDGE;this.height=this.constants_.JAGGED_TEETH.height;this.width=this.constants_.JAGGED_TEETH.width};Blockly.utils.object.inherits(Blockly.blockRendering.JaggedEdge,Blockly.blockRendering.Measurable);
Blockly.blockRendering.Field=function(a,b,c){Blockly.blockRendering.Field.superClass_.constructor.call(this,a);this.field=b;this.isEditable=b.EDITABLE;this.flipRtl=b.getFlipRtl();this.type|=Blockly.blockRendering.Types.FIELD;a=this.field.getSize();this.height=a.height;this.width=a.width;this.parentInput=c};Blockly.utils.object.inherits(Blockly.blockRendering.Field,Blockly.blockRendering.Measurable);
Blockly.blockRendering.Hat=function(a){Blockly.blockRendering.Hat.superClass_.constructor.call(this,a);this.type|=Blockly.blockRendering.Types.HAT;this.height=this.constants_.START_HAT.height;this.width=this.constants_.START_HAT.width;this.ascenderHeight=this.height};Blockly.utils.object.inherits(Blockly.blockRendering.Hat,Blockly.blockRendering.Measurable);
Blockly.blockRendering.SquareCorner=function(a,b){Blockly.blockRendering.SquareCorner.superClass_.constructor.call(this,a);this.type=(b&&"left"!=b?Blockly.blockRendering.Types.RIGHT_SQUARE_CORNER:Blockly.blockRendering.Types.LEFT_SQUARE_CORNER)|Blockly.blockRendering.Types.CORNER;this.width=this.height=this.constants_.NO_PADDING};Blockly.utils.object.inherits(Blockly.blockRendering.SquareCorner,Blockly.blockRendering.Measurable);
Blockly.blockRendering.RoundCorner=function(a,b){Blockly.blockRendering.RoundCorner.superClass_.constructor.call(this,a);this.type=(b&&"left"!=b?Blockly.blockRendering.Types.RIGHT_ROUND_CORNER:Blockly.blockRendering.Types.LEFT_ROUND_CORNER)|Blockly.blockRendering.Types.CORNER;this.width=this.constants_.CORNER_RADIUS;this.height=this.constants_.CORNER_RADIUS/2};Blockly.utils.object.inherits(Blockly.blockRendering.RoundCorner,Blockly.blockRendering.Measurable);
Blockly.blockRendering.InRowSpacer=function(a,b){Blockly.blockRendering.InRowSpacer.superClass_.constructor.call(this,a);this.type=this.type|Blockly.blockRendering.Types.SPACER|Blockly.blockRendering.Types.IN_ROW_SPACER;this.width=b;this.height=this.constants_.SPACER_DEFAULT_HEIGHT};Blockly.utils.object.inherits(Blockly.blockRendering.InRowSpacer,Blockly.blockRendering.Measurable);Blockly.blockRendering.Row=function(a){this.type=Blockly.blockRendering.Types.ROW;this.elements=[];this.xPos=this.yPos=this.widthWithConnectedBlocks=this.minWidth=this.minHeight=this.width=this.height=0;this.hasJaggedEdge=this.hasDummyInput=this.hasInlineInput=this.hasStatement=this.hasExternalInput=!1;this.constants_=a;this.notchOffset=this.constants_.NOTCH_OFFSET_LEFT;this.align=null};
Blockly.blockRendering.Row.prototype.measure=function(){throw Error("Unexpected attempt to measure a base Row.");};Blockly.blockRendering.Row.prototype.getLastInput=function(){for(var a=this.elements.length-1,b;b=this.elements[a];a--)if(Blockly.blockRendering.Types.isInput(b))return b;return null};Blockly.blockRendering.Row.prototype.startsWithElemSpacer=function(){return!0};Blockly.blockRendering.Row.prototype.endsWithElemSpacer=function(){return!0};
Blockly.blockRendering.Row.prototype.getFirstSpacer=function(){for(var a=0,b;b=this.elements[a];a++)if(Blockly.blockRendering.Types.isSpacer(b))return b;return null};Blockly.blockRendering.Row.prototype.getLastSpacer=function(){for(var a=this.elements.length-1,b;b=this.elements[a];a--)if(Blockly.blockRendering.Types.isSpacer(b))return b;return null};
Blockly.blockRendering.TopRow=function(a){Blockly.blockRendering.TopRow.superClass_.constructor.call(this,a);this.type|=Blockly.blockRendering.Types.TOP_ROW;this.ascenderHeight=this.capline=0;this.hasPreviousConnection=!1;this.connection=null};Blockly.utils.object.inherits(Blockly.blockRendering.TopRow,Blockly.blockRendering.Row);
Blockly.blockRendering.TopRow.prototype.hasLeftSquareCorner=function(a){var b=(a.hat?"cap"===a.hat:this.constants_.ADD_START_HATS)&&!a.outputConnection&&!a.previousConnection,c=a.getPreviousBlock();return!!a.outputConnection||b||(c?c.getNextBlock()==a:!1)};Blockly.blockRendering.TopRow.prototype.hasRightSquareCorner=function(a){return!0};
Blockly.blockRendering.TopRow.prototype.measure=function(){for(var a=0,b=0,c=0,d=0,e;e=this.elements[d];d++)b+=e.width,Blockly.blockRendering.Types.isSpacer(e)||(Blockly.blockRendering.Types.isHat(e)?c=Math.max(c,e.ascenderHeight):a=Math.max(a,e.height));this.width=Math.max(this.minWidth,b);this.height=Math.max(this.minHeight,a)+c;this.capline=this.ascenderHeight=c;this.widthWithConnectedBlocks=this.width};Blockly.blockRendering.TopRow.prototype.startsWithElemSpacer=function(){return!1};
Blockly.blockRendering.TopRow.prototype.endsWithElemSpacer=function(){return!1};Blockly.blockRendering.BottomRow=function(a){Blockly.blockRendering.BottomRow.superClass_.constructor.call(this,a);this.type|=Blockly.blockRendering.Types.BOTTOM_ROW;this.hasNextConnection=!1;this.connection=null;this.baseline=this.descenderHeight=0};Blockly.utils.object.inherits(Blockly.blockRendering.BottomRow,Blockly.blockRendering.Row);
Blockly.blockRendering.BottomRow.prototype.hasLeftSquareCorner=function(a){return!!a.outputConnection||!!a.getNextBlock()};Blockly.blockRendering.BottomRow.prototype.hasRightSquareCorner=function(a){return!0};
Blockly.blockRendering.BottomRow.prototype.measure=function(){for(var a=0,b=0,c=0,d=0,e;e=this.elements[d];d++)b+=e.width,Blockly.blockRendering.Types.isSpacer(e)||(Blockly.blockRendering.Types.isNextConnection(e)?c=Math.max(c,e.height):a=Math.max(a,e.height));this.width=Math.max(this.minWidth,b);this.height=Math.max(this.minHeight,a)+c;this.descenderHeight=c;this.widthWithConnectedBlocks=this.width};Blockly.blockRendering.BottomRow.prototype.startsWithElemSpacer=function(){return!1};
Blockly.blockRendering.BottomRow.prototype.endsWithElemSpacer=function(){return!1};Blockly.blockRendering.SpacerRow=function(a,b,c){Blockly.blockRendering.SpacerRow.superClass_.constructor.call(this,a);this.type=this.type|Blockly.blockRendering.Types.SPACER|Blockly.blockRendering.Types.BETWEEN_ROW_SPACER;this.width=c;this.height=b;this.followsStatement=!1;this.widthWithConnectedBlocks=0;this.elements=[new Blockly.blockRendering.InRowSpacer(this.constants_,c)]};
Blockly.utils.object.inherits(Blockly.blockRendering.SpacerRow,Blockly.blockRendering.Row);Blockly.blockRendering.SpacerRow.prototype.measure=function(){};Blockly.blockRendering.InputRow=function(a){Blockly.blockRendering.InputRow.superClass_.constructor.call(this,a);this.type|=Blockly.blockRendering.Types.INPUT_ROW;this.connectedBlockWidths=0};Blockly.utils.object.inherits(Blockly.blockRendering.InputRow,Blockly.blockRendering.Row);
Blockly.blockRendering.InputRow.prototype.measure=function(){this.width=this.minWidth;this.height=this.minHeight;for(var a=0,b=0,c;c=this.elements[b];b++)this.width+=c.width,Blockly.blockRendering.Types.isInput(c)&&(Blockly.blockRendering.Types.isStatementInput(c)?a+=c.connectedBlockWidth:Blockly.blockRendering.Types.isExternalInput(c)&&0!=c.connectedBlockWidth&&(a+=c.connectedBlockWidth-c.connectionWidth)),Blockly.blockRendering.Types.isSpacer(c)||(this.height=Math.max(this.height,c.height));this.connectedBlockWidths=
a;this.widthWithConnectedBlocks=this.width+a};Blockly.blockRendering.InputRow.prototype.endsWithElemSpacer=function(){return!this.hasExternalInput&&!this.hasStatement};Blockly.blockRendering.RenderInfo=function(a,b){this.block_=b;this.renderer_=a;this.constants_=this.renderer_.getConstants();this.outputConnection=b.outputConnection?new Blockly.blockRendering.OutputConnection(this.constants_,b.outputConnection):null;this.isInline=b.getInputsInline()&&!b.isCollapsed();this.isCollapsed=b.isCollapsed();this.isInsertionMarker=b.isInsertionMarker();this.RTL=b.RTL;this.statementEdge=this.width=this.widthWithChildren=this.height=0;this.rows=[];this.inputRows=[];this.hiddenIcons=
[];this.topRow=new Blockly.blockRendering.TopRow(this.constants_);this.bottomRow=new Blockly.blockRendering.BottomRow(this.constants_);this.startY=this.startX=0};Blockly.blockRendering.RenderInfo.prototype.getRenderer=function(){return this.renderer_};Blockly.blockRendering.RenderInfo.prototype.measure=function(){this.createRows_();this.addElemSpacing_();this.addRowSpacing_();this.computeBounds_();this.alignRowElements_();this.finalize_()};
Blockly.blockRendering.RenderInfo.prototype.createRows_=function(){this.populateTopRow_();this.rows.push(this.topRow);var a=new Blockly.blockRendering.InputRow(this.constants_);this.inputRows.push(a);var b=this.block_.getIcons();if(b.length)for(var c=0,d;d=b[c];c++){var e=new Blockly.blockRendering.Icon(this.constants_,d);this.isCollapsed&&d.collapseHidden?this.hiddenIcons.push(e):a.elements.push(e)}d=null;for(c=0;b=this.block_.inputList[c];c++)if(b.isVisible()){this.shouldStartNewRow_(b,d)&&(this.rows.push(a),
a=new Blockly.blockRendering.InputRow(this.constants_),this.inputRows.push(a));for(d=0;e=b.fieldRow[d];d++)a.elements.push(new Blockly.blockRendering.Field(this.constants_,e,b));this.addInput_(b,a);d=b}this.isCollapsed&&(a.hasJaggedEdge=!0,a.elements.push(new Blockly.blockRendering.JaggedEdge(this.constants_)));(a.elements.length||a.hasDummyInput)&&this.rows.push(a);this.populateBottomRow_();this.rows.push(this.bottomRow)};
Blockly.blockRendering.RenderInfo.prototype.populateTopRow_=function(){var a=!!this.block_.previousConnection,b=(this.block_.hat?"cap"===this.block_.hat:this.constants_.ADD_START_HATS)&&!this.outputConnection&&!a;this.topRow.hasLeftSquareCorner(this.block_)?this.topRow.elements.push(new Blockly.blockRendering.SquareCorner(this.constants_)):this.topRow.elements.push(new Blockly.blockRendering.RoundCorner(this.constants_));b?(a=new Blockly.blockRendering.Hat(this.constants_),this.topRow.elements.push(a),
this.topRow.capline=a.ascenderHeight):a&&(this.topRow.hasPreviousConnection=!0,this.topRow.connection=new Blockly.blockRendering.PreviousConnection(this.constants_,this.block_.previousConnection),this.topRow.elements.push(this.topRow.connection));this.block_.inputList.length&&this.block_.inputList[0].type==Blockly.inputTypes.STATEMENT&&!this.block_.isCollapsed()?this.topRow.minHeight=this.constants_.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT:this.topRow.minHeight=this.constants_.TOP_ROW_MIN_HEIGHT;this.topRow.hasRightSquareCorner(this.block_)?
this.topRow.elements.push(new Blockly.blockRendering.SquareCorner(this.constants_,"right")):this.topRow.elements.push(new Blockly.blockRendering.RoundCorner(this.constants_,"right"))};
Blockly.blockRendering.RenderInfo.prototype.populateBottomRow_=function(){this.bottomRow.hasNextConnection=!!this.block_.nextConnection;this.bottomRow.minHeight=this.block_.inputList.length&&this.block_.inputList[this.block_.inputList.length-1].type==Blockly.inputTypes.STATEMENT?this.constants_.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT:this.constants_.BOTTOM_ROW_MIN_HEIGHT;this.bottomRow.hasLeftSquareCorner(this.block_)?this.bottomRow.elements.push(new Blockly.blockRendering.SquareCorner(this.constants_)):
this.bottomRow.elements.push(new Blockly.blockRendering.RoundCorner(this.constants_));this.bottomRow.hasNextConnection&&(this.bottomRow.connection=new Blockly.blockRendering.NextConnection(this.constants_,this.block_.nextConnection),this.bottomRow.elements.push(this.bottomRow.connection));this.bottomRow.hasRightSquareCorner(this.block_)?this.bottomRow.elements.push(new Blockly.blockRendering.SquareCorner(this.constants_,"right")):this.bottomRow.elements.push(new Blockly.blockRendering.RoundCorner(this.constants_,
"right"))};
Blockly.blockRendering.RenderInfo.prototype.addInput_=function(a,b){this.isInline&&a.type==Blockly.inputTypes.VALUE?(b.elements.push(new Blockly.blockRendering.InlineInput(this.constants_,a)),b.hasInlineInput=!0):a.type==Blockly.inputTypes.STATEMENT?(b.elements.push(new Blockly.blockRendering.StatementInput(this.constants_,a)),b.hasStatement=!0):a.type==Blockly.inputTypes.VALUE?(b.elements.push(new Blockly.blockRendering.ExternalValueInput(this.constants_,a)),b.hasExternalInput=!0):a.type==Blockly.inputTypes.DUMMY&&
(b.minHeight=Math.max(b.minHeight,a.getSourceBlock()&&a.getSourceBlock().isShadow()?this.constants_.DUMMY_INPUT_SHADOW_MIN_HEIGHT:this.constants_.DUMMY_INPUT_MIN_HEIGHT),b.hasDummyInput=!0);null==b.align&&(b.align=a.align)};Blockly.blockRendering.RenderInfo.prototype.shouldStartNewRow_=function(a,b){return b?a.type==Blockly.inputTypes.STATEMENT||b.type==Blockly.inputTypes.STATEMENT?!0:a.type==Blockly.inputTypes.VALUE||a.type==Blockly.inputTypes.DUMMY?!this.isInline:!1:!1};
Blockly.blockRendering.RenderInfo.prototype.addElemSpacing_=function(){for(var a=0,b;b=this.rows[a];a++){var c=b.elements;b.elements=[];b.startsWithElemSpacer()&&b.elements.push(new Blockly.blockRendering.InRowSpacer(this.constants_,this.getInRowSpacing_(null,c[0])));if(c.length){for(var d=0;d<c.length-1;d++){b.elements.push(c[d]);var e=this.getInRowSpacing_(c[d],c[d+1]);b.elements.push(new Blockly.blockRendering.InRowSpacer(this.constants_,e))}b.elements.push(c[c.length-1]);b.endsWithElemSpacer()&&
b.elements.push(new Blockly.blockRendering.InRowSpacer(this.constants_,this.getInRowSpacing_(c[c.length-1],null)))}}};
Blockly.blockRendering.RenderInfo.prototype.getInRowSpacing_=function(a,b){if(!a&&b&&Blockly.blockRendering.Types.isStatementInput(b))return this.constants_.STATEMENT_INPUT_PADDING_LEFT;if(a&&Blockly.blockRendering.Types.isInput(a)&&!b){if(Blockly.blockRendering.Types.isExternalInput(a))return this.constants_.NO_PADDING;if(Blockly.blockRendering.Types.isInlineInput(a))return this.constants_.LARGE_PADDING;if(Blockly.blockRendering.Types.isStatementInput(a))return this.constants_.NO_PADDING}return a&&
Blockly.blockRendering.Types.isLeftSquareCorner(a)&&b&&(Blockly.blockRendering.Types.isPreviousConnection(b)||Blockly.blockRendering.Types.isNextConnection(b))?b.notchOffset:a&&Blockly.blockRendering.Types.isLeftRoundedCorner(a)&&b&&(Blockly.blockRendering.Types.isPreviousConnection(b)||Blockly.blockRendering.Types.isNextConnection(b))?b.notchOffset-this.constants_.CORNER_RADIUS:this.constants_.MEDIUM_PADDING};
Blockly.blockRendering.RenderInfo.prototype.computeBounds_=function(){for(var a=0,b=0,c=0,d=0,e;e=this.rows[d];d++){e.measure();b=Math.max(b,e.width);if(e.hasStatement){var f=e.getLastInput();a=Math.max(a,e.width-f.width)}c=Math.max(c,e.widthWithConnectedBlocks)}this.statementEdge=a;this.width=b;for(d=0;e=this.rows[d];d++)e.hasStatement&&(e.statementEdge=this.statementEdge);this.widthWithChildren=Math.max(b,c);this.outputConnection&&(this.startX=this.outputConnection.width,this.width+=this.outputConnection.width,
this.widthWithChildren+=this.outputConnection.width)};Blockly.blockRendering.RenderInfo.prototype.alignRowElements_=function(){for(var a=0,b;b=this.rows[a];a++)if(b.hasStatement)this.alignStatementRow_(b);else{var c=b.width;c=this.getDesiredRowWidth_(b)-c;0<c&&this.addAlignmentPadding_(b,c);Blockly.blockRendering.Types.isTopOrBottomRow(b)&&(b.widthWithConnectedBlocks=b.width)}};Blockly.blockRendering.RenderInfo.prototype.getDesiredRowWidth_=function(a){return this.width-this.startX};
Blockly.blockRendering.RenderInfo.prototype.addAlignmentPadding_=function(a,b){var c=a.getFirstSpacer(),d=a.getLastSpacer();if(a.hasExternalInput||a.hasStatement)a.widthWithConnectedBlocks+=b;a.align==Blockly.constants.ALIGN.LEFT?d.width+=b:a.align==Blockly.constants.ALIGN.CENTRE?(c.width+=b/2,d.width+=b/2):a.align==Blockly.constants.ALIGN.RIGHT?c.width+=b:d.width+=b;a.width+=b};
Blockly.blockRendering.RenderInfo.prototype.alignStatementRow_=function(a){var b=a.getLastInput(),c=a.width-b.width,d=this.statementEdge;c=d-c;0<c&&this.addAlignmentPadding_(a,c);c=a.width;d=this.getDesiredRowWidth_(a);b.width+=d-c;b.height=Math.max(b.height,a.height);a.width+=d-c;a.widthWithConnectedBlocks=Math.max(a.width,this.statementEdge+a.connectedBlockWidths)};
Blockly.blockRendering.RenderInfo.prototype.addRowSpacing_=function(){var a=this.rows;this.rows=[];for(var b=0;b<a.length;b++)this.rows.push(a[b]),b!=a.length-1&&this.rows.push(this.makeSpacerRow_(a[b],a[b+1]))};Blockly.blockRendering.RenderInfo.prototype.makeSpacerRow_=function(a,b){var c=this.getSpacerRowHeight_(a,b),d=this.getSpacerRowWidth_(a,b);c=new Blockly.blockRendering.SpacerRow(this.constants_,c,d);a.hasStatement&&(c.followsStatement=!0);b.hasStatement&&(c.precedesStatement=!0);return c};
Blockly.blockRendering.RenderInfo.prototype.getSpacerRowWidth_=function(a,b){return this.width-this.startX};Blockly.blockRendering.RenderInfo.prototype.getSpacerRowHeight_=function(a,b){return this.constants_.MEDIUM_PADDING};
Blockly.blockRendering.RenderInfo.prototype.getElemCenterline_=function(a,b){return Blockly.blockRendering.Types.isSpacer(b)?a.yPos+b.height/2:Blockly.blockRendering.Types.isBottomRow(a)?(a=a.yPos+a.height-a.descenderHeight,Blockly.blockRendering.Types.isNextConnection(b)?a+b.height/2:a-b.height/2):Blockly.blockRendering.Types.isTopRow(a)?Blockly.blockRendering.Types.isHat(b)?a.capline-b.height/2:a.capline+b.height/2:a.yPos+a.height/2};
Blockly.blockRendering.RenderInfo.prototype.recordElemPositions_=function(a){for(var b=a.xPos,c=0,d;d=a.elements[c];c++)Blockly.blockRendering.Types.isSpacer(d)&&(d.height=a.height),d.xPos=b,d.centerline=this.getElemCenterline_(a,d),b+=d.width};
Blockly.blockRendering.RenderInfo.prototype.finalize_=function(){for(var a=0,b=0,c=0,d;d=this.rows[c];c++)d.yPos=b,d.xPos=this.startX,b+=d.height,a=Math.max(a,d.widthWithConnectedBlocks),this.recordElemPositions_(d);this.outputConnection&&this.block_.nextConnection&&this.block_.nextConnection.isConnected()&&(a=Math.max(a,this.block_.nextConnection.targetBlock().getHeightWidth().width));this.widthWithChildren=a+this.startX;this.height=b;this.startY=this.topRow.capline;this.bottomRow.baseline=b-this.bottomRow.descenderHeight};Blockly.blockRendering.Debug=function(a){this.debugElements_=[];this.svgRoot_=null;this.constants_=a};Blockly.blockRendering.Debug.config={rowSpacers:!0,elemSpacers:!0,rows:!0,elems:!0,connections:!0,blockBounds:!0,connectedBlockBounds:!0,render:!0};Blockly.blockRendering.Debug.prototype.clearElems=function(){for(var a=0,b;b=this.debugElements_[a];a++)Blockly.utils.dom.removeNode(b);this.debugElements_=[]};
Blockly.blockRendering.Debug.prototype.drawSpacerRow=function(a,b,c){if(Blockly.blockRendering.Debug.config.rowSpacers){var d=Math.abs(a.height),e=0>a.height;e&&(b-=d);this.debugElements_.push(Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{"class":"rowSpacerRect blockRenderDebug",x:c?-(a.xPos+a.width):a.xPos,y:b,width:a.width,height:d,stroke:e?"black":"blue",fill:"blue","fill-opacity":"0.5","stroke-width":"1px"},this.svgRoot_))}};
Blockly.blockRendering.Debug.prototype.drawSpacerElem=function(a,b,c){if(Blockly.blockRendering.Debug.config.elemSpacers){b=Math.abs(a.width);var d=0>a.width,e=d?a.xPos-b:a.xPos;c&&(e=-(e+b));this.debugElements_.push(Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{"class":"elemSpacerRect blockRenderDebug",x:e,y:a.centerline-a.height/2,width:b,height:a.height,stroke:"pink",fill:d?"black":"pink","fill-opacity":"0.5","stroke-width":"1px"},this.svgRoot_))}};
Blockly.blockRendering.Debug.prototype.drawRenderedElem=function(a,b){if(Blockly.blockRendering.Debug.config.elems){var c=a.xPos;b&&(c=-(c+a.width));b=a.centerline-a.height/2;this.debugElements_.push(Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{"class":"rowRenderingRect blockRenderDebug",x:c,y:b,width:a.width,height:a.height,stroke:"black",fill:"none","stroke-width":"1px"},this.svgRoot_));Blockly.blockRendering.Types.isField(a)&&a.field instanceof Blockly.FieldLabel&&this.debugElements_.push(Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,
{"class":"rowRenderingRect blockRenderDebug",x:c,y:b+this.constants_.FIELD_TEXT_BASELINE,width:a.width,height:"0.1px",stroke:"red",fill:"none","stroke-width":"0.5px"},this.svgRoot_))}Blockly.blockRendering.Types.isInput(a)&&Blockly.blockRendering.Debug.config.connections&&this.drawConnection(a.connectionModel)};
Blockly.blockRendering.Debug.prototype.drawConnection=function(a){if(Blockly.blockRendering.Debug.config.connections){if(a.type==Blockly.connectionTypes.INPUT_VALUE){var b=4;var c="magenta";var d="none"}else a.type==Blockly.connectionTypes.OUTPUT_VALUE?(b=2,d=c="magenta"):a.type==Blockly.connectionTypes.NEXT_STATEMENT?(b=4,c="goldenrod",d="none"):a.type==Blockly.connectionTypes.PREVIOUS_STATEMENT&&(b=2,d=c="goldenrod");this.debugElements_.push(Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.CIRCLE,
{"class":"blockRenderDebug",cx:a.offsetInBlock_.x,cy:a.offsetInBlock_.y,r:b,fill:d,stroke:c},this.svgRoot_))}};
Blockly.blockRendering.Debug.prototype.drawRenderedRow=function(a,b,c){Blockly.blockRendering.Debug.config.rows&&(this.debugElements_.push(Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{"class":"elemRenderingRect blockRenderDebug",x:c?-(a.xPos+a.width):a.xPos,y:a.yPos,width:a.width,height:a.height,stroke:"red",fill:"none","stroke-width":"1px"},this.svgRoot_)),Blockly.blockRendering.Types.isTopOrBottomRow(a)||Blockly.blockRendering.Debug.config.connectedBlockBounds&&this.debugElements_.push(Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,
{"class":"connectedBlockWidth blockRenderDebug",x:c?-(a.xPos+a.widthWithConnectedBlocks):a.xPos,y:a.yPos,width:a.widthWithConnectedBlocks,height:a.height,stroke:this.randomColour_,fill:"none","stroke-width":"1px","stroke-dasharray":"3,3"},this.svgRoot_)))};
Blockly.blockRendering.Debug.prototype.drawRowWithElements=function(a,b,c){for(var d=0,e=a.elements.length;d<e;d++){var f=a.elements[d];f?Blockly.blockRendering.Types.isSpacer(f)?this.drawSpacerElem(f,a.height,c):this.drawRenderedElem(f,c):console.warn("A row has an undefined or null element.",a,f)}this.drawRenderedRow(a,b,c)};
Blockly.blockRendering.Debug.prototype.drawBoundingBox=function(a){if(Blockly.blockRendering.Debug.config.blockBounds){var b=a.RTL?-a.width:0;this.debugElements_.push(Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{"class":"blockBoundingBox blockRenderDebug",x:b,y:0,width:a.width,height:a.height,stroke:"black",fill:"none","stroke-width":"1px","stroke-dasharray":"5,5"},this.svgRoot_));Blockly.blockRendering.Debug.config.connectedBlockBounds&&(b=a.RTL?-a.widthWithChildren:0,this.debugElements_.push(Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,
{"class":"blockRenderDebug",x:b,y:0,width:a.widthWithChildren,height:a.height,stroke:"#DF57BC",fill:"none","stroke-width":"1px","stroke-dasharray":"3,3"},this.svgRoot_)))}};
Blockly.blockRendering.Debug.prototype.drawDebug=function(a,b){this.clearElems();this.svgRoot_=a.getSvgRoot();this.randomColour_="#"+Math.floor(16777215*Math.random()).toString(16);for(var c=0,d=0,e;e=b.rows[d];d++)Blockly.blockRendering.Types.isBetweenRowSpacer(e)?this.drawSpacerRow(e,c,b.RTL):this.drawRowWithElements(e,c,b.RTL),c+=e.height;a.previousConnection&&this.drawConnection(a.previousConnection);a.nextConnection&&this.drawConnection(a.nextConnection);a.outputConnection&&this.drawConnection(a.outputConnection);
b.rightSide&&this.drawRenderedElem(b.rightSide,b.RTL);this.drawBoundingBox(b);this.drawRender(a.pathObject.svgPath)};Blockly.blockRendering.Debug.prototype.drawRender=function(a){Blockly.blockRendering.Debug.config.render&&(a.setAttribute("filter","url(#"+this.constants_.debugFilterId+")"),setTimeout(function(){a.setAttribute("filter","")},100))};Blockly.blockRendering.Drawer=function(a,b){this.block_=a;this.info_=b;this.topLeft_=a.getRelativeToSurfaceXY();this.inlinePath_=this.outlinePath_="";this.constants_=b.getRenderer().getConstants()};
Blockly.blockRendering.Drawer.prototype.draw=function(){this.hideHiddenIcons_();this.drawOutline_();this.drawInternals_();this.block_.pathObject.setPath(this.outlinePath_+"\n"+this.inlinePath_);this.info_.RTL&&this.block_.pathObject.flipRTL();Blockly.blockRendering.useDebugger&&this.block_.renderingDebugger.drawDebug(this.block_,this.info_);this.recordSizeOnBlock_()};Blockly.blockRendering.Drawer.prototype.recordSizeOnBlock_=function(){this.block_.height=this.info_.height;this.block_.width=this.info_.widthWithChildren};
Blockly.blockRendering.Drawer.prototype.hideHiddenIcons_=function(){for(var a=0,b;b=this.info_.hiddenIcons[a];a++)b.icon.iconGroup_.setAttribute("display","none")};Blockly.blockRendering.Drawer.prototype.drawOutline_=function(){this.drawTop_();for(var a=1;a<this.info_.rows.length-1;a++){var b=this.info_.rows[a];b.hasJaggedEdge?this.drawJaggedEdge_(b):b.hasStatement?this.drawStatementInput_(b):b.hasExternalInput?this.drawValueInput_(b):this.drawRightSideRow_(b)}this.drawBottom_();this.drawLeft_()};
Blockly.blockRendering.Drawer.prototype.drawTop_=function(){var a=this.info_.topRow,b=a.elements;this.positionPreviousConnection_();this.outlinePath_+=Blockly.utils.svgPaths.moveBy(a.xPos,this.info_.startY);for(var c=0,d;d=b[c];c++)Blockly.blockRendering.Types.isLeftRoundedCorner(d)?this.outlinePath_+=this.constants_.OUTSIDE_CORNERS.topLeft:Blockly.blockRendering.Types.isRightRoundedCorner(d)?this.outlinePath_+=this.constants_.OUTSIDE_CORNERS.topRight:Blockly.blockRendering.Types.isPreviousConnection(d)?
this.outlinePath_+=d.shape.pathLeft:Blockly.blockRendering.Types.isHat(d)?this.outlinePath_+=this.constants_.START_HAT.path:Blockly.blockRendering.Types.isSpacer(d)&&(this.outlinePath_+=Blockly.utils.svgPaths.lineOnAxis("h",d.width));this.outlinePath_+=Blockly.utils.svgPaths.lineOnAxis("v",a.height)};Blockly.blockRendering.Drawer.prototype.drawJaggedEdge_=function(a){this.outlinePath_+=this.constants_.JAGGED_TEETH.path+Blockly.utils.svgPaths.lineOnAxis("v",a.height-this.constants_.JAGGED_TEETH.height)};
Blockly.blockRendering.Drawer.prototype.drawValueInput_=function(a){var b=a.getLastInput();this.positionExternalValueConnection_(a);var c="function"==typeof b.shape.pathDown?b.shape.pathDown(b.height):b.shape.pathDown;this.outlinePath_+=Blockly.utils.svgPaths.lineOnAxis("H",b.xPos+b.width)+c+Blockly.utils.svgPaths.lineOnAxis("v",a.height-b.connectionHeight)};
Blockly.blockRendering.Drawer.prototype.drawStatementInput_=function(a){var b=a.getLastInput(),c=b.xPos+b.notchOffset+b.shape.width;b=b.shape.pathRight+Blockly.utils.svgPaths.lineOnAxis("h",-(b.notchOffset-this.constants_.INSIDE_CORNERS.width))+this.constants_.INSIDE_CORNERS.pathTop;var d=a.height-2*this.constants_.INSIDE_CORNERS.height;this.outlinePath_+=Blockly.utils.svgPaths.lineOnAxis("H",c)+b+Blockly.utils.svgPaths.lineOnAxis("v",d)+this.constants_.INSIDE_CORNERS.pathBottom+Blockly.utils.svgPaths.lineOnAxis("H",
a.xPos+a.width);this.positionStatementInputConnection_(a)};Blockly.blockRendering.Drawer.prototype.drawRightSideRow_=function(a){this.outlinePath_+=Blockly.utils.svgPaths.lineOnAxis("V",a.yPos+a.height)};
Blockly.blockRendering.Drawer.prototype.drawBottom_=function(){var a=this.info_.bottomRow,b=a.elements;this.positionNextConnection_();for(var c=0,d="",e=b.length-1,f;f=b[e];e--)Blockly.blockRendering.Types.isNextConnection(f)?d+=f.shape.pathRight:Blockly.blockRendering.Types.isLeftSquareCorner(f)?d+=Blockly.utils.svgPaths.lineOnAxis("H",a.xPos):Blockly.blockRendering.Types.isLeftRoundedCorner(f)?d+=this.constants_.OUTSIDE_CORNERS.bottomLeft:Blockly.blockRendering.Types.isRightRoundedCorner(f)?(d+=
this.constants_.OUTSIDE_CORNERS.bottomRight,c=this.constants_.OUTSIDE_CORNERS.rightHeight):Blockly.blockRendering.Types.isSpacer(f)&&(d+=Blockly.utils.svgPaths.lineOnAxis("h",-1*f.width));this.outlinePath_+=Blockly.utils.svgPaths.lineOnAxis("V",a.baseline-c);this.outlinePath_+=d};
Blockly.blockRendering.Drawer.prototype.drawLeft_=function(){var a=this.info_.outputConnection;this.positionOutputConnection_();if(a){var b=a.connectionOffsetY+a.height;a="function"==typeof a.shape.pathUp?a.shape.pathUp(a.height):a.shape.pathUp;this.outlinePath_+=Blockly.utils.svgPaths.lineOnAxis("V",b)+a}this.outlinePath_+="z"};
Blockly.blockRendering.Drawer.prototype.drawInternals_=function(){for(var a=0,b;b=this.info_.rows[a];a++)for(var c=0,d;d=b.elements[c];c++)Blockly.blockRendering.Types.isInlineInput(d)?this.drawInlineInput_(d):(Blockly.blockRendering.Types.isIcon(d)||Blockly.blockRendering.Types.isField(d))&&this.layoutField_(d)};
Blockly.blockRendering.Drawer.prototype.layoutField_=function(a){if(Blockly.blockRendering.Types.isField(a))var b=a.field.getSvgRoot();else Blockly.blockRendering.Types.isIcon(a)&&(b=a.icon.iconGroup_);var c=a.centerline-a.height/2,d=a.xPos,e="";this.info_.RTL&&(d=-(d+a.width),a.flipRtl&&(d+=a.width,e="scale(-1 1)"));Blockly.blockRendering.Types.isIcon(a)?(b.setAttribute("display","block"),b.setAttribute("transform","translate("+d+","+c+")"),a.icon.computeIconLocation()):b.setAttribute("transform",
"translate("+d+","+c+")"+e);this.info_.isInsertionMarker&&b.setAttribute("display","none")};
Blockly.blockRendering.Drawer.prototype.drawInlineInput_=function(a){var b=a.width,c=a.height,d=a.connectionOffsetY,e=a.connectionHeight+d;this.inlinePath_+=Blockly.utils.svgPaths.moveTo(a.xPos+a.connectionWidth,a.centerline-c/2)+Blockly.utils.svgPaths.lineOnAxis("v",d)+a.shape.pathDown+Blockly.utils.svgPaths.lineOnAxis("v",c-e)+Blockly.utils.svgPaths.lineOnAxis("h",b-a.connectionWidth)+Blockly.utils.svgPaths.lineOnAxis("v",-c)+"z";this.positionInlineInputConnection_(a)};
Blockly.blockRendering.Drawer.prototype.positionInlineInputConnection_=function(a){var b=a.centerline-a.height/2;if(a.connectionModel){var c=a.xPos+a.connectionWidth+a.connectionOffsetX;this.info_.RTL&&(c*=-1);a.connectionModel.setOffsetInBlock(c,b+a.connectionOffsetY)}};
Blockly.blockRendering.Drawer.prototype.positionStatementInputConnection_=function(a){var b=a.getLastInput();if(b.connectionModel){var c=a.xPos+a.statementEdge+b.notchOffset;this.info_.RTL&&(c*=-1);b.connectionModel.setOffsetInBlock(c,a.yPos)}};Blockly.blockRendering.Drawer.prototype.positionExternalValueConnection_=function(a){var b=a.getLastInput();if(b.connectionModel){var c=a.xPos+a.width;this.info_.RTL&&(c*=-1);b.connectionModel.setOffsetInBlock(c,a.yPos)}};
Blockly.blockRendering.Drawer.prototype.positionPreviousConnection_=function(){var a=this.info_.topRow;if(a.connection){var b=a.xPos+a.notchOffset;a.connection.connectionModel.setOffsetInBlock(this.info_.RTL?-b:b,0)}};Blockly.blockRendering.Drawer.prototype.positionNextConnection_=function(){var a=this.info_.bottomRow;if(a.connection){var b=a.connection,c=b.xPos;b.connectionModel.setOffsetInBlock(this.info_.RTL?-c:c,a.baseline)}};
Blockly.blockRendering.Drawer.prototype.positionOutputConnection_=function(){if(this.info_.outputConnection){var a=this.info_.startX+this.info_.outputConnection.connectionOffsetX;this.block_.outputConnection.setOffsetInBlock(this.info_.RTL?-a:a,this.info_.outputConnection.connectionOffsetY)}};Blockly.Events.MarkerMove=function(a,b,c,d){var e=a?a.workspace.id:void 0;d&&d.getType()==Blockly.ASTNode.types.WORKSPACE&&(e=d.getLocation().id);Blockly.Events.MarkerMove.superClass_.constructor.call(this,e);this.blockId=a?a.id:null;this.oldNode=c;this.newNode=d;this.isCursor=b};Blockly.utils.object.inherits(Blockly.Events.MarkerMove,Blockly.Events.UiBase);Blockly.Events.MarkerMove.prototype.type=Blockly.Events.MARKER_MOVE;
Blockly.Events.MarkerMove.prototype.toJson=function(){var a=Blockly.Events.MarkerMove.superClass_.toJson.call(this);a.isCursor=this.isCursor;a.blockId=this.blockId;a.oldNode=this.oldNode;a.newNode=this.newNode;return a};Blockly.Events.MarkerMove.prototype.fromJson=function(a){Blockly.Events.MarkerMove.superClass_.fromJson.call(this,a);this.isCursor=a.isCursor;this.blockId=a.blockId;this.oldNode=a.oldNode;this.newNode=a.newNode};
Blockly.registry.register(Blockly.registry.Type.EVENT,Blockly.Events.MARKER_MOVE,Blockly.Events.MarkerMove);Blockly.blockRendering.MarkerSvg=function(a,b,c){this.workspace_=a;this.marker_=c;this.parent_=null;this.constants_=b;this.currentMarkerSvg=null;a=this.isCursor()?this.constants_.CURSOR_COLOUR:this.constants_.MARKER_COLOUR;this.colour_=c.colour||a};Blockly.blockRendering.MarkerSvg.CURSOR_CLASS="blocklyCursor";Blockly.blockRendering.MarkerSvg.MARKER_CLASS="blocklyMarker";Blockly.blockRendering.MarkerSvg.HEIGHT_MULTIPLIER=.75;Blockly.blockRendering.MarkerSvg.prototype.getSvgRoot=function(){return this.svgGroup_};
Blockly.blockRendering.MarkerSvg.prototype.getMarker=function(){return this.marker_};Blockly.blockRendering.MarkerSvg.prototype.isCursor=function(){return"cursor"==this.marker_.type};Blockly.blockRendering.MarkerSvg.prototype.createDom=function(){var a=this.isCursor()?Blockly.blockRendering.MarkerSvg.CURSOR_CLASS:Blockly.blockRendering.MarkerSvg.MARKER_CLASS;this.svgGroup_=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.G,{"class":a},null);this.createDomInternal_();return this.svgGroup_};
Blockly.blockRendering.MarkerSvg.prototype.setParent_=function(a){this.isCursor()?(this.parent_&&this.parent_.setCursorSvg(null),a.setCursorSvg(this.getSvgRoot())):(this.parent_&&this.parent_.setMarkerSvg(null),a.setMarkerSvg(this.getSvgRoot()));this.parent_=a};
Blockly.blockRendering.MarkerSvg.prototype.draw=function(a,b){if(b){this.constants_=this.workspace_.getRenderer().getConstants();var c=this.isCursor()?this.constants_.CURSOR_COLOUR:this.constants_.MARKER_COLOUR;this.colour_=this.marker_.colour||c;this.applyColour_(b);this.showAtLocation_(b);this.fireMarkerEvent_(a,b);a=this.currentMarkerSvg.childNodes[0];void 0!==a&&a.beginElement&&a.beginElement()}else this.hide()};
Blockly.blockRendering.MarkerSvg.prototype.showAtLocation_=function(a){var b=a.getLocation().type;a.getType()==