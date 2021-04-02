0};Blockly.ToolboxCategory.prototype.isSelectable=function(){return this.isVisible()&&!this.isDisabled_};Blockly.ToolboxCategory.prototype.onClick=function(a){};
Blockly.ToolboxCategory.prototype.setSelected=function(a){if(a){var b=this.parseColour_(Blockly.ToolboxCategory.defaultBackgroundColour);this.rowDiv_.style.backgroundColor=this.colour_||b;Blockly.utils.dom.addClass(this.rowDiv_,this.cssConfig_.selected)}else this.rowDiv_.style.backgroundColor="",Blockly.utils.dom.removeClass(this.rowDiv_,this.cssConfig_.selected);Blockly.utils.aria.setState(this.htmlDiv_,Blockly.utils.aria.State.SELECTED,a)};
Blockly.ToolboxCategory.prototype.setDisabled=function(a){this.isDisabled_=a;this.getDiv().setAttribute("disabled",a);a?this.getDiv().setAttribute("disabled","true"):this.getDiv().removeAttribute("disabled")};Blockly.ToolboxCategory.prototype.getName=function(){return this.name_};Blockly.ToolboxCategory.prototype.getParent=function(){return this.parent_};Blockly.ToolboxCategory.prototype.getDiv=function(){return this.htmlDiv_};Blockly.ToolboxCategory.prototype.getContents=function(){return this.flyoutItems_};
Blockly.ToolboxCategory.prototype.updateFlyoutContents=function(a){this.flyoutItems_=[];"string"==typeof a?this.toolboxItemDef_.custom=a:(delete this.toolboxItemDef_.custom,this.toolboxItemDef_.contents=Blockly.utils.toolbox.convertFlyoutDefToJsonArray(a));this.parseContents_(this.toolboxItemDef_)};Blockly.ToolboxCategory.prototype.dispose=function(){Blockly.utils.dom.removeNode(this.htmlDiv_)};
Blockly.Css.register([".blocklyTreeRow:not(.blocklyTreeSelected):hover {","background-color: rgba(255, 255, 255, 0.2);","}",'.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {',"margin: 1px 5px 1px 0;","}",'.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {',"margin: 1px 0 1px 5px;","}",".blocklyTreeRow {","height: 22px;","line-height: 22px;","margin-bottom: 3px;","padding-right: 8px;","white-space: nowrap;","}",'.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',"margin-left: 8px;",
"padding-right: 0px","}",".blocklyTreeIcon {","background-image: url(<<<PATH>>>/sprites.png);","height: 16px;","vertical-align: middle;","visibility: hidden;","width: 16px;","}",".blocklyTreeIconClosed {","background-position: -32px -1px;","}",'.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {',"background-position: 0 -1px;","}",".blocklyTreeSelected>.blocklyTreeIconClosed {","background-position: -32px -17px;","}",'.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {',
"background-position: 0 -17px;","}",".blocklyTreeIconOpen {","background-position: -16px -1px;","}",".blocklyTreeSelected>.blocklyTreeIconOpen {","background-position: -16px -17px;","}",".blocklyTreeLabel {","cursor: default;","font: 16px sans-serif;","padding: 0 3px;","vertical-align: middle;","}",".blocklyToolboxDelete .blocklyTreeLabel {",'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',"}",".blocklyTreeSelected .blocklyTreeLabel {","color: #fff;","}"]);
Blockly.registry.register(Blockly.registry.Type.TOOLBOX_ITEM,Blockly.ToolboxCategory.registrationName,Blockly.ToolboxCategory);Blockly.ToolboxSeparator=function(a,b){Blockly.ToolboxSeparator.superClass_.constructor.call(this,a,b);this.cssConfig_={container:"blocklyTreeSeparator"};Blockly.utils.object.mixin(this.cssConfig_,a.cssconfig||a.cssConfig)};Blockly.utils.object.inherits(Blockly.ToolboxSeparator,Blockly.ToolboxItem);Blockly.ToolboxSeparator.registrationName="sep";Blockly.ToolboxSeparator.prototype.init=function(){this.createDom_()};
Blockly.ToolboxSeparator.prototype.createDom_=function(){var a=document.createElement("div");Blockly.utils.dom.addClass(a,this.cssConfig_.container);return this.htmlDiv_=a};Blockly.ToolboxSeparator.prototype.getDiv=function(){return this.htmlDiv_};Blockly.ToolboxSeparator.prototype.dispose=function(){Blockly.utils.dom.removeNode(this.htmlDiv_)};Blockly.Css.register('.blocklyTreeSeparator {,border-bottom: solid #e5e5e5 1px;,height: 0;,margin: 5px 0;,},.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {,border-right: solid #e5e5e5 1px;,border-bottom: none;,height: auto;,margin: 0 5px 0 5px;,padding: 5px 0;,width: 0;,}'.split(","));
Blockly.registry.register(Blockly.registry.Type.TOOLBOX_ITEM,Blockly.ToolboxSeparator.registrationName,Blockly.ToolboxSeparator);Blockly.CollapsibleToolboxCategory=function(a,b,c){this.subcategoriesDiv_=null;this.expanded_=!1;this.toolboxItems_=[];Blockly.CollapsibleToolboxCategory.superClass_.constructor.call(this,a,b,c)};Blockly.utils.object.inherits(Blockly.CollapsibleToolboxCategory,Blockly.ToolboxCategory);Blockly.CollapsibleToolboxCategory.registrationName="collapsibleCategory";
Blockly.CollapsibleToolboxCategory.prototype.makeDefaultCssConfig_=function(){var a=Blockly.CollapsibleToolboxCategory.superClass_.makeDefaultCssConfig_.call(this);a.contents="blocklyToolboxContents";return a};
Blockly.CollapsibleToolboxCategory.prototype.parseContents_=function(a){var b=a.contents,c=!0;if(a.custom)this.flyoutItems_=a.custom;else if(b){a=0;for(var d;d=b[a];a++)!Blockly.registry.hasItem(Blockly.registry.Type.TOOLBOX_ITEM,d.kind)||d.kind.toLowerCase()==Blockly.ToolboxSeparator.registrationName&&c?(this.flyoutItems_.push(d),c=!0):(this.createToolboxItem_(d),c=!1)}};
Blockly.CollapsibleToolboxCategory.prototype.createToolboxItem_=function(a){var b=a.kind;"CATEGORY"==b.toUpperCase()&&Blockly.utils.toolbox.isCategoryCollapsible(a)&&(b=Blockly.CollapsibleToolboxCategory.registrationName);a=new (Blockly.registry.getClass(Blockly.registry.Type.TOOLBOX_ITEM,b))(a,this.parentToolbox_,this);this.toolboxItems_.push(a)};
Blockly.CollapsibleToolboxCategory.prototype.init=function(){Blockly.CollapsibleToolboxCategory.superClass_.init.call(this);this.setExpanded("true"==this.toolboxItemDef_.expanded||this.toolboxItemDef_.expanded)};
Blockly.CollapsibleToolboxCategory.prototype.createDom_=function(){Blockly.CollapsibleToolboxCategory.superClass_.createDom_.call(this);var a=this.getChildToolboxItems();this.subcategoriesDiv_=this.createSubCategoriesDom_(a);Blockly.utils.aria.setRole(this.subcategoriesDiv_,Blockly.utils.aria.Role.GROUP);this.htmlDiv_.appendChild(this.subcategoriesDiv_);return this.htmlDiv_};
Blockly.CollapsibleToolboxCategory.prototype.createIconDom_=function(){var a=document.createElement("span");this.parentToolbox_.isHorizontal()||(Blockly.utils.dom.addClass(a,this.cssConfig_.icon),a.style.visibility="visible");a.style.display="inline-block";return a};
Blockly.CollapsibleToolboxCategory.prototype.createSubCategoriesDom_=function(a){var b=document.createElement("div");Blockly.utils.dom.addClass(b,this.cssConfig_.contents);for(var c=0;c<a.length;c++){var d=a[c];d.init();var e=d.getDiv();b.appendChild(e);d.getClickTarget&&d.getClickTarget().setAttribute("id",d.getId())}return b};
Blockly.CollapsibleToolboxCategory.prototype.setExpanded=function(a){this.expanded_!=a&&((this.expanded_=a)?(this.subcategoriesDiv_.style.display="block",this.openIcon_(this.iconDom_)):(this.subcategoriesDiv_.style.display="none",this.closeIcon_(this.iconDom_)),Blockly.utils.aria.setState(this.htmlDiv_,Blockly.utils.aria.State.EXPANDED,a),this.parentToolbox_.handleToolboxItemResize())};
Blockly.CollapsibleToolboxCategory.prototype.setVisible_=function(a){this.htmlDiv_.style.display=a?"block":"none";for(var b=0,c;c=this.getChildToolboxItems()[b];b++)c.setVisible_(a);this.isHidden_=!a;this.parentToolbox_.getSelectedItem()==this&&this.parentToolbox_.clearSelection()};Blockly.CollapsibleToolboxCategory.prototype.isExpanded=function(){return this.expanded_};Blockly.CollapsibleToolboxCategory.prototype.isCollapsible=function(){return!0};
Blockly.CollapsibleToolboxCategory.prototype.onClick=function(a){this.toggleExpanded()};Blockly.CollapsibleToolboxCategory.prototype.toggleExpanded=function(){this.setExpanded(!this.expanded_)};Blockly.CollapsibleToolboxCategory.prototype.getDiv=function(){return this.htmlDiv_};Blockly.CollapsibleToolboxCategory.prototype.getChildToolboxItems=function(){return this.toolboxItems_};Blockly.registry.register(Blockly.registry.Type.TOOLBOX_ITEM,Blockly.CollapsibleToolboxCategory.registrationName,Blockly.CollapsibleToolboxCategory);Blockly.Events.ToolboxItemSelect=function(a,b,c){Blockly.Events.ToolboxItemSelect.superClass_.constructor.call(this,c);this.oldItem=a;this.newItem=b};Blockly.utils.object.inherits(Blockly.Events.ToolboxItemSelect,Blockly.Events.UiBase);Blockly.Events.ToolboxItemSelect.prototype.type=Blockly.Events.TOOLBOX_ITEM_SELECT;Blockly.Events.ToolboxItemSelect.prototype.toJson=function(){var a=Blockly.Events.ToolboxItemSelect.superClass_.toJson.call(this);a.oldItem=this.oldItem;a.newItem=this.newItem;return a};
Blockly.Events.ToolboxItemSelect.prototype.fromJson=function(a){Blockly.Events.ToolboxItemSelect.superClass_.fromJson.call(this,a);this.oldItem=a.oldItem;this.newItem=a.newItem};Blockly.registry.register(Blockly.registry.Type.EVENT,Blockly.Events.TOOLBOX_ITEM_SELECT,Blockly.Events.ToolboxItemSelect);Blockly.Toolbox=function(a){this.workspace_=a;this.toolboxDef_=a.options.languageTree||{contents:[]};this.horizontalLayout_=a.options.horizontalLayout;this.contentsDiv_=this.HtmlDiv=null;this.contents_=[];this.height_=this.width_=0;this.RTL=a.options.RTL;this.flyout_=null;this.contentMap_={};this.toolboxPosition=a.options.toolboxPosition;this.previouslySelectedItem_=this.selectedItem_=null;this.boundEvents_=[]};Blockly.Toolbox.prototype.onShortcut=function(a){return!1};
Blockly.Toolbox.prototype.init=function(){var a=this.workspace_,b=a.getParentSvg();this.flyout_=this.createFlyout_();this.HtmlDiv=this.createDom_(this.workspace_);Blockly.utils.dom.insertAfter(this.flyout_.createDom("svg"),b);this.flyout_.init(a);this.render(this.toolboxDef_);a=a.getThemeManager();a.subscribe(this.HtmlDiv,"toolboxBackgroundColour","background-color");a.subscribe(this.HtmlDiv,"toolboxForegroundColour","color")};
Blockly.Toolbox.prototype.createDom_=function(a){a=a.getParentSvg();var b=this.createContainer_();this.contentsDiv_=this.createContentsContainer_();this.contentsDiv_.tabIndex=0;Blockly.utils.aria.setRole(this.contentsDiv_,Blockly.utils.aria.Role.TREE);b.appendChild(this.contentsDiv_);a.parentNode.insertBefore(b,a);this.attachEvents_(b,this.contentsDiv_);return b};
Blockly.Toolbox.prototype.createContainer_=function(){var a=document.createElement("div");a.setAttribute("layout",this.isHorizontal()?"h":"v");Blockly.utils.dom.addClass(a,"blocklyToolboxDiv");Blockly.utils.dom.addClass(a,"blocklyNonSelectable");a.setAttribute("dir",this.RTL?"RTL":"LTR");return a};
Blockly.Toolbox.prototype.createContentsContainer_=function(){var a=document.createElement("div");Blockly.utils.dom.addClass(a,"blocklyToolboxContents");this.isHorizontal()&&(a.style.flexDirection="row");return a};Blockly.Toolbox.prototype.attachEvents_=function(a,b){a=Blockly.browserEvents.conditionalBind(a,"click",this,this.onClick_,!1,!0);this.boundEvents_.push(a);b=Blockly.browserEvents.conditionalBind(b,"keydown",this,this.onKeyDown_,!1,!0);this.boundEvents_.push(b)};
Blockly.Toolbox.prototype.onClick_=function(a){if(Blockly.utils.isRightButton(a)||a.target==this.HtmlDiv)Blockly.hideChaff(!1);else{var b=a.target.getAttribute("id");b&&(b=this.getToolboxItemById(b),b.isSelectable()&&(this.setSelectedItem(b),b.onClick(a)));Blockly.hideChaff(!0)}Blockly.Touch.clearTouchIdentifier()};
Blockly.Toolbox.prototype.onKeyDown_=function(a){var b=!1;switch(a.keyCode){case Blockly.utils.KeyCodes.DOWN:b=this.selectNext_();break;case Blockly.utils.KeyCodes.UP:b=this.selectPrevious_();break;case Blockly.utils.KeyCodes.LEFT:b=this.selectParent_();break;case Blockly.utils.KeyCodes.RIGHT:b=this.selectChild_();break;case Blockly.utils.KeyCodes.ENTER:case Blockly.utils.KeyCodes.SPACE:this.selectedItem_&&this.selectedItem_.isCollapsible()&&(this.selectedItem_.toggleExpanded(),b=!0);break;default:b=
!1}!b&&this.selectedItem_&&this.selectedItem_.onKeyDown&&(b=this.selectedItem_.onKeyDown(a));b&&a.preventDefault()};
Blockly.Toolbox.prototype.createFlyout_=function(){var a=this.workspace_,b=new Blockly.Options({parentWorkspace:a,rtl:a.RTL,oneBasedIndex:a.options.oneBasedIndex,horizontalLayout:a.horizontalLayout,renderer:a.options.renderer,rendererOverrides:a.options.rendererOverrides,move:{scrollbars:!0}});b.toolboxPosition=a.options.toolboxPosition;return new (a.horizontalLayout?Blockly.registry.getClassFromOptions(Blockly.registry.Type.FLYOUTS_HORIZONTAL_TOOLBOX,a.options,!0):Blockly.registry.getClassFromOptions(Blockly.registry.Type.FLYOUTS_VERTICAL_TOOLBOX,
a.options,!0))(b)};Blockly.Toolbox.prototype.render=function(a){this.toolboxDef_=a;for(var b=0;b<this.contents_.length;b++){var c=this.contents_[b];c&&c.dispose()}this.contents_=[];this.contentMap_={};this.renderContents_(a.contents);this.position()};Blockly.Toolbox.prototype.renderContents_=function(a){for(var b=document.createDocumentFragment(),c=0,d;d=a[c];c++)this.createToolboxItem_(d,b);this.contentsDiv_.appendChild(b)};
Blockly.Toolbox.prototype.createToolboxItem_=function(a,b){var c=a.kind;"CATEGORY"==c.toUpperCase()&&Blockly.utils.toolbox.isCategoryCollapsible(a)&&(c=Blockly.CollapsibleToolboxCategory.registrationName);if(c=Blockly.registry.getClass(Blockly.registry.Type.TOOLBOX_ITEM,c.toLowerCase()))a=new c(a,this),this.addToolboxItem_(a),a.init(),(c=a.getDiv())&&b.appendChild(c),a.getClickTarget&&a.getClickTarget().setAttribute("id",a.getId())};
Blockly.Toolbox.prototype.addToolboxItem_=function(a){this.contents_.push(a);this.contentMap_[a.getId()]=a;if(a.isCollapsible())for(var b=0,c;c=a.getChildToolboxItems()[b];b++)this.addToolboxItem_(c)};Blockly.Toolbox.prototype.getToolboxItems=function(){return this.contents_};Blockly.Toolbox.prototype.addStyle=function(a){Blockly.utils.dom.addClass(this.HtmlDiv,a)};Blockly.Toolbox.prototype.removeStyle=function(a){Blockly.utils.dom.removeClass(this.HtmlDiv,a)};
Blockly.Toolbox.prototype.getClientRect=function(){if(!this.HtmlDiv)return null;var a=this.HtmlDiv.getBoundingClientRect(),b=a.top,c=b+a.height,d=a.left;a=d+a.width;return this.toolboxPosition==Blockly.utils.toolbox.Position.TOP?new Blockly.utils.Rect(-1E7,c,-1E7,1E7):this.toolboxPosition==Blockly.utils.toolbox.Position.BOTTOM?new Blockly.utils.Rect(b,1E7,-1E7,1E7):this.toolboxPosition==Blockly.utils.toolbox.Position.LEFT?new Blockly.utils.Rect(-1E7,1E7,-1E7,a):new Blockly.utils.Rect(-1E7,1E7,d,1E7)};
Blockly.Toolbox.prototype.getToolboxItemById=function(a){return this.contentMap_[a]};Blockly.Toolbox.prototype.getWidth=function(){return this.width_};Blockly.Toolbox.prototype.getHeight=function(){return this.height_};Blockly.Toolbox.prototype.getFlyout=function(){return this.flyout_};Blockly.Toolbox.prototype.getWorkspace=function(){return this.workspace_};Blockly.Toolbox.prototype.getSelectedItem=function(){return this.selectedItem_};Blockly.Toolbox.prototype.getPreviouslySelectedItem=function(){return this.previouslySelectedItem_};
Blockly.Toolbox.prototype.isHorizontal=function(){return this.horizontalLayout_};
Blockly.Toolbox.prototype.position=function(){var a=this.workspace_.getMetrics(),b=this.HtmlDiv;b&&(this.horizontalLayout_?(b.style.left="0",b.style.height="auto",b.style.width="100%",this.height_=b.offsetHeight,this.width_=a.viewWidth,this.toolboxPosition==Blockly.utils.toolbox.Position.TOP?b.style.top="0":b.style.bottom="0"):(this.toolboxPosition==Blockly.utils.toolbox.Position.RIGHT?b.style.right="0":b.style.left="0",b.style.height="100%",this.width_=b.offsetWidth,this.height_=a.viewHeight),this.flyout_.position())};
Blockly.Toolbox.prototype.handleToolboxItemResize=function(){var a=this.workspace_,b=this.HtmlDiv.getBoundingClientRect();a.translate(this.toolboxPosition==Blockly.utils.toolbox.Position.LEFT?a.scrollX+b.width:a.scrollX,this.toolboxPosition==Blockly.utils.toolbox.Position.TOP?a.scrollY+b.height:a.scrollY);Blockly.svgResize(a)};Blockly.Toolbox.prototype.clearSelection=function(){this.setSelectedItem(null)};
Blockly.Toolbox.prototype.refreshTheme=function(){for(var a=0;a<this.contents_.length;a++){var b=this.contents_[a];b.refreshTheme&&b.refreshTheme()}};Blockly.Toolbox.prototype.refreshSelection=function(){this.selectedItem_&&this.selectedItem_.isSelectable()&&this.selectedItem_.getContents().length&&this.flyout_.show(this.selectedItem_.getContents())};Blockly.Toolbox.prototype.setVisible=function(a){this.HtmlDiv.style.display=a?"block":"none"};
Blockly.Toolbox.prototype.setSelectedItem=function(a){var b=this.selectedItem_;!a&&!b||a&&!a.isSelectable()||(this.shouldDeselectItem_(b,a)&&null!=b&&this.deselectItem_(b),this.shouldSelectItem_(b,a)&&null!=a&&this.selectItem_(b,a),this.updateFlyout_(b,a),this.fireSelectEvent_(b,a))};Blockly.Toolbox.prototype.shouldDeselectItem_=function(a,b){return null!=a&&(!a.isCollapsible()||a!=b)};Blockly.Toolbox.prototype.shouldSelectItem_=function(a,b){return null!=b&&b!=a};
Blockly.Toolbox.prototype.deselectItem_=function(a){this.selectedItem_=null;this.previouslySelectedItem_=a;a.setSelected(!1);Blockly.utils.aria.setState(this.contentsDiv_,Blockly.utils.aria.State.ACTIVEDESCENDANT,"")};Blockly.Toolbox.prototype.selectItem_=function(a,b){this.selectedItem_=b;this.previouslySelectedItem_=a;b.setSelected(!0);Blockly.utils.aria.setState(this.contentsDiv_,Blockly.utils.aria.State.ACTIVEDESCENDANT,b.getId())};
Blockly.Toolbox.prototype.selectItemByPosition=function(a){-1<a&&a<this.contents_.length&&(a=this.contents_[a],a.isSelectable()&&this.setSelectedItem(a))};Blockly.Toolbox.prototype.updateFlyout_=function(a,b){(a!=b||b.isCollapsible())&&b&&b.getContents().length?(this.flyout_.show(b.getContents()),this.flyout_.scrollToStart()):this.flyout_.hide()};
Blockly.Toolbox.prototype.fireSelectEvent_=function(a,b){var c=a&&a.getName(),d=b&&b.getName();a==b&&(d=null);a=new (Blockly.Events.get(Blockly.Events.TOOLBOX_ITEM_SELECT))(c,d,this.workspace_.id);Blockly.Events.fire(a)};
Blockly.Toolbox.prototype.selectParent_=function(){return this.selectedItem_?this.selectedItem_.isCollapsible()&&this.selectedItem_.isExpanded()?(this.selectedItem_.setExpanded(!1),!0):this.selectedItem_.getParent()&&this.selectedItem_.getParent().isSelectable()?(this.setSelectedItem(this.selectedItem_.getParent()),!0):!1:!1};
Blockly.Toolbox.prototype.selectChild_=function(){if(!this.selectedItem_||!this.selectedItem_.isCollapsible())return!1;var a=this.selectedItem_;a.isExpanded()?this.selectNext_():a.setExpanded(!0);return!0};Blockly.Toolbox.prototype.selectNext_=function(){if(!this.selectedItem_)return!1;var a=this.contents_.indexOf(this.selectedItem_)+1;if(-1<a&&a<this.contents_.length){for(var b=this.contents_[a];b&&!b.isSelectable();)b=this.contents_[++a];if(b&&b.isSelectable())return this.setSelectedItem(b),!0}return!1};
Blockly.Toolbox.prototype.selectPrevious_=function(){if(!this.selectedItem_)return!1;var a=this.contents_.indexOf(this.selectedItem_)-1;if(-1<a&&a<this.contents_.length){for(var b=this.contents_[a];b&&!b.isSelectable();)b=this.contents_[--a];if(b&&b.isSelectable())return this.setSelectedItem(b),!0}return!1};
Blockly.Toolbox.prototype.dispose=function(){this.flyout_.dispose();for(var a=0;a<this.contents_.length;a++)this.contents_[a].dispose();for(a=0;a<this.boundEvents_.length;a++)Blockly.browserEvents.unbind(this.boundEvents_[a]);this.boundEvents_=[];this.contents_=[];this.workspace_.getThemeManager().unsubscribe(this.HtmlDiv);Blockly.utils.dom.removeNode(this.HtmlDiv)};
Blockly.Css.register([".blocklyToolboxDelete {",'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',"}",".blocklyToolboxGrab {",'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',"cursor: grabbing;","cursor: -webkit-grabbing;","}",".blocklyToolboxDiv {","background-color: #ddd;","overflow-x: visible;","overflow-y: auto;","padding: 4px 0 4px 0;","position: absolute;","z-index: 70;","-webkit-tap-highlight-color: transparent;","}",".blocklyToolboxContents {","display: flex;","flex-wrap: wrap;","flex-direction: column;",
"}",".blocklyToolboxContents:focus {","outline: none;","}"]);Blockly.registry.register(Blockly.registry.Type.TOOLBOX,Blockly.registry.DEFAULT,Blockly.Toolbox);Blockly.Events.TrashcanOpen=function(a,b){Blockly.Events.TrashcanOpen.superClass_.constructor.call(this,b);this.isOpen=a};Blockly.utils.object.inherits(Blockly.Events.TrashcanOpen,Blockly.Events.UiBase);Blockly.Events.TrashcanOpen.prototype.type=Blockly.Events.TRASHCAN_OPEN;Blockly.Events.TrashcanOpen.prototype.toJson=function(){var a=Blockly.Events.TrashcanOpen.superClass_.toJson.call(this);a.isOpen=this.isOpen;return a};
Blockly.Events.TrashcanOpen.prototype.fromJson=function(a){Blockly.Events.TrashcanOpen.superClass_.fromJson.call(this,a);this.isOpen=a.isOpen};Blockly.registry.register(Blockly.registry.Type.EVENT,Blockly.Events.TRASHCAN_OPEN,Blockly.Events.TrashcanOpen);Blockly.IPlugin=function(){};Blockly.IPositionable=function(){};Blockly.Trashcan=function(a){this.workspace_=a;this.contents_=[];this.flyout=null;0>=this.workspace_.options.maxTrashcanContents||(a=new Blockly.Options({scrollbars:!0,parentWorkspace:this.workspace_,rtl:this.workspace_.RTL,oneBasedIndex:this.workspace_.options.oneBasedIndex,renderer:this.workspace_.options.renderer,rendererOverrides:this.workspace_.options.rendererOverrides,move:{scrollbars:!0}}),this.workspace_.horizontalLayout?(a.toolboxPosition=this.workspace_.toolboxPosition==Blockly.utils.toolbox.Position.TOP?
Blockly.utils.toolbox.Position.BOTTOM:Blockly.utils.toolbox.Position.TOP,this.flyout=new (Blockly.registry.getClassFromOptions(Blockly.registry.Type.FLYOUTS_HORIZONTAL_TOOLBOX,this.workspace_.options,!0))(a)):(a.toolboxPosition=this.workspace_.toolboxPosition==Blockly.utils.toolbox.Position.RIGHT?Blockly.utils.toolbox.Position.LEFT:Blockly.utils.toolbox.Position.RIGHT,this.flyout=new (Blockly.registry.getClassFromOptions(Blockly.registry.Type.FLYOUTS_VERTICAL_TOOLBOX,this.workspace_.options,!0))(a)),
this.workspace_.addChangeListener(this.onDelete_.bind(this)))};Blockly.Trashcan.prototype.WIDTH_=47;Blockly.Trashcan.prototype.BODY_HEIGHT_=44;Blockly.Trashcan.prototype.LID_HEIGHT_=16;Blockly.Trashcan.prototype.MARGIN_BOTTOM_=20;Blockly.Trashcan.prototype.MARGIN_SIDE_=20;Blockly.Trashcan.prototype.MARGIN_HOTSPOT_=10;Blockly.Trashcan.prototype.SPRITE_LEFT_=0;Blockly.Trashcan.prototype.SPRITE_TOP_=32;Blockly.Trashcan.prototype.HAS_BLOCKS_LID_ANGLE_=.1;Blockly.Trashcan.ANIMATION_LENGTH_=80;
Blockly.Trashcan.ANIMATION_FRAMES_=4;Blockly.Trashcan.OPACITY_MIN_=.4;Blockly.Trashcan.OPACITY_MAX_=.8;Blockly.Trashcan.MAX_LID_ANGLE_=45;Blockly.Trashcan.prototype.isLidOpen=!1;Blockly.Trashcan.prototype.minOpenness_=0;Blockly.Trashcan.prototype.svgGroup_=null;Blockly.Trashcan.prototype.svgLid_=null;Blockly.Trashcan.prototype.lidTask_=0;Blockly.Trashcan.prototype.lidOpen_=0;Blockly.Trashcan.prototype.left_=0;Blockly.Trashcan.prototype.top_=0;
Blockly.Trashcan.prototype.createDom=function(){this.svgGroup_=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.G,{"class":"blocklyTrash"},null);var a=String(Math.random()).substring(2);var b=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.CLIPPATH,{id:"blocklyTrashBodyClipPath"+a},this.svgGroup_);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{width:this.WIDTH_,height:this.BODY_HEIGHT_,y:this.LID_HEIGHT_},b);var c=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.IMAGE,{width:Blockly.SPRITE.width,
x:-this.SPRITE_LEFT_,height:Blockly.SPRITE.height,y:-this.SPRITE_TOP_,"clip-path":"url(#blocklyTrashBodyClipPath"+a+")"},this.svgGroup_);c.setAttributeNS(Blockly.utils.dom.XLINK_NS,"xlink:href",this.workspace_.options.pathToMedia+Blockly.SPRITE.url);b=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.CLIPPATH,{id:"blocklyTrashLidClipPath"+a},this.svgGroup_);Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{width:this.WIDTH_,height:this.LID_HEIGHT_},b);this.svgLid_=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.IMAGE,
{width:Blockly.SPRITE.width,x:-this.SPRITE_LEFT_,height:Blockly.SPRITE.height,y:-this.SPRITE_TOP_,"clip-path":"url(#blocklyTrashLidClipPath"+a+")"},this.svgGroup_);this.svgLid_.setAttributeNS(Blockly.utils.dom.XLINK_NS,"xlink:href",this.workspace_.options.pathToMedia+Blockly.SPRITE.url);Blockly.browserEvents.bind(this.svgGroup_,"mousedown",this,this.blockMouseDownWhenOpenable_);Blockly.browserEvents.bind(this.svgGroup_,"mouseup",this,this.click);Blockly.browserEvents.bind(c,"mouseover",this,this.mouseOver_);
Blockly.browserEvents.bind(c,"mouseout",this,this.mouseOut_);this.animateLid_();return this.svgGroup_};Blockly.Trashcan.prototype.init=function(a){0<this.workspace_.options.maxTrashcanContents&&(Blockly.utils.dom.insertAfter(this.flyout.createDom(Blockly.utils.Svg.SVG),this.workspace_.getParentSvg()),this.flyout.init(this.workspace_));this.verticalSpacing_=this.MARGIN_BOTTOM_+a;this.setLidOpen(!1);return this.verticalSpacing_+this.BODY_HEIGHT_+this.LID_HEIGHT_};
Blockly.Trashcan.prototype.dispose=function(){this.svgGroup_&&(Blockly.utils.dom.removeNode(this.svgGroup_),this.svgGroup_=null);this.workspace_=this.svgLid_=null;clearTimeout(this.lidTask_)};Blockly.Trashcan.prototype.hasContents_=function(){return!!this.contents_.length};Blockly.Trashcan.prototype.contentsIsOpen=function(){return this.flyout.isVisible()};
Blockly.Trashcan.prototype.openFlyout=function(){if(!this.contentsIsOpen()){for(var a=[],b=0,c;c=this.contents_[b];b++)a[b]=Blockly.Xml.textToDom(c);this.flyout.show(a);this.fireUiEvent_(!0)}};Blockly.Trashcan.prototype.closeFlyout=function(){this.contentsIsOpen()&&(this.flyout.hide(),this.fireUiEvent_(!1))};Blockly.Trashcan.prototype.emptyContents=function(){this.hasContents_()&&(this.contents_.length=0,this.setMinOpenness_(0),this.closeFlyout())};
Blockly.Trashcan.prototype.position=function(a,b){if(this.verticalSpacing_){this.left_=a.toolboxMetrics.position==Blockly.utils.toolbox.Position.LEFT||this.workspace_.horizontalLayout&&!this.workspace_.RTL?a.viewMetrics.width+a.absoluteMetrics.left-this.WIDTH_-this.MARGIN_SIDE_-Blockly.Scrollbar.scrollbarThickness:this.MARGIN_SIDE_+Blockly.Scrollbar.scrollbarThickness;var c=this.BODY_HEIGHT_+this.LID_HEIGHT_,d=this.top_=a.absoluteMetrics.top+this.verticalSpacing_,e=a.absoluteMetrics.top+a.viewMetrics.height-
c-this.verticalSpacing_;this.top_=(a=a.toolboxMetrics.position!==Blockly.utils.toolbox.Position.BOTTOM)?e:d;for(var f=this.getBoundingRectangle(),g=0,h;h=b[g];g++)f.intersects(h)&&(this.top_=a?h.top-c-this.MARGIN_BOTTOM_:h.bottom+this.MARGIN_BOTTOM_,f=this.getBoundingRectangle(),g=-1);this.top_=Blockly.utils.math.clamp(d,this.top_,e);this.svgGroup_.setAttribute("transform","translate("+this.left_+","+this.top_+")")}};
Blockly.Trashcan.prototype.getBoundingRectangle=function(){return new Blockly.utils.Rect(this.top_,this.top_+this.BODY_HEIGHT_+this.LID_HEIGHT_,this.left_,this.left_+this.WIDTH_)};
Blockly.Trashcan.prototype.getClientRect=function(){if(!this.svgGroup_)return null;var a=this.svgGroup_.getBoundingClientRect(),b=a.top+this.SPRITE_TOP_-this.MARGIN_HOTSPOT_;a=a.left+this.SPRITE_LEFT_-this.MARGIN_HOTSPOT_;return new Blockly.utils.Rect(b,b+this.LID_HEIGHT_+this.BODY_HEIGHT_+2*this.MARGIN_HOTSPOT_,a,a+this.WIDTH_+2*this.MARGIN_HOTSPOT_)};Blockly.Trashcan.prototype.setLidOpen=function(a){this.isLidOpen!=a&&(clearTimeout(this.lidTask_),this.isLidOpen=a,this.animateLid_())};
Blockly.Trashcan.prototype.animateLid_=function(){var a=Blockly.Trashcan.ANIMATION_FRAMES_,b=1/(a+1);this.lidOpen_+=this.isLidOpen?b:-b;this.lidOpen_=Math.min(Math.max(this.lidOpen_,this.minOpenness_),1);this.setLidAngle_(this.lidOpen_*Blockly.Trashcan.MAX_LID_ANGLE_);b=Blockly.Trashcan.OPACITY_MIN_;this.svgGroup_.style.opacity=b+this.lidOpen_*(Blockly.Trashcan.OPACITY_MAX_-b);this.lidOpen_>this.minOpenness_&&1>this.lidOpen_&&(this.lidTask_=setTimeout(this.animateLid_.bind(this),Blockly.Trashcan.ANIMATION_LENGTH_/
a))};Blockly.Trashcan.prototype.setLidAngle_=function(a){var b=this.workspace_.toolboxPosition==Blockly.utils.toolbox.Position.RIGHT||this.workspace_.horizontalLayout&&this.workspace_.RTL;this.svgLid_.setAttribute("transform","rotate("+(b?-a:a)+","+(b?4:this.WIDTH_-4)+","+(this.LID_HEIGHT_-2)+")")};Blockly.Trashcan.prototype.setMinOpenness_=function(a){this.minOpenness_=a;this.isLidOpen||this.setLidAngle_(a*Blockly.Trashcan.MAX_LID_ANGLE_)};Blockly.Trashcan.prototype.closeLid=function(){this.setLidOpen(!1)};
Blockly.Trashcan.prototype.click=function(){this.hasContents_()&&this.openFlyout()};Blockly.Trashcan.prototype.fireUiEvent_=function(a){a=new (Blockly.Events.get(Blockly.Events.TRASHCAN_OPEN))(a,this.workspace_.id);Blockly.Events.fire(a)};Blockly.Trashcan.prototype.blockMouseDownWhenOpenable_=function(a){!this.contentsIsOpen()&&this.hasContents_()&&a.stopPropagation()};Blockly.Trashcan.prototype.mouseOver_=function(){this.hasContents_()&&this.setLidOpen(!0)};Blockly.Trashcan.prototype.mouseOut_=function(){this.setLidOpen(!1)};
Blockly.Trashcan.prototype.onDelete_=function(a){if(!(0>=this.workspace_.options.maxTrashcanContents)&&a.type==Blockly.Events.BLOCK_DELETE&&a.oldXml.tagName&&"shadow"!=a.oldXml.tagName.toLowerCase()&&(a=this.cleanBlockXML_(a.oldXml),-1==this.contents_.indexOf(a))){for(this.contents_.unshift(a);this.contents_.length>this.workspace_.options.maxTrashcanContents;)this.contents_.pop();this.setMinOpenness_(this.HAS_BLOCKS_LID_ANGLE_)}};
Blockly.Trashcan.prototype.cleanBlockXML_=function(a){for(var b=a=a.cloneNode(!0);b;){b.removeAttribute&&(b.removeAttribute("x"),b.removeAttribute("y"),b.removeAttribute("id"),b.removeAttribute("disabled"),"comment"==b.nodeName&&(b.removeAttribute("h"),b.removeAttribute("w"),b.removeAttribute("pinned")));var c=b.firstChild||b.nextSibling;if(!c)for(c=b.parentNode;c;){if(c.nextSibling){c=c.nextSibling;break}c=c.parentNode}b=c}return Blockly.Xml.domToText(a)};Blockly.VariablesDynamic={};Blockly.VariablesDynamic.onCreateVariableButtonClick_String=function(a){Blockly.Variables.createVariableButtonHandler(a.getTargetWorkspace(),void 0,"String")};Blockly.VariablesDynamic.onCreateVariableButtonClick_Number=function(a){Blockly.Variables.createVariableButtonHandler(a.getTargetWorkspace(),void 0,"Number")};Blockly.VariablesDynamic.onCreateVariableButtonClick_Colour=function(a){Blockly.Variables.createVariableButtonHandler(a.getTargetWorkspace(),void 0,"Colour")};
Blockly.VariablesDynamic.flyoutCategory=function(a){var b=[],c=document.createElement("button");c.setAttribute("text",Blockly.Msg.NEW_STRING_VARIABLE);c.setAttribute("callbackKey","CREATE_VARIABLE_STRING");b.push(c);c=document.createElement("button");c.setAttribute("text",Blockly.Msg.NEW_NUMBER_VARIABLE);c.setAttribute("callbackKey","CREATE_VARIABLE_NUMBER");b.push(c);c=document.createElement("button");c.setAttribute("text",Blockly.Msg.NEW_COLOUR_VARIABLE);c.setAttribute("callbackKey","CREATE_VARIABLE_COLOUR");
b.push(c);a.registerButtonCallback("CREATE_VARIABLE_STRING",Blockly.VariablesDynamic.onCreateVariableButtonClick_String);a.registerButtonCallback("CREATE_VARIABLE_NUMBER",Blockly.VariablesDynamic.onCreateVariableButtonClick_Number);a.registerButtonCallback("CREATE_VARIABLE_COLOUR",Blockly.VariablesDynamic.onCreateVariableButtonClick_Colour);a=Blockly.VariablesDynamic.flyoutCategoryBlocks(a);return b=b.concat(a)};
Blockly.VariablesDynamic.flyoutCategoryBlocks=function(a){a=a.getAllVariables();var b=[];if(0<a.length){if(Blockly.Blocks.variables_set_dynamic){var c=a[a.length-1],d=Blockly.utils.xml.createElement("block");d.setAttribute("type","variables_set_dynamic");d.setAttribute("gap",24);d.appendChild(Blockly.Variables.generateVariableFieldDom(c));b.push(d)}if(Blockly.Blocks.variables_get_dynamic){a.sort(Blockly.VariableModel.compareByName);c=0;for(var e;e=a[c];c++)d=Blockly.utils.xml.createElement("block"),
d.setAttribute("type","variables_get_dynamic"),d.setAttribute("gap",8),d.appendChild(Blockly.Variables.generateVariableFieldDom(e)),b.push(d)}}return b};Blockly.ZoomControls=function(a){this.workspace_=a;this.zoomResetGroup_=this.zoomOutGroup_=this.zoomInGroup_=this.verticalSpacing_=this.onZoomOutWrapper_=this.onZoomInWrapper_=this.onZoomResetWrapper_=null};Blockly.ZoomControls.prototype.WIDTH_=32;Blockly.ZoomControls.prototype.HEIGHT_=110;Blockly.ZoomControls.prototype.MARGIN_BOTTOM_=20;Blockly.ZoomControls.prototype.MARGIN_SIDE_=20;Blockly.ZoomControls.prototype.svgGroup_=null;Blockly.ZoomControls.prototype.left_=0;
Blockly.ZoomControls.prototype.top_=0;Blockly.ZoomControls.prototype.createDom=function(){this.svgGroup_=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.G,{},null);var a=String(Math.random()).substring(2);this.createZoomOutSvg_(a);this.createZoomInSvg_(a);this.workspace_.isMovable()&&this.createZoomResetSvg_(a);return this.svgGroup_};Blockly.ZoomControls.prototype.init=function(a){this.verticalSpacing_=this.MARGIN_BOTTOM_+a;return this.verticalSpacing_+this.HEIGHT_};
Blockly.ZoomControls.prototype.dispose=function(){this.svgGroup_&&Blockly.utils.dom.removeNode(this.svgGroup_);this.onZoomResetWrapper_&&Blockly.browserEvents.unbind(this.onZoomResetWrapper_);this.onZoomInWrapper_&&Blockly.browserEvents.unbind(this.onZoomInWrapper_);this.onZoomOutWrapper_&&Blockly.browserEvents.unbind(this.onZoomOutWrapper_)};Blockly.ZoomControls.prototype.getBoundingRectangle=function(){return new Blockly.utils.Rect(this.top_,this.top_+this.HEIGHT_,this.left_,this.left_+this.WIDTH_)};
Blockly.ZoomControls.prototype.position=function(a,b){if(this.verticalSpacing_){this.left_=a.toolboxMetrics.position==Blockly.utils.toolbox.Position.LEFT||this.workspace_.horizontalLayout&&!this.workspace_.RTL?a.viewMetrics.width+a.absoluteMetrics.left-this.WIDTH_-this.MARGIN_SIDE_-Blockly.Scrollbar.scroll