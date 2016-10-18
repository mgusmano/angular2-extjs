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
var extcalendarMetaData = (function () {
    function extcalendarMetaData() {
    }
    extcalendarMetaData.XTYPE = 'calendar';
    extcalendarMetaData.INPUTNAMES = [
        'calendarList',
        'calendarList',
        'compact',
        'compactOptions',
        'createButtonPosition',
        'dateTitle',
        'defaultView',
        'nextButton',
        'nextButton',
        'sideBar',
        'store',
        'switcher',
        'switcherPosition',
        'timezoneOffset',
        'titleBar',
        'todayButton',
        'value',
        'views',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    extcalendarMetaData.OUTPUTS = [
        { name: 'ready', parameters: '' }
    ];
    extcalendarMetaData.OUTPUTNAMES = [
        'ready'
    ];
    return extcalendarMetaData;
}());
var extcalendar = (function (_super) {
    __extends(extcalendar, _super);
    function extcalendar(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendarMetaData);
    }
    extcalendar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendarMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar.prototype, "dynamicRef", void 0);
    extcalendar = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendarMetaData.XTYPE,
            inputs: extcalendarMetaData.INPUTNAMES,
            outputs: extcalendarMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar);
    return extcalendar;
}(ext_base_1.extbase));
exports.extcalendar = extcalendar;
