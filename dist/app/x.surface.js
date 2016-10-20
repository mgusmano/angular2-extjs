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
var xsurfaceMetaData = (function () {
    function xsurfaceMetaData() {
    }
    xsurfaceMetaData.XTYPE = 'surface';
    xsurfaceMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'background',
        'baseCls',
        'bind',
        'border',
        'cls',
        'controller',
        'defaultListenerScope',
        'dirty',
        'flex',
        'flipRtlText',
        'floated',
        'height',
        'hidden',
        'id',
        'itemId',
        'items',
        'listeners',
        'plugins',
        'publishes',
        'rect',
        'reference',
        'relative',
        'session',
        'shadow',
        'shim',
        'style',
        'toFrontOnShow',
        'touchAction',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'viewModel',
        'width',
        'x',
        'y',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xsurfaceMetaData.OUTPUTS = [
        { name: 'beforetofront', parameters: 'surface' },
        { name: 'tofront', parameters: 'surface' },
        { name: 'ready', parameters: '' }
    ];
    xsurfaceMetaData.OUTPUTNAMES = [
        'beforetofront',
        'tofront',
        'ready'
    ];
    return xsurfaceMetaData;
}());
var xsurface = (function (_super) {
    __extends(xsurface, _super);
    function xsurface(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xsurfaceMetaData);
    }
    xsurface.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xsurface.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xsurfaceMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xsurface.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xsurface.prototype, "dynamicRef", void 0);
    xsurface = __decorate([
        core_1.Component({
            selector: 'x-' + xsurfaceMetaData.XTYPE,
            inputs: xsurfaceMetaData.INPUTNAMES,
            outputs: xsurfaceMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xsurface; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xsurface);
    return xsurface;
}(x_base_1.xbase));
exports.xsurface = xsurface;
