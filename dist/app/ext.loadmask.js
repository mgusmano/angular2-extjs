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
var ext_base_1 = require('./ext.base');
var extloadmaskMetaData = (function () {
    function extloadmaskMetaData() {
    }
    extloadmaskMetaData.XTYPE = 'loadmask';
    extloadmaskMetaData.INPUTNAMES = [
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
        'indicator',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'message',
        'messageCls',
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
    extloadmaskMetaData.OUTPUTS = [
        { name: 'added', parameters: 'loadmask,container,index' },
        { name: 'beforehide', parameters: 'loadmask' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'loadmask' },
        { name: 'beforetofront', parameters: 'loadmask' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'loadmask' },
        { name: 'floatingchange', parameters: 'loadmask,positioned' },
        { name: 'fullscreen', parameters: 'loadmask' },
        { name: 'hide', parameters: 'loadmask' },
        { name: 'initialize', parameters: 'loadmask' },
        { name: 'moved', parameters: 'loadmask,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'loadmask,positioned' },
        { name: 'removed', parameters: 'loadmask,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'loadmask' },
        { name: 'tap', parameters: 'loadmask,e' },
        { name: 'tofront', parameters: 'loadmask' },
        { name: 'updatedata', parameters: 'loadmask,newData' },
        { name: 'ready', parameters: '' }
    ];
    extloadmaskMetaData.OUTPUTNAMES = [
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
    return extloadmaskMetaData;
}());
var extloadmask = (function (_super) {
    __extends(extloadmask, _super);
    function extloadmask(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extloadmaskMetaData);
    }
    extloadmask.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extloadmask.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extloadmaskMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extloadmask.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extloadmask.prototype, "dynamicRef", void 0);
    extloadmask = __decorate([
        core_1.Component({
            selector: 'ext-' + extloadmaskMetaData.XTYPE,
            inputs: extloadmaskMetaData.INPUTNAMES,
            outputs: extloadmaskMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extloadmask; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extloadmask);
    return extloadmask;
}(ext_base_1.extbase));
exports.extloadmask = extloadmask;
