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
var xcalendar_multiviewMetaData = (function () {
    function xcalendar_multiviewMetaData() {
    }
    xcalendar_multiviewMetaData.XTYPE = 'calendar-multiview';
    xcalendar_multiviewMetaData.INPUTNAMES = [
        'compact',
        'compactOptions',
        'store',
        'timezoneOffset',
        'value',
        'views',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xcalendar_multiviewMetaData.OUTPUTS = [
        { name: 'ready', parameters: '' }
    ];
    xcalendar_multiviewMetaData.OUTPUTNAMES = [
        'ready'
    ];
    return xcalendar_multiviewMetaData;
}());
var xcalendar_multiview = (function (_super) {
    __extends(xcalendar_multiview, _super);
    function xcalendar_multiview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_multiviewMetaData);
    }
    xcalendar_multiview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_multiview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_multiviewMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_multiview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_multiview.prototype, "dynamicRef", void 0);
    xcalendar_multiview = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_multiviewMetaData.XTYPE,
            inputs: xcalendar_multiviewMetaData.INPUTNAMES,
            outputs: xcalendar_multiviewMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_multiview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_multiview);
    return xcalendar_multiview;
}(x_base_1.xbase));
exports.xcalendar_multiview = xcalendar_multiview;
