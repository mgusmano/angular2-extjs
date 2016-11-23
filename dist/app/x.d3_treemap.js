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
var xd3_treemapMetaData = (function () {
    function xd3_treemapMetaData() {
    }
    xd3_treemapMetaData.XTYPE = 'd3-treemap';
    xd3_treemapMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'busyLayoutText',
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
        'expandEventName',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'hierarchyCls',
        'html',
        'id',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'leafTile',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'nodeChildren',
        'nodeClass',
        'nodeKey',
        'nodeText',
        'nodeTransform',
        'nodeValue',
        'noSizeLayout',
        'padding',
        'parentTile',
        'plugins',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderLinks',
        'renderTo',
        'right',
        'rootVisible',
        'scrollable',
        'selectEventName',
        'selection',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'size',
        'sorter',
        'sticky',
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
        'fittoparent',
        'config'
    ];
    xd3_treemapMetaData.OUTPUTS = [
        { name: 'added', parameters: 'd3-treemap,container,index' },
        { name: 'beforehide', parameters: 'd3-treemap' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'd3-treemap' },
        { name: 'beforetofront', parameters: 'd3-treemap' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'd3-treemap' },
        { name: 'floatingchange', parameters: 'd3-treemap,positioned' },
        { name: 'fullscreen', parameters: 'd3-treemap' },
        { name: 'hide', parameters: 'd3-treemap' },
        { name: 'initialize', parameters: 'd3-treemap' },
        { name: 'moved', parameters: 'd3-treemap,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'd3-treemap,positioned' },
        { name: 'removed', parameters: 'd3-treemap,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'sceneresize', parameters: 'component,scene,size' },
        { name: 'scenesetup', parameters: 'component,scene' },
        { name: 'show', parameters: 'd3-treemap' },
        { name: 'tofront', parameters: 'd3-treemap' },
        { name: 'updatedata', parameters: 'd3-treemap,newData' },
        { name: 'ready', parameters: '' }
    ];
    xd3_treemapMetaData.OUTPUTNAMES = [
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
    return xd3_treemapMetaData;
}());
var xd3_treemap = (function (_super) {
    __extends(xd3_treemap, _super);
    function xd3_treemap(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xd3_treemapMetaData);
    }
    xd3_treemap.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xd3_treemap.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xd3_treemapMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xd3_treemap.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xd3_treemap.prototype, "dynamicRef", void 0);
    xd3_treemap = __decorate([
        core_1.Component({
            selector: 'x-' + xd3_treemapMetaData.XTYPE,
            inputs: xd3_treemapMetaData.INPUTNAMES,
            outputs: xd3_treemapMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xd3_treemap; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xd3_treemap);
    return xd3_treemap;
}(x_base_1.xbase));
exports.xd3_treemap = xd3_treemap;
