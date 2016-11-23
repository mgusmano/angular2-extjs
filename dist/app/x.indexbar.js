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
var xindexbarMetaData = (function () {
    function xindexbarMetaData() {
    }
    xindexbarMetaData.XTYPE = 'indexbar';
    xindexbarMetaData.INPUTNAMES = [
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
        'direction',
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
        'letters',
        'listeners',
        'listPrefix',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'padding',
        'parentList',
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
        'fittoparent',
        'config'
    ];
    xindexbarMetaData.OUTPUTS = [
        { name: 'added', parameters: 'indexbar,container,index' },
        { name: 'beforehide', parameters: 'indexbar' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'indexbar' },
        { name: 'beforetofront', parameters: 'indexbar' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'indexbar' },
        { name: 'floatingchange', parameters: 'indexbar,positioned' },
        { name: 'fullscreen', parameters: 'indexbar' },
        { name: 'hide', parameters: 'indexbar' },
        { name: 'index', parameters: 'indexbar,html,target' },
        { name: 'initialize', parameters: 'indexbar' },
        { name: 'moved', parameters: 'indexbar,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'indexbar,positioned' },
        { name: 'removed', parameters: 'indexbar,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'indexbar' },
        { name: 'tofront', parameters: 'indexbar' },
        { name: 'updatedata', parameters: 'indexbar,newData' },
        { name: 'ready', parameters: '' }
    ];
    xindexbarMetaData.OUTPUTNAMES = [
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
        'index',
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
    return xindexbarMetaData;
}());
var xindexbar = (function (_super) {
    __extends(xindexbar, _super);
    function xindexbar(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xindexbarMetaData);
    }
    xindexbar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xindexbar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xindexbarMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xindexbar.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xindexbar.prototype, "dynamicRef", void 0);
    xindexbar = __decorate([
        core_1.Component({
            selector: 'x-' + xindexbarMetaData.XTYPE,
            inputs: xindexbarMetaData.INPUTNAMES,
            outputs: xindexbarMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xindexbar; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xindexbar);
    return xindexbar;
}(x_base_1.xbase));
exports.xindexbar = xindexbar;
