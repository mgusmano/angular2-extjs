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
var xheadercontainerMetaData = (function () {
    function xheadercontainerMetaData() {
    }
    xheadercontainerMetaData.XTYPE = 'headercontainer';
    xheadercontainerMetaData.INPUTNAMES = [
        'activeItem',
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
        'defaultColumnUI',
        'defaultListenerScope',
        'defaults',
        'defaultType',
        'disabled',
        'docked',
        'draggable',
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
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'left',
        'listeners',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
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
        'sortable',
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
        'twoWayBindable',
        'ui',
        'useBodyElement',
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
    xheadercontainerMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,headercontainer,oldActiveItem' },
        { name: 'add', parameters: 'headercontainer,item,index' },
        { name: 'added', parameters: 'headercontainer,container,index' },
        { name: 'beforehide', parameters: 'headercontainer' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'headercontainer' },
        { name: 'beforetofront', parameters: 'headercontainer' },
        { name: 'deactivate', parameters: 'oldActiveItem,headercontainer,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'headercontainer' },
        { name: 'floatingchange', parameters: 'headercontainer,positioned' },
        { name: 'fullscreen', parameters: 'headercontainer' },
        { name: 'hide', parameters: 'headercontainer' },
        { name: 'initialize', parameters: 'headercontainer' },
        { name: 'move', parameters: 'headercontainer,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'headercontainer,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'headercontainer,positioned' },
        { name: 'remove', parameters: 'headercontainer,item,index' },
        { name: 'removed', parameters: 'headercontainer,container,index' },
        { name: 'renderedchange', parameters: 'headercontainer,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'headercontainer' },
        { name: 'tofront', parameters: 'headercontainer' },
        { name: 'updatedata', parameters: 'headercontainer,newData' },
        { name: 'ready', parameters: '' }
    ];
    xheadercontainerMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'deactivate',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xheadercontainerMetaData;
}());
var xheadercontainer = (function (_super) {
    __extends(xheadercontainer, _super);
    function xheadercontainer(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xheadercontainerMetaData);
    }
    xheadercontainer.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xheadercontainer.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xheadercontainerMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xheadercontainer.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xheadercontainer.prototype, "dynamicRef", void 0);
    xheadercontainer = __decorate([
        core_1.Component({
            selector: 'x-' + xheadercontainerMetaData.XTYPE,
            inputs: xheadercontainerMetaData.INPUTNAMES,
            outputs: xheadercontainerMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xheadercontainer; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xheadercontainer);
    return xheadercontainer;
}(x_base_1.xbase));
exports.xheadercontainer = xheadercontainer;
