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
var xd3_heatmapMetaData = (function () {
    function xd3_heatmapMetaData() {
    }
    xd3_heatmapMetaData.XTYPE = 'd3-heatmap';
    xd3_heatmapMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'clipScene',
        'cls',
        'colorAxis',
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
        'labels',
        'left',
        'legend',
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
        'tiles',
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
        'xAxis',
        'xtype',
        'y',
        'yAxis',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fittoparent',
        'config'
    ];
    xd3_heatmapMetaData.OUTPUTS = [
        { name: 'added', parameters: 'd3-heatmap,container,index' },
        { name: 'beforehide', parameters: 'd3-heatmap' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'd3-heatmap' },
        { name: 'beforetofront', parameters: 'd3-heatmap' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'd3-heatmap' },
        { name: 'floatingchange', parameters: 'd3-heatmap,positioned' },
        { name: 'fullscreen', parameters: 'd3-heatmap' },
        { name: 'hide', parameters: 'd3-heatmap' },
        { name: 'initialize', parameters: 'd3-heatmap' },
        { name: 'moved', parameters: 'd3-heatmap,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'd3-heatmap,positioned' },
        { name: 'removed', parameters: 'd3-heatmap,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'sceneresize', parameters: 'component,scene,size' },
        { name: 'scenesetup', parameters: 'component,scene' },
        { name: 'show', parameters: 'd3-heatmap' },
        { name: 'tofront', parameters: 'd3-heatmap' },
        { name: 'updatedata', parameters: 'd3-heatmap,newData' },
        { name: 'ready', parameters: '' }
    ];
    xd3_heatmapMetaData.OUTPUTNAMES = [
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
        'scenesetup',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xd3_heatmapMetaData;
}());
var xd3_heatmap = (function (_super) {
    __extends(xd3_heatmap, _super);
    function xd3_heatmap(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xd3_heatmapMetaData);
    }
    xd3_heatmap.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xd3_heatmap.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xd3_heatmapMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xd3_heatmap.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xd3_heatmap.prototype, "dynamicRef", void 0);
    xd3_heatmap = __decorate([
        core_1.Component({
            selector: 'x-' + xd3_heatmapMetaData.XTYPE,
            inputs: xd3_heatmapMetaData.INPUTNAMES,
            outputs: xd3_heatmapMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xd3_heatmap; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xd3_heatmap);
    return xd3_heatmap;
}(x_base_1.xbase));
exports.xd3_heatmap = xd3_heatmap;
