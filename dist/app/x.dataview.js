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
var xdataviewMetaData = (function () {
    function xdataviewMetaData() {
    }
    xdataviewMetaData.XTYPE = 'dataview';
    xdataviewMetaData.INPUTNAMES = [
        'activeItem',
        'allowDeselect',
        'alwaysOnTop',
        'autoDestroy',
        'axisLock',
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
        'deferEmptyText',
        'deselectOnContainerClick',
        'disabled',
        'disableSelection',
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
        'inline',
        'itemCls',
        'itemConfig',
        'itemId',
        'items',
        'itemTpl',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'lastFocused',
        'lastSelected',
        'layout',
        'left',
        'listeners',
        'loadingText',
        'locked',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxItemCache',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'mode',
        'padding',
        'plugins',
        'pressedDelay',
        'publishes',
        'record',
        'reference',
        'referenceHolder',
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'scrollToTopOnRefresh',
        'selection',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'store',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggerCtEvent',
        'triggerEvent',
        'twoWayBindable',
        'ui',
        'useBodyElement',
        'useComponents',
        'userCls',
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
    xdataviewMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,dataview,oldActiveItem' },
        { name: 'add', parameters: '' },
        { name: 'added', parameters: 'dataview,container,index' },
        { name: 'beforehide', parameters: 'dataview' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeselectionchange', parameters: 'dataview' },
        { name: 'beforeshow', parameters: 'dataview' },
        { name: 'beforetofront', parameters: 'dataview' },
        { name: 'containertap', parameters: '' },
        { name: 'deactivate', parameters: 'oldActiveItem,dataview,newActiveItem' },
        { name: 'deselect', parameters: 'dataview,record,supressed' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'dataview' },
        { name: 'floatingchange', parameters: 'dataview,positioned' },
        { name: 'fullscreen', parameters: 'dataview' },
        { name: 'hide', parameters: 'dataview' },
        { name: 'initialize', parameters: 'dataview' },
        { name: 'itemdoubletap', parameters: 'dataview,index,target,record,e' },
        { name: 'itemmouseenter', parameters: 'dataview,index,target,record,e' },
        { name: 'itemmouseleave', parameters: 'dataview,index,target,record,e' },
        { name: 'itemsingletap', parameters: 'dataview,index,target,record,e' },
        { name: 'itemswipe', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtap', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtaphold', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtouchend', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtouchmove', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtouchstart', parameters: 'dataview,index,target,record,e' },
        { name: 'move', parameters: '' },
        { name: 'moved', parameters: 'dataview,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'dataview,positioned' },
        { name: 'refresh', parameters: 'dataview' },
        { name: 'remove', parameters: '' },
        { name: 'removed', parameters: 'dataview,container,index' },
        { name: 'renderedchange', parameters: 'dataview,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'select', parameters: 'dataview,record' },
        { name: 'selectionchange', parameters: 'dataview,records' },
        { name: 'show', parameters: 'dataview' },
        { name: 'tofront', parameters: 'dataview' },
        { name: 'updatedata', parameters: 'dataview,newData' },
        { name: 'ready', parameters: '' }
    ];
    xdataviewMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeselectionchange',
        'beforeshow',
        'beforetofront',
        'containertap',
        'deactivate',
        'deselect',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'itemdoubletap',
        'itemmouseenter',
        'itemmouseleave',
        'itemsingletap',
        'itemswipe',
        'itemtap',
        'itemtaphold',
        'itemtouchend',
        'itemtouchmove',
        'itemtouchstart',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'refresh',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'select',
        'selectionchange',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xdataviewMetaData;
}());
var xdataview = (function (_super) {
    __extends(xdataview, _super);
    function xdataview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xdataviewMetaData);
    }
    xdataview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xdataview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xdataviewMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xdataview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xdataview.prototype, "dynamicRef", void 0);
    xdataview = __decorate([
        core_1.Component({
            selector: 'x-' + xdataviewMetaData.XTYPE,
            inputs: xdataviewMetaData.INPUTNAMES,
            outputs: xdataviewMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xdataview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xdataview);
    return xdataview;
}(x_base_1.xbase));
exports.xdataview = xdataview;
