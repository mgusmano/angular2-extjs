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
var extcalendar_multiviewMetaData = (function () {
    function extcalendar_multiviewMetaData() {
    }
    extcalendar_multiviewMetaData.XTYPE = 'calendar-multiview';
    extcalendar_multiviewMetaData.INPUTNAMES = [
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
    extcalendar_multiviewMetaData.OUTPUTS = [
        { name: 'ready', parameters: '' }
    ];
    extcalendar_multiviewMetaData.OUTPUTNAMES = [
        'ready'
    ];
    return extcalendar_multiviewMetaData;
}());
var extcalendar_multiview = (function (_super) {
    __extends(extcalendar_multiview, _super);
    function extcalendar_multiview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_multiviewMetaData);
    }
    extcalendar_multiview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_multiview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_multiviewMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_multiview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_multiview.prototype, "dynamicRef", void 0);
    extcalendar_multiview = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_multiviewMetaData.XTYPE,
            inputs: extcalendar_multiviewMetaData.INPUTNAMES,
            outputs: extcalendar_multiviewMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_multiview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_multiview);
    return extcalendar_multiview;
}(ext_base_1.extbase));
exports.extcalendar_multiview = extcalendar_multiview;
