barThickness:this.MARGIN_SIDE_+Blockly.Scrollbar.scrollbarThickness;var c=this.top_=a.absoluteMetrics.top+this.verticalSpacing_,d=a.absoluteMetrics.top+a.viewMetrics.height-this.HEIGHT_-this.verticalSpacing_;
this.top_=(a=a.toolboxMetrics.position!==Blockly.utils.toolbox.Position.BOTTOM)?d:c;a?(this.zoomInGroup_.setAttribute("transform","translate(0, 43)"),this.zoomOutGroup_.setAttribute("transform","translate(0, 77)")):(this.zoomInGroup_.setAttribute("transform","translate(0, 34)"),this.zoomResetGroup_&&this.zoomResetGroup_.setAttribute("transform","translate(0, 77)"));for(var e=this.getBoundingRectangle(),f=0,g;g=b[f];f++)e.intersects(g)&&(this.top_=a?g.top-this.HEIGHT_-this.MARGIN_BOTTOM_:g.bottom+
this.MARGIN_BOTTOM_,e=this.getBoundingRectangle(),f=-1);this.top_=Blockly.utils.math.clamp(c,this.top_,d);this.svgGroup_.setAttribute("transform","translate("+this.left_+","+this.top_+")")}};
Blockly.ZoomControls.prototype.createZoomOutSvg_=function(a){this.zoomOutGroup_=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.G,{"class":"blocklyZoom"},this.svgGroup_);var b=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.CLIPPATH,{id:"blocklyZoomoutClipPath"+a},this.zoomOutGroup_);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{width:32,height:32},b);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.IMAGE,{width:Blockly.SPRITE.width,height:Blockly.SPRITE.height,x:-64,y:-92,
"clip-path":"url(#blocklyZoomoutClipPath"+a+")"},this.zoomOutGroup_).setAttributeNS(Blockly.utils.dom.XLINK_NS,"xlink:href",this.workspace_.options.pathToMedia+Blockly.SPRITE.url);this.onZoomOutWrapper_=Blockly.browserEvents.conditionalBind(this.zoomOutGroup_,"mousedown",null,this.zoom_.bind(this,-1))};
Blockly.ZoomControls.prototype.createZoomInSvg_=function(a){this.zoomInGroup_=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.G,{"class":"blocklyZoom"},this.svgGroup_);var b=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.CLIPPATH,{id:"blocklyZoominClipPath"+a},this.zoomInGroup_);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{width:32,height:32},b);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.IMAGE,{width:Blockly.SPRITE.width,height:Blockly.SPRITE.height,x:-32,y:-92,
"clip-path":"url(#blocklyZoominClipPath"+a+")"},this.zoomInGroup_).setAttributeNS(Blockly.utils.dom.XLINK_NS,"xlink:href",this.workspace_.options.pathToMedia+Blockly.SPRITE.url);this.onZoomInWrapper_=Blockly.browserEvents.conditionalBind(this.zoomInGroup_,"mousedown",null,this.zoom_.bind(this,1))};Blockly.ZoomControls.prototype.zoom_=function(a,b){this.workspace_.markFocused();this.workspace_.zoomCenter(a);this.fireZoomEvent_();Blockly.Touch.clearTouchIdentifier();b.stopPropagation();b.preventDefault()};
Blockly.ZoomControls.prototype.createZoomResetSvg_=function(a){this.zoomResetGroup_=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.G,{"class":"blocklyZoom"},this.svgGroup_);var b=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.CLIPPATH,{id:"blocklyZoomresetClipPath"+a},this.zoomResetGroup_);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{width:32,height:32},b);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.IMAGE,{width:Blockly.SPRITE.width,height:Blockly.SPRITE.height,
y:-92,"clip-path":"url(#blocklyZoomresetClipPath"+a+")"},this.zoomResetGroup_).setAttributeNS(Blockly.utils.dom.XLINK_NS,"xlink:href",this.workspace_.options.pathToMedia+Blockly.SPRITE.url);this.onZoomResetWrapper_=Blockly.browserEvents.conditionalBind(this.zoomResetGroup_,"mousedown",null,this.resetZoom_.bind(this))};
Blockly.ZoomControls.prototype.resetZoom_=function(a){this.workspace_.markFocused();var b=Math.log(this.workspace_.options.zoomOptions.startScale/this.workspace_.scale)/Math.log(this.workspace_.options.zoomOptions.scaleSpeed);this.workspace_.beginCanvasTransition();this.workspace_.zoomCenter(b);this.workspace_.scrollCenter();setTimeout(this.workspace_.endCanvasTransition.bind(this.workspace_),500);this.fireZoomEvent_();Blockly.Touch.clearTouchIdentifier();a.stopPropagation();a.preventDefault()};
Blockly.ZoomControls.prototype.fireZoomEvent_=function(){var a=new (Blockly.Events.get(Blockly.Events.CLICK))(null,this.workspace_.id,"zoom_controls");Blockly.Events.fire(a)};Blockly.Css.register([".blocklyZoom>image, .blocklyZoom>svg>image {","opacity: .4;","}",".blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {","opacity: .6;","}",".blocklyZoom>image:active, .blocklyZoom>svg>image:active {","opacity: .8;","}"]);Blockly.ShortcutItems={};Blockly.ShortcutItems.names={ESCAPE:"escape",DELETE:"delete",COPY:"copy",CUT:"cut",PASTE:"paste",UNDO:"undo",REDO:"redo"};Blockly.ShortcutItems.registerEscape=function(){var a={name:Blockly.ShortcutItems.names.ESCAPE,preconditionFn:function(b){return!b.options.readOnly},callback:function(){Blockly.hideChaff();return!0}};Blockly.ShortcutRegistry.registry.register(a);Blockly.ShortcutRegistry.registry.addKeyMapping(Blockly.utils.KeyCodes.ESC,a.name)};
Blockly.ShortcutItems.registerDelete=function(){var a={name:Blockly.ShortcutItems.names.DELETE,preconditionFn:function(b){return!b.options.readOnly&&Blockly.selected&&Blockly.selected.isDeletable()},callback:function(b,c){c.preventDefault();if(Blockly.Gesture.inProgress())return!1;Blockly.deleteBlock(Blockly.selected);return!0}};Blockly.ShortcutRegistry.registry.register(a);Blockly.ShortcutRegistry.registry.addKeyMapping(Blockly.utils.KeyCodes.DELETE,a.name);Blockly.ShortcutRegistry.registry.addKeyMapping(Blockly.utils.KeyCodes.BACKSPACE,
a.name)};
Blockly.ShortcutItems.registerCopy=function(){var a={name:Blockly.ShortcutItems.names.COPY,preconditionFn:function(c){return!c.options.readOnly&&!Blockly.Gesture.inProgress()&&Blockly.selected&&Blockly.selected.isDeletable()&&Blockly.selected.isMovable()},callback:function(){Blockly.hideChaff();Blockly.copy(Blockly.selected);return!0}};Blockly.ShortcutRegistry.registry.register(a);var b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.C,[Blockly.utils.KeyCodes.CTRL]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,
a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.C,[Blockly.utils.KeyCodes.ALT]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.C,[Blockly.utils.KeyCodes.META]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name)};
Blockly.ShortcutItems.registerCut=function(){var a={name:Blockly.ShortcutItems.names.CUT,preconditionFn:function(c){return!c.options.readOnly&&!Blockly.Gesture.inProgress()&&Blockly.selected&&Blockly.selected.isDeletable()&&Blockly.selected.isMovable()&&!Blockly.selected.workspace.isFlyout},callback:function(){Blockly.copy(Blockly.selected);Blockly.deleteBlock(Blockly.selected);return!0}};Blockly.ShortcutRegistry.registry.register(a);var b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.X,
[Blockly.utils.KeyCodes.CTRL]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.X,[Blockly.utils.KeyCodes.ALT]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.X,[Blockly.utils.KeyCodes.META]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name)};
Blockly.ShortcutItems.registerPaste=function(){var a={name:Blockly.ShortcutItems.names.PASTE,preconditionFn:function(c){return!c.options.readOnly&&!Blockly.Gesture.inProgress()},callback:function(){return Blockly.paste()}};Blockly.ShortcutRegistry.registry.register(a);var b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.V,[Blockly.utils.KeyCodes.CTRL]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.V,
[Blockly.utils.KeyCodes.ALT]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.V,[Blockly.utils.KeyCodes.META]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name)};
Blockly.ShortcutItems.registerUndo=function(){var a={name:Blockly.ShortcutItems.names.UNDO,preconditionFn:function(c){return!c.options.readOnly&&!Blockly.Gesture.inProgress()},callback:function(c){Blockly.hideChaff();c.undo(!1);return!0}};Blockly.ShortcutRegistry.registry.register(a);var b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.Z,[Blockly.utils.KeyCodes.CTRL]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.Z,
[Blockly.utils.KeyCodes.ALT]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.Z,[Blockly.utils.KeyCodes.META]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name)};
Blockly.ShortcutItems.registerRedo=function(){var a={name:Blockly.ShortcutItems.names.REDO,preconditionFn:function(c){return!Blockly.Gesture.inProgress()&&!c.options.readOnly},callback:function(c){Blockly.hideChaff();c.undo(!0);return!0}};Blockly.ShortcutRegistry.registry.register(a);var b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.Z,[Blockly.utils.KeyCodes.SHIFT,Blockly.utils.KeyCodes.CTRL]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.Z,
[Blockly.utils.KeyCodes.SHIFT,Blockly.utils.KeyCodes.ALT]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.Z,[Blockly.utils.KeyCodes.SHIFT,Blockly.utils.KeyCodes.META]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name);b=Blockly.ShortcutRegistry.registry.createSerializedKey(Blockly.utils.KeyCodes.Y,[Blockly.utils.KeyCodes.CTRL]);Blockly.ShortcutRegistry.registry.addKeyMapping(b,a.name)};
Blockly.ShortcutItems.registerDefaultShortcuts=function(){Blockly.ShortcutItems.registerEscape();Blockly.ShortcutItems.registerDelete();Blockly.ShortcutItems.registerCopy();Blockly.ShortcutItems.registerCut();Blockly.ShortcutItems.registerPaste();Blockly.ShortcutItems.registerUndo();Blockly.ShortcutItems.registerRedo()};Blockly.ShortcutItems.registerDefaultShortcuts();Blockly.ContextMenuItems={};Blockly.ContextMenuItems.registerUndo=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(){return Blockly.Msg.UNDO},preconditionFn:function(a){return 0<a.workspace.getUndoStack().length?"enabled":"disabled"},callback:function(a){a.workspace.undo(!1)},scopeType:Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id:"undoWorkspace",weight:1})};
Blockly.ContextMenuItems.registerRedo=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(){return Blockly.Msg.REDO},preconditionFn:function(a){return 0<a.workspace.getRedoStack().length?"enabled":"disabled"},callback:function(a){a.workspace.undo(!0)},scopeType:Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id:"redoWorkspace",weight:2})};
Blockly.ContextMenuItems.registerCleanup=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(){return Blockly.Msg.CLEAN_UP},preconditionFn:function(a){return a.workspace.isMovable()?1<a.workspace.getTopBlocks(!1).length?"enabled":"disabled":"hidden"},callback:function(a){a.workspace.cleanUp()},scopeType:Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id:"cleanWorkspace",weight:3})};
Blockly.ContextMenuItems.toggleOption_=function(a,b){for(var c=0,d=0;d<b.length;d++)for(var e=b[d];e;)setTimeout(e.setCollapsed.bind(e,a),c),e=e.getNextBlock(),c+=10};
Blockly.ContextMenuItems.registerCollapse=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(){return Blockly.Msg.COLLAPSE_ALL},preconditionFn:function(a){if(a.workspace.options.collapse){a=a.workspace.getTopBlocks(!1);for(var b=0;b<a.length;b++)for(var c=a[b];c;){if(!c.isCollapsed())return"enabled";c=c.getNextBlock()}return"disabled"}return"hidden"},callback:function(a){Blockly.ContextMenuItems.toggleOption_(!0,a.workspace.getTopBlocks(!0))},scopeType:Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
id:"collapseWorkspace",weight:4})};
Blockly.ContextMenuItems.registerExpand=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(){return Blockly.Msg.EXPAND_ALL},preconditionFn:function(a){if(a.workspace.options.collapse){a=a.workspace.getTopBlocks(!1);for(var b=0;b<a.length;b++)for(var c=a[b];c;){if(c.isCollapsed())return"enabled";c=c.getNextBlock()}return"disabled"}return"hidden"},callback:function(a){Blockly.ContextMenuItems.toggleOption_(!1,a.workspace.getTopBlocks(!0))},scopeType:Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
id:"expandWorkspace",weight:5})};Blockly.ContextMenuItems.addDeletableBlocks_=function(a,b){if(a.isDeletable())Array.prototype.push.apply(b,a.getDescendants(!1));else{a=a.getChildren(!1);for(var c=0;c<a.length;c++)Blockly.ContextMenuItems.addDeletableBlocks_(a[c],b)}};Blockly.ContextMenuItems.getDeletableBlocks_=function(a){var b=[];a=a.getTopBlocks(!0);for(var c=0;c<a.length;c++)Blockly.ContextMenuItems.addDeletableBlocks_(a[c],b);return b};
Blockly.ContextMenuItems.deleteNext_=function(a,b){Blockly.Events.setGroup(b);var c=a.shift();c&&(c.workspace?(c.dispose(!1,!0),setTimeout(Blockly.ContextMenuItems.deleteNext_,10,a,b)):Blockly.ContextMenuItems.deleteNext_(a,b));Blockly.Events.setGroup(!1)};
Blockly.ContextMenuItems.registerDeleteAll=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(a){if(a.workspace)return a=Blockly.ContextMenuItems.getDeletableBlocks_(a.workspace).length,1==a?Blockly.Msg.DELETE_BLOCK:Blockly.Msg.DELETE_X_BLOCKS.replace("%1",String(a))},preconditionFn:function(a){if(a.workspace)return 0<Blockly.ContextMenuItems.getDeletableBlocks_(a.workspace).length?"enabled":"disabled"},callback:function(a){if(a.workspace){a.workspace.cancelCurrentGesture();
var b=Blockly.ContextMenuItems.getDeletableBlocks_(a.workspace),c=Blockly.utils.genUid();2>b.length?Blockly.ContextMenuItems.deleteNext_(b,c):Blockly.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace("%1",b.length),function(d){d&&Blockly.ContextMenuItems.deleteNext_(b,c)})}},scopeType:Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id:"workspaceDelete",weight:6})};
Blockly.ContextMenuItems.registerWorkspaceOptions_=function(){Blockly.ContextMenuItems.registerUndo();Blockly.ContextMenuItems.registerRedo();Blockly.ContextMenuItems.registerCleanup();Blockly.ContextMenuItems.registerCollapse();Blockly.ContextMenuItems.registerExpand();Blockly.ContextMenuItems.registerDeleteAll()};
Blockly.ContextMenuItems.registerDuplicate=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(){return Blockly.Msg.DUPLICATE_BLOCK},preconditionFn:function(a){a=a.block;return!a.isInFlyout&&a.isDeletable()&&a.isMovable()?a.isDuplicatable()?"enabled":"disabled":"hidden"},callback:function(a){a.block&&Blockly.duplicate(a.block)},scopeType:Blockly.ContextMenuRegistry.ScopeType.BLOCK,id:"blockDuplicate",weight:1})};
Blockly.ContextMenuItems.registerComment=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(a){return a.block.getCommentIcon()?Blockly.Msg.REMOVE_COMMENT:Blockly.Msg.ADD_COMMENT},preconditionFn:function(a){a=a.block;return Blockly.utils.userAgent.IE||a.isInFlyout||!a.workspace.options.comments||a.isCollapsed()||!a.isEditable()?"hidden":"enabled"},callback:function(a){a=a.block;a.getCommentIcon()?a.setCommentText(null):a.setCommentText("")},scopeType:Blockly.ContextMenuRegistry.ScopeType.BLOCK,
id:"blockComment",weight:2})};
Blockly.ContextMenuItems.registerInline=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(a){return a.block.getInputsInline()?Blockly.Msg.EXTERNAL_INPUTS:Blockly.Msg.INLINE_INPUTS},preconditionFn:function(a){a=a.block;if(!a.isInFlyout&&a.isMovable()&&!a.isCollapsed())for(var b=1;b<a.inputList.length;b++)if(a.inputList[b-1].type!=Blockly.inputTypes.STATEMENT&&a.inputList[b].type!=Blockly.inputTypes.STATEMENT)return"enabled";return"hidden"},callback:function(a){a.block.setInputsInline(!a.block.getInputsInline())},
scopeType:Blockly.ContextMenuRegistry.ScopeType.BLOCK,id:"blockInline",weight:3})};
Blockly.ContextMenuItems.registerCollapseExpandBlock=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(a){return a.block.isCollapsed()?Blockly.Msg.EXPAND_BLOCK:Blockly.Msg.COLLAPSE_BLOCK},preconditionFn:function(a){a=a.block;return!a.isInFlyout&&a.isMovable()?"enabled":"hidden"},callback:function(a){a.block.setCollapsed(!a.block.isCollapsed())},scopeType:Blockly.ContextMenuRegistry.ScopeType.BLOCK,id:"blockCollapseExpand",weight:4})};
Blockly.ContextMenuItems.registerDisable=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(a){return a.block.isEnabled()?Blockly.Msg.DISABLE_BLOCK:Blockly.Msg.ENABLE_BLOCK},preconditionFn:function(a){a=a.block;return!a.isInFlyout&&a.workspace.options.disable&&a.isEditable()?a.getInheritedDisabled()?"disabled":"enabled":"hidden"},callback:function(a){a=a.block;var b=Blockly.Events.getGroup();b||Blockly.Events.setGroup(!0);a.setEnabled(!a.isEnabled());b||Blockly.Events.setGroup(!1)},
scopeType:Blockly.ContextMenuRegistry.ScopeType.BLOCK,id:"blockDisable",weight:5})};
Blockly.ContextMenuItems.registerDelete=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(a){var b=a.block;a=b.getDescendants(!1).length;(b=b.getNextBlock())&&(a-=b.getDescendants(!1).length);return 1==a?Blockly.Msg.DELETE_BLOCK:Blockly.Msg.DELETE_X_BLOCKS.replace("%1",String(a))},preconditionFn:function(a){return!a.block.isInFlyout&&a.block.isDeletable()?"enabled":"hidden"},callback:function(a){Blockly.Events.setGroup(!0);a.block.dispose(!0,!0);Blockly.Events.setGroup(!1)},
scopeType:Blockly.ContextMenuRegistry.ScopeType.BLOCK,id:"blockDelete",weight:6})};Blockly.ContextMenuItems.registerHelp=function(){Blockly.ContextMenuRegistry.registry.register({displayText:function(){return Blockly.Msg.HELP},preconditionFn:function(a){a=a.block;return("function"==typeof a.helpUrl?a.helpUrl():a.helpUrl)?"enabled":"hidden"},callback:function(a){a.block.showHelp()},scopeType:Blockly.ContextMenuRegistry.ScopeType.BLOCK,id:"blockHelp",weight:7})};
Blockly.ContextMenuItems.registerBlockOptions_=function(){Blockly.ContextMenuItems.registerDuplicate();Blockly.ContextMenuItems.registerComment();Blockly.ContextMenuItems.registerInline();Blockly.ContextMenuItems.registerCollapseExpandBlock();Blockly.ContextMenuItems.registerDisable();Blockly.ContextMenuItems.registerDelete();Blockly.ContextMenuItems.registerHelp()};Blockly.ContextMenuItems.registerDefaultOptions=function(){Blockly.ContextMenuItems.registerWorkspaceOptions_();Blockly.ContextMenuItems.registerBlockOptions_()};
Blockly.ContextMenuItems.registerDefaultOptions();Blockly.Mutator=function(a){Blockly.Mutator.superClass_.constructor.call(this,null);this.quarkNames_=a};Blockly.utils.object.inherits(Blockly.Mutator,Blockly.Icon);Blockly.Mutator.prototype.workspaceWidth_=0;Blockly.Mutator.prototype.workspaceHeight_=0;Blockly.Mutator.prototype.setBlock=function(a){this.block_=a};Blockly.Mutator.prototype.getWorkspace=function(){return this.workspace_};
Blockly.Mutator.prototype.drawIcon_=function(a){Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{"class":"blocklyIconShape",rx:"4",ry:"4",height:"16",width:"16"},a);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.PATH,{"class":"blocklyIconSymbol",d:"m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"},
a);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.CIRCLE,{"class":"blocklyIconShape",r:"2.7",cx:"8",cy:"8"},a)};Blockly.Mutator.prototype.iconClick_=function(a){this.block_.isEditable()&&Blockly.Icon.prototype.iconClick_.call(this,a)};
Blockly.Mutator.prototype.createEditor_=function(){this.svgDialog_=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.SVG,{x:Blockly.Bubble.BORDER_WIDTH,y:Blockly.Bubble.BORDER_WIDTH},null);if(this.quarkNames_.length)for(var a=Blockly.utils.xml.createElement("xml"),b=0,c;c=this.quarkNames_[b];b++){var d=Blockly.utils.xml.createElement("block");d.setAttribute("type",c);a.appendChild(d)}else a=null;b=new Blockly.Options({disable:!1,parentWorkspace:this.block_.workspace,media:this.block_.workspace.options.pathToMedia,
rtl:this.block_.RTL,horizontalLayout:!1,renderer:this.block_.workspace.options.renderer,rendererOverrides:this.block_.workspace.options.rendererOverrides});b.toolboxPosition=this.block_.RTL?Blockly.utils.toolbox.Position.RIGHT:Blockly.utils.toolbox.Position.LEFT;if(c=!!a)b.languageTree=Blockly.utils.toolbox.convertToolboxDefToJson(a);this.workspace_=new Blockly.WorkspaceSvg(b);this.workspace_.isMutator=!0;this.workspace_.addChangeListener(Blockly.Events.disableOrphans);a=c?this.workspace_.addFlyout(Blockly.utils.Svg.G):
null;b=this.workspace_.createDom("blocklyMutatorBackground");a&&b.insertBefore(a,this.workspace_.svgBlockCanvas_);this.svgDialog_.appendChild(b);return this.svgDialog_};Blockly.Mutator.prototype.updateEditable=function(){Blockly.Mutator.superClass_.updateEditable.call(this);this.block_.isInFlyout||(this.block_.isEditable()?this.iconGroup_&&Blockly.utils.dom.removeClass(this.iconGroup_,"blocklyIconGroupReadonly"):(this.setVisible(!1),this.iconGroup_&&Blockly.utils.dom.addClass(this.iconGroup_,"blocklyIconGroupReadonly")))};
Blockly.Mutator.prototype.resizeBubble_=function(){var a=2*Blockly.Bubble.BORDER_WIDTH,b=this.workspace_.getCanvas().getBBox(),c=b.width+b.x,d=b.height+3*a,e=this.workspace_.getFlyout();if(e){var f=e.getWorkspace().getMetricsManager().getScrollMetrics();d=Math.max(d,f.height+20);c+=e.getWidth()}this.block_.RTL&&(c=-b.x);c+=3*a;if(Math.abs(this.workspaceWidth_-c)>a||Math.abs(this.workspaceHeight_-d)>a)this.workspaceWidth_=c,this.workspaceHeight_=d,this.bubble_.setBubbleSize(c+a,d+a),this.svgDialog_.setAttribute("width",
this.workspaceWidth_),this.svgDialog_.setAttribute("height",this.workspaceHeight_),this.workspace_.setCachedParentSvgSize(this.workspaceWidth_,this.workspaceHeight_);this.block_.RTL&&(a="translate("+this.workspaceWidth_+",0)",this.workspace_.getCanvas().setAttribute("transform",a));this.workspace_.resize()};Blockly.Mutator.prototype.onBubbleMove_=function(){this.workspace_&&this.workspace_.recordDeleteAreas()};
Blockly.Mutator.prototype.setVisible=function(a){if(a!=this.isVisible())if(Blockly.Events.fire(new (Blockly.Events.get(Blockly.Events.BUBBLE_OPEN))(this.block_,a,"mutator")),a){this.bubble_=new Blockly.Bubble(this.block_.workspace,this.createEditor_(),this.block_.pathObject.svgPath,this.iconXY_,null,null);this.bubble_.setSvgId(this.block_.id);this.bubble_.registerMoveEvent(this.onBubbleMove_.bind(this));var b=this.workspace_.options.languageTree;a=this.workspace_.getFlyout();b&&(a.init(this.workspace_),
a.show(b));this.rootBlock_=this.block_.decompose(this.workspace_);b=this.rootBlock_.getDescendants(!1);for(var c=0,d;d=b[c];c++)d.render();this.rootBlock_.setMovable(!1);this.rootBlock_.setDeletable(!1);a?(b=2*a.CORNER_RADIUS,a=this.rootBlock_.RTL?a.getWidth()+b:b):a=b=16;this.block_.RTL&&(a=-a);this.rootBlock_.moveBy(a,b);if(this.block_.saveConnections){var e=this,f=this.block_;f.saveConnections(this.rootBlock_);this.sourceListener_=function(){f.saveConnections(e.rootBlock_)};this.block_.workspace.addChangeListener(this.sourceListener_)}this.resizeBubble_();
this.workspace_.addChangeListener(this.workspaceChanged_.bind(this));this.applyColour()}else this.svgDialog_=null,this.workspace_.dispose(),this.rootBlock_=this.workspace_=null,this.bubble_.dispose(),this.bubble_=null,this.workspaceHeight_=this.workspaceWidth_=0,this.sourceListener_&&(this.block_.workspace.removeChangeListener(this.sourceListener_),this.sourceListener_=null)};
Blockly.Mutator.prototype.workspaceChanged_=function(a){if(!(a.isUiEvent||a.type==Blockly.Events.CHANGE&&"disabled"==a.element)){if(!this.workspace_.isDragging()){a=this.workspace_.getTopBlocks(!1);for(var b=0,c;c=a[b];b++){var d=c.getRelativeToSurfaceXY();20>d.y&&c.moveBy(0,20-d.y);if(c.RTL){var e=-20,f=this.workspace_.getFlyout();f&&(e-=f.getWidth());d.x>e&&c.moveBy(e-d.x,0)}else 20>d.x&&c.moveBy(20-d.x,0)}}if(this.rootBlock_.workspace==this.workspace_){Blockly.Events.setGroup(!0);c=this.block_;
a=(a=c.mutationToDom())&&Blockly.Xml.domToText(a);b=c.rendered;c.rendered=!1;c.compose(this.rootBlock_);c.rendered=b;c.initSvg();c.rendered&&c.render();b=(b=c.mutationToDom())&&Blockly.Xml.domToText(b);if(a!=b){Blockly.Events.fire(new (Blockly.Events.get(Blockly.Events.BLOCK_CHANGE))(c,"mutation",null,a,b));var g=Blockly.Events.getGroup();setTimeout(function(){Blockly.Events.setGroup(g);c.bumpNeighbours();Blockly.Events.setGroup(!1)},Blockly.BUMP_DELAY)}this.workspace_.isDragging()||this.resizeBubble_();
Blockly.Events.setGroup(!1)}}};Blockly.Mutator.prototype.dispose=function(){this.block_.mutator=null;Blockly.Icon.prototype.dispose.call(this)};Blockly.Mutator.prototype.updateBlockStyle=function(){var a=this.workspace_;if(a&&a.getAllBlocks(!1)){for(var b=a.getAllBlocks(!1),c=0;c<b.length;c++){var d=b[c];d.setStyle(d.getStyleName())}if(c=a.getFlyout())for(a=c.workspace_.getAllBlocks(!1),c=0;c<a.length;c++)d=a[c],d.setStyle(d.getStyleName())}};
Blockly.Mutator.reconnect=function(a,b,c){if(!a||!a.getSourceBlock().workspace)return!1;c=b.getInput(c).connection;var d=a.targetBlock();return d&&d!=b||c.targetConnection==a?!1:(c.isConnected()&&c.disconnect(),c.connect(a),!0)};Blockly.Mutator.findParentWs=function(a){var b=null;if(a&&a.options){var c=a.options.parentWorkspace;a.isFlyout?c&&c.options&&(b=c.options.parentWorkspace):c&&(b=c)}return b};Blockly.FieldTextInput=function(a,b,c){this.spellcheck_=!0;Blockly.FieldTextInput.superClass_.constructor.call(this,a,b,c);this.onKeyInputWrapper_=this.onKeyDownWrapper_=this.htmlInput_=null;this.fullBlockClickTarget_=!1;this.workspace_=null};Blockly.utils.object.inherits(Blockly.FieldTextInput,Blockly.Field);Blockly.FieldTextInput.prototype.DEFAULT_VALUE="";
Blockly.FieldTextInput.fromJson=function(a){var b=Blockly.utils.replaceMessageReferences(a.text);return new Blockly.FieldTextInput(b,void 0,a)};Blockly.FieldTextInput.prototype.SERIALIZABLE=!0;Blockly.FieldTextInput.BORDERRADIUS=4;Blockly.FieldTextInput.prototype.CURSOR="text";Blockly.FieldTextInput.prototype.configure_=function(a){Blockly.FieldTextInput.superClass_.configure_.call(this,a);"boolean"==typeof a.spellcheck&&(this.spellcheck_=a.spellcheck)};
Blockly.FieldTextInput.prototype.initView=function(){if(this.getConstants().FULL_BLOCK_FIELDS){for(var a=0,b=0,c=0,d;d=this.sourceBlock_.inputList[c];c++){for(var e=0;d.fieldRow[e];e++)a++;d.connection&&b++}this.fullBlockClickTarget_=1>=a&&this.sourceBlock_.outputConnection&&!b}else this.fullBlockClickTarget_=!1;this.fullBlockClickTarget_?this.clickTarget_=this.sourceBlock_.getSvgRoot():this.createBorderRect_();this.createTextElement_()};
Blockly.FieldTextInput.prototype.doClassValidation_=function(a){return null===a||void 0===a?null:String(a)};Blockly.FieldTextInput.prototype.doValueInvalid_=function(a){this.isBeingEdited_&&(this.isTextValid_=!1,a=this.value_,this.value_=this.htmlInput_.untypedDefaultValue_,this.sourceBlock_&&Blockly.Events.isEnabled()&&Blockly.Events.fire(new (Blockly.Events.get(Blockly.Events.BLOCK_CHANGE))(this.sourceBlock_,"field",this.name||null,a,this.value_)))};
Blockly.FieldTextInput.prototype.doValueUpdate_=function(a){this.isTextValid_=!0;this.value_=a;this.isBeingEdited_||(this.isDirty_=!0)};Blockly.FieldTextInput.prototype.applyColour=function(){this.sourceBlock_&&this.getConstants().FULL_BLOCK_FIELDS&&(this.borderRect_?this.borderRect_.setAttribute("stroke",this.sourceBlock_.style.colourTertiary):this.sourceBlock_.pathObject.svgPath.setAttribute("fill",this.getConstants().FIELD_BORDER_RECT_COLOUR))};
Blockly.FieldTextInput.prototype.render_=function(){Blockly.FieldTextInput.superClass_.render_.call(this);if(this.isBeingEdited_){this.resizeEditor_();var a=this.htmlInput_;this.isTextValid_?(Blockly.utils.dom.removeClass(a,"blocklyInvalidInput"),Blockly.utils.aria.setState(a,Blockly.utils.aria.State.INVALID,!1)):(Blockly.utils.dom.addClass(a,"blocklyInvalidInput"),Blockly.utils.aria.setState(a,Blockly.utils.aria.State.INVALID,!0))}};
Blockly.FieldTextInput.prototype.setSpellcheck=function(a){a!=this.spellcheck_&&(this.spellcheck_=a,this.htmlInput_&&this.htmlInput_.setAttribute("spellcheck",this.spellcheck_))};Blockly.FieldTextInput.prototype.showEditor_=function(a,b){this.workspace_=this.sourceBlock_.workspace;a=b||!1;!a&&(Blockly.utils.userAgent.MOBILE||Blockly.utils.userAgent.ANDROID||Blockly.utils.userAgent.IPAD)?this.showPromptEditor_():this.showInlineEditor_(a)};
Blockly.FieldTextInput.prototype.showPromptEditor_=function(){Blockly.prompt(Blockly.Msg.CHANGE_VALUE_TITLE,this.getText(),function(a){this.setValue(this.getValueFromEditorText_(a))}.bind(this))};Blockly.FieldTextInput.prototype.showInlineEditor_=function(a){Blockly.WidgetDiv.show(this,this.sourceBlock_.RTL,this.widgetDispose_.bind(this));this.htmlInput_=this.widgetCreate_();this.isBeingEdited_=!0;a||(this.htmlInput_.focus({preventScroll:!0}),this.htmlInput_.select())};
Blockly.FieldTextInput.prototype.widgetCreate_=function(){var a=Blockly.WidgetDiv.DIV;Blockly.utils.dom.addClass(this.getClickTarget_(),"editing");var b=document.createElement("input");b.className="blocklyHtmlInput";b.setAttribute("spellcheck",this.spellcheck_);var c=this.workspace_.getScale(),d=this.getConstants().FIELD_TEXT_FONTSIZE*c+"pt";a.style.fontSize=d;b.style.fontSize=d;d=Blockly.FieldTextInput.BORDERRADIUS*c+"px";if(this.fullBlockClickTarget_){d=this.getScaledBBox();d=(d.bottom-d.top)/2+
"px";var e=this.sourceBlock_.getParent()?this.sourceBlock_.getParent().style.colourTertiary:this.sourceBlock_.style.colourTertiary;b.style.border=1*c+"px solid "+e;a.style.borderRadius=d;a.style.transition="box-shadow 0.25s ease 0s";this.getConstants().FIELD_TEXTINPUT_BOX_SHADOW&&(a.style.boxShadow="rgba(255, 255, 255, 0.3) 0px 0px 0px "+4*c+"px")}b.style.borderRadius=d;a.appendChild(b);b.value=b.defaultValue=this.getEditorText_(this.value_);b.untypedDefaultValue_=this.value_;b.oldValue_=null;this.resizeEditor_();
this.bindInputEvents_(b);return b};Blockly.FieldTextInput.prototype.widgetDispose_=function(){this.isBeingEdited_=!1;this.isTextValid_=!0;this.forceRerender();if(this.onFinishEditing_)this.onFinishEditing_(this.value_);this.unbindInputEvents_();var a=Blockly.WidgetDiv.DIV.style;a.width="auto";a.height="auto";a.fontSize="";a.transition="";a.boxShadow="";this.htmlInput_=null;Blockly.utils.dom.removeClass(this.getClickTarget_(),"editing")};
Blockly.FieldTextInput.prototype.bindInputEvents_=function(a){this.onKeyDownWrapper_=Blockly.browserEvents.conditionalBind(a,"keydown",this,this.onHtmlInputKeyDown_);this.onKeyInputWrapper_=Blockly.browserEvents.conditionalBind(a,"input",this,this.onHtmlInputChange_)};
Blockly.FieldTextInput.prototype.unbindInputEvents_=function(){this.onKeyDownWrapper_&&(Blockly.browserEvents.unbind(this.onKeyDownWrapper_),this.onKeyDownWrapper_=null);this.onKeyInputWrapper_&&(Blockly.browserEvents.unbind(this.onKeyInputWrapper_),this.onKeyInputWrapper_=null)};
Blockly.FieldTextInput.prototype.onHtmlInputKeyDown_=function(a){a.keyCode==Blockly.utils.KeyCodes.ENTER?(Blockly.WidgetDiv.hide(),Blockly.DropDownDiv.hideWithoutAnimation()):a.keyCode==Blockly.utils.KeyCodes.ESC?(this.htmlInput_.value=this.htmlInput_.defaultValue,Blockly.WidgetDiv.hide(),Blockly.DropDownDiv.hideWithoutAnimation()):a.keyCode==Blockly.utils.KeyCodes.TAB&&(Blockly.WidgetDiv.hide(),Blockly.DropDownDiv.hideWithoutAnimation(),this.sourceBlock_.tab(this,!a.shiftKey),a.preventDefault())};
Blockly.FieldTextInput.prototype.onHtmlInputChange_=function(a){a=this.htmlInput_.value;a!==this.htmlInput_.oldValue_&&(this.htmlInput_.oldValue_=a,Blockly.Events.setGroup(!0),a=this.getValueFromEditorText_(a),this.setValue(a),this.forceRerender(),this.resizeEditor_(),Blockly.Events.setGroup(!1))};Blockly.FieldTextInput.prototype.setEditorValue_=function(a){this.isDirty_=!0;this.isBeingEdited_&&(this.htmlInput_.value=this.getEditorText_(a));this.setValue(a)};
Blockly.FieldTextInput.prototype.resizeEditor_=function(){var a=Blockly.WidgetDiv.DIV,b=this.getScaledBBox();a.style.width=b.right-b.left+"px";a.style.height=b.bottom-b.top+"px";b=new Blockly.utils.Coordinate(this.sourceBlock_.RTL?b.right-a.offsetWidth:b.left,b.top);a.style.left=b.x+"px";a.style.top=b.y+"px"};Blockly.FieldTextInput.prototype.isTabNavigable=function(){return!0};Blockly.FieldTextInput.prototype.getText_=function(){return this.isBeingEdited_&&this.htmlInput_?this.htmlInput_.value:null};
Blockly.FieldTextInput.prototype.getEditorText_=function(a){return String(a)};Blockly.FieldTextInput.prototype.getValueFromEditorText_=function(a){return a};Blockly.fieldRegistry.register("field_input",Blockly.FieldTextInput);Blockly.FieldAngle=function(a,b,c){this.clockwise_=Blockly.FieldAngle.CLOCKWISE;this.offset_=Blockly.FieldAngle.OFFSET;this.wrap_=Blockly.FieldAngle.WRAP;this.round_=Blockly.FieldAngle.ROUND;Blockly.FieldA