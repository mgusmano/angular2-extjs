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
var xspacerMetaData = (function () {
    function xspacerMetaData() {
    }
    xspacerMetaData.XTYPE = 'spacer';
    xspacerMetaData.INPUTNAMES = [
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
    xspacerMetaData.OUTPUTS = [
        { name: 'added', parameters: 'spacer,container,index' },
        { name: 'beforehide', parameters: 'spacer' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'spacer' },
        { name: 'beforetofront', parameters: 'spacer' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'spacer' },
        { name: 'floatingchange', parameters: 'spacer,positioned' },
        { name: 'fullscreen', parameters: 'spacer' },
        { name: 'hide', parameters: 'spacer' },
        { name: 'initialize', parameters: 'spacer' },
        { name: 'moved', parameters: 'spacer,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'spacer,positioned' },
        { name: 'removed', parameters: 'spacer,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'spacer' },
        { name: 'tofront', parameters: 'spacer' },
        { name: 'updatedata', parameters: 'spacer,newData' },
        { name: 'ready', parameters: '' }
    ];
    xspacerMetaData.OUTPUTNAMES = [
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
        'tofront',
        'updatedata',
        'ready'
    ];
    return xspacerMetaData;
}());
var xspacer = (function (_super) {
    __extends(xspacer, _super);
    function xspacer(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xspacerMetaData);
    }
    xspacer.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xspacer.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xspacerMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xspacer.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xspacer.prototype, "dynamicRef", void 0);
    xspacer = __decorate([
        core_1.Component({
            selector: 'x-' + xspacerMetaData.XTYPE,
            inputs: xspacerMetaData.INPUTNAMES,
            outputs: xspacerMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xspacer; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xspacer);
    return xspacer;
}(x_base_1.xbase));
exports.xspacer = xspacer;
