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
var xmaskMetaData = (function () {
    function xmaskMetaData() {
    }
    xmaskMetaData.XTYPE = 'mask';
    xmaskMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'cls',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
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
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
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
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
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
        'transparent',
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
    xmaskMetaData.OUTPUTS = [
        { name: 'added', parameters: 'mask,container,index' },
        { name: 'beforehide', parameters: 'mask' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'mask' },
        { name: 'beforetofront', parameters: 'mask' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'mask' },
        { name: 'floatingchange', parameters: 'mask,positioned' },
        { name: 'fullscreen', parameters: 'mask' },
        { name: 'hide', parameters: 'mask' },
        { name: 'initialize', parameters: 'mask' },
        { name: 'moved', parameters: 'mask,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'mask,positioned' },
        { name: 'removed', parameters: 'mask,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'mask' },
        { name: 'tap', parameters: 'mask,e' },
        { name: 'tofront', parameters: 'mask' },
        { name: 'updatedata', parameters: 'mask,newData' },
        { name: 'ready', parameters: '' }
    ];
    xmaskMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'removed',
        'resize',
        'show',
        'tap',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xmaskMetaData;
}());
var xmask = (function (_super) {
    __extends(xmask, _super);
    function xmask(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xmaskMetaData);
    }
    xmask.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xmask.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xmaskMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xmask.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xmask.prototype, "dynamicRef", void 0);
    xmask = __decorate([
        core_1.Component({
            selector: 'x-' + xmaskMetaData.XTYPE,
            inputs: xmaskMetaData.INPUTNAMES,
            outputs: xmaskMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xmask; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xmask);
    return xmask;
}(x_base_1.xbase));
exports.xmask = xmask;
