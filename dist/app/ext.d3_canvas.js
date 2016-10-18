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
var extd3_canvasMetaData = (function () {
    function extd3_canvasMetaData() {
    }
    extd3_canvasMetaData.XTYPE = 'd3-canvas';
    extd3_canvasMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'cls',
        'componentCls',
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
        'hdpi',
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
        'size',
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
    extd3_canvasMetaData.OUTPUTS = [
        { name: 'added', parameters: 'd3-canvas,container,index' },
        { name: 'beforehide', parameters: 'd3-canvas' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'd3-canvas' },
        { name: 'beforetofront', parameters: 'd3-canvas' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'd3-canvas' },
        { name: 'floatingchange', parameters: 'd3-canvas,positioned' },
        { name: 'fullscreen', parameters: 'd3-canvas' },
        { name: 'hide', parameters: 'd3-canvas' },
        { name: 'initialize', parameters: 'd3-canvas' },
        { name: 'moved', parameters: 'd3-canvas,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'd3-canvas,positioned' },
        { name: 'removed', parameters: 'd3-canvas,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'sceneresize', parameters: 'component,canvas,size' },
        { name: 'show', parameters: 'd3-canvas' },
        { name: 'tofront', parameters: 'd3-canvas' },
        { name: 'updatedata', parameters: 'd3-canvas,newData' },
        { name: 'ready', parameters: '' }
    ];
    extd3_canvasMetaData.OUTPUTNAMES = [
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
        'sceneresize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return extd3_canvasMetaData;
}());
var extd3_canvas = (function (_super) {
    __extends(extd3_canvas, _super);
    function extd3_canvas(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extd3_canvasMetaData);
    }
    extd3_canvas.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extd3_canvas.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extd3_canvasMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extd3_canvas.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extd3_canvas.prototype, "dynamicRef", void 0);
    extd3_canvas = __decorate([
        core_1.Component({
            selector: 'ext-' + extd3_canvasMetaData.XTYPE,
            inputs: extd3_canvasMetaData.INPUTNAMES,
            outputs: extd3_canvasMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extd3_canvas; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extd3_canvas);
    return extd3_canvas;
}(ext_base_1.extbase));
exports.extd3_canvas = extd3_canvas;
