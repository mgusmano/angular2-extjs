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
var xgaugeMetaData = (function () {
    function xgaugeMetaData() {
    }
    xgaugeMetaData.XTYPE = 'gauge';
    xgaugeMetaData.INPUTNAMES = [
        'angleOffset',
        'animation',
        'clockwise',
        'maxValue',
        'minValue',
        'padding',
        'textAlign',
        'textTpl',
        'trackLength',
        'trackStart',
        'trackStyle',
        'value',
        'valueStyle',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xgaugeMetaData.OUTPUTS = [
        { name: 'ready', parameters: '' }
    ];
    xgaugeMetaData.OUTPUTNAMES = [
        'ready'
    ];
    return xgaugeMetaData;
}());
var xgauge = (function (_super) {
    __extends(xgauge, _super);
    function xgauge(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xgaugeMetaData);
    }
    xgauge.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xgauge.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xgaugeMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xgauge.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xgauge.prototype, "dynamicRef", void 0);
    xgauge = __decorate([
        core_1.Component({
            selector: 'x-' + xgaugeMetaData.XTYPE,
            inputs: xgaugeMetaData.INPUTNAMES,
            outputs: xgaugeMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xgauge; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xgauge);
    return xgauge;
}(x_base_1.xbase));
exports.xgauge = xgauge;
