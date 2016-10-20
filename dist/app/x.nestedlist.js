"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var x_base_1 = require('./x.base');
var xnestedlistMetaData = (function () {
    function xnestedlistMetaData() {
    }
    xnestedlistMetaData.XTYPE = 'nestedlist';
    xnestedlistMetaData.INPUTNAMES = [
        'activeItem',
        'allowDeselect',
        'alwaysOnTop',
        'autoDestroy',
        'axisLock',
        'backButton',
        'backText',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'cardSwitchAnimation',
        'centered',
        'cls',
        'contentEl',
        'control',
        'controller',
        'data',
        'defaultListenerScope',
        'defaults',
        'defaultType',
        'detailCard',
        'detailContainer',
        'disabled',
        'displayField',
        'docked',
        'draggable',
        'emptyText',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'itemHeight',
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'lastActiveList',
        'lastNode',
        'layout',
        'left',
        'listConfig',
        'listeners',
        'loadingText',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'onItemDisclosure',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'referenceHolder',
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'store',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'title',
        'toFrontOnShow',
        'toolbar',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'updateTitleText',
        'useBodyElement',
        'userCls',
        'useSimpleItems',
        'useTitleAsBackText',
        'useToolbar',
        'variableHeights',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xnestedlistMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,nestedlist,oldActiveItem' },
        { name: 'add', parameters: 'nestedlist,item,index' },
        { name: 'added', parameters: 'nestedlist,container,index' },
        { name: 'back', parameters: 'nestedlist,node,lastActiveList,detailCardActive' },
        { name: 'beforehide', parameters: 'nestedlist' },
        { name: 'beforeload', parameters: 'nestedlist,store,operation' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeselectionchange', parameters: 'nestedlist,list,node,selections' },
        { name: 'beforeshow', parameters: 'nestedlist' },
        { name: 'beforetofront', parameters: 'nestedlist' },
        { name: 'containertap', parameters: 'nestedlist,list,e' },
        { name: 'deactivate', parameters: 'oldActiveItem,nestedlist,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'nestedlist' },
        { name: 'floatingchange', parameters: 'nestedlist,positioned' },
        { name: 'fullscreen', parameters: 'nestedlist' },
        { name: 'hide', parameters: 'nestedlist' },
        { name: 'initialize', parameters: 'nestedlist' },
        { name: 'itemdoubletap', parameters: 'nestedlist,list,index,target,record,e' },
        { name: 'itemtap', parameters: 'nestedlist,list,index,target,record,e' },
        { name: 'leafitemtap', parameters: 'nestedlist,list,index,target,record,e' },
        { name: 'listchange', parameters: 'nestedlist,listitem' },
        { name: 'load', parameters: 'nestedlist,store,records,successful,operation' },
        { name: 'move', parameters: 'nestedlist,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'nestedlist,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'nestedlist,positioned' },
        { name: 'remove', parameters: 'nestedlist,item,index' },
        { name: 'removed', parameters: 'nestedlist,container,index' },
        { name: 'renderedchange', parameters: 'nestedlist,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'selectionchange', parameters: 'nestedlist,list,selections' },
        { name: 'show', parameters: 'nestedlist' },
        { name: 'tofront', parameters: 'nestedlist' },
        { name: 'updatedata', parameters: 'nestedlist,newData' },
        { name: 'ready', parameters: '' }
    ];
    xnestedlistMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'back',
        'beforehide',
        'beforeload',
        'beforeorientationchange',
        'beforeselectionchange',
        'beforeshow',
        'beforetofront',
        'containertap',
        'deactivate',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'itemdoubletap',
        'itemtap',
        'leafitemtap',
        'listchange',
        'load',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'selectionchange',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xnestedlistMetaData;
}());
var xnestedlist = (function (_super) {
    __extends(xnestedlist, _super);
    function xnestedlist(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xnestedlistMetaData);
    }
    xnestedlist.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xnestedlist.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xnestedlistMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xnestedlist.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xnestedlist.prototype, "dynamicRef", void 0);
    xnestedlist = __decorate([
        core_1.Component({
            selector: 'x-' + xnestedlistMetaData.XTYPE,
            inputs: xnestedlistMetaData.INPUTNAMES,
            outputs: xnestedlistMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xnestedlist; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xnestedlist);
    return xnestedlist;
}(x_base_1.xbase));
exports.xnestedlist = xnestedlist;
