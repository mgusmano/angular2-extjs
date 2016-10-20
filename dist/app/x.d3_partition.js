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
var xd3_partitionMetaData = (function () {
    function xd3_partitionMetaData() {
    }
    xd3_partitionMetaData.XTYPE = 'd3-partition';
    xd3_partitionMetaData.INPUTNAMES = [
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
    xd3_partitionMetaData.OUTPUTS = [
        { name: 'added', parameters: 'd3-partition,container,index' },
        { name: 'beforehide', parameters: 'd3-partition' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'd3-partition' },
        { name: 'beforetofront', parameters: 'd3-partition' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'd3-partition' },
        { name: 'floatingchange', parameters: 'd3-partition,positioned' },
        { name: 'fullscreen', parameters: 'd3-partition' },
        { name: 'hide', parameters: 'd3-partition' },
        { name: 'initialize', parameters: 'd3-partition' },
        { name: 'moved', parameters: 'd3-partition,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'd3-partition,positioned' },
        { name: 'removed', parameters: 'd3-partition,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'sceneresize', parameters: 'component,scene,size' },
        { name: 'scenesetup', parameters: 'component,scene' },
        { name: 'show', parameters: 'd3-partition' },
        { name: 'tofront', parameters: 'd3-partition' },
        { name: 'updatedata', parameters: 'd3-partition,newData' },
        { name: 'ready', parameters: '' }
    ];
    xd3_partitionMetaData.OUTPUTNAMES = [
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
    return xd3_partitionMetaData;
}());
var xd3_partition = (function (_super) {
    __extends(xd3_partition, _super);
    function xd3_partition(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xd3_partitionMetaData);
    }
    xd3_partition.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xd3_partition.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xd3_partitionMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xd3_partition.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xd3_partition.prototype, "dynamicRef", void 0);
    xd3_partition = __decorate([
        core_1.Component({
            selector: 'x-' + xd3_partitionMetaData.XTYPE,
            inputs: xd3_partitionMetaData.INPUTNAMES,
            outputs: xd3_partitionMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xd3_partition; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xd3_partition);
    return xd3_partition;
}(x_base_1.xbase));
exports.xd3_partition = xd3_partition;
