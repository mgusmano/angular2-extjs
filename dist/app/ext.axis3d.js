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
var extaxis3dMetaData = (function () {
    function extaxis3dMetaData() {
    }
    extaxis3dMetaData.XTYPE = 'axis3d';
    extaxis3dMetaData.INPUTNAMES = [
        'adjustByMajorUnit',
        'background',
        'center',
        'chart',
        'depth',
        'fields',
        'floating',
        'grid',
        'hidden',
        'increment',
        'label',
        'labelInSpan',
        'layout',
        'length',
        'limits',
        'linkedTo',
        'listeners',
        'majorTickSteps',
        'margin',
        'maximum',
        'maxZoom',
        'minimum',
        'minorTickSteps',
        'minZoom',
        'needHighPrecision',
        'position',
        'radius',
        'reconcileRange',
        'renderer',
        'rotation',
        'segmenter',
        'style',
        'title',
        'titleMargin',
        'totalAngle',
        'visibleRange',
        'fit',
        'config'
    ];
    extaxis3dMetaData.OUTPUTS = [
        { name: 'rangechange', parameters: 'axis,range' },
        { name: 'visiblerangechange', parameters: 'axis,visibleRange' },
        { name: 'ready', parameters: '' }
    ];
    extaxis3dMetaData.OUTPUTNAMES = [
        'rangechange',
        'visiblerangechange',
        'ready'
    ];
    return extaxis3dMetaData;
}());
var extaxis3d = (function (_super) {
    __extends(extaxis3d, _super);
    function extaxis3d(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extaxis3dMetaData);
    }
    extaxis3d.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extaxis3d.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extaxis3dMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extaxis3d.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extaxis3d.prototype, "dynamicRef", void 0);
    extaxis3d = __decorate([
        core_1.Component({
            selector: 'ext-' + extaxis3dMetaData.XTYPE,
            inputs: extaxis3dMetaData.INPUTNAMES,
            outputs: extaxis3dMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extaxis3d; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extaxis3d);
    return extaxis3d;
}(ext_base_1.extbase));
exports.extaxis3d = extaxis3d;
