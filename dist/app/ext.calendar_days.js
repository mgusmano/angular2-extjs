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
var extcalendar_daysMetaData = (function () {
    function extcalendar_daysMetaData() {
    }
    extcalendar_daysMetaData.XTYPE = 'calendar-days';
    extcalendar_daysMetaData.INPUTNAMES = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'view',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    extcalendar_daysMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-days,context' },
        { name: 'eventadd', parameters: 'calendar-days,context' },
        { name: 'eventedit', parameters: 'calendar-days,context' },
        { name: 'eventdrop', parameters: 'calendar-days,context' },
        { name: 'eventtap', parameters: 'calendar-days,context' },
        { name: 'validateeventadd', parameters: 'calendar-days,context' },
        { name: 'validateeventedit', parameters: 'calendar-days,context' },
        { name: 'validateeventdrop', parameters: 'calendar-days,context' },
        { name: 'valuechange', parameters: 'calendar-days,context' },
        { name: 'beforeeventadd', parameters: 'calendar-days,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-days,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-days,context' },
        { name: 'eventdrop', parameters: 'calendar-days,context' },
        { name: 'eventresize', parameters: 'calendar-days,context' },
        { name: 'validateeventdrop', parameters: 'calendar-days,context' },
        { name: 'validateeventresize', parameters: 'calendar-days,context' },
        { name: 'ready', parameters: '' }
    ];
    extcalendar_daysMetaData.OUTPUTNAMES = [
        'beforeeventadd',
        'eventadd',
        'eventedit',
        'eventdrop',
        'eventtap',
        'validateeventadd',
        'validateeventedit',
        'validateeventdrop',
        'valuechange',
        'beforeeventadd',
        'beforeeventdragstart',
        'beforeeventresizestart',
        'eventdrop',
        'eventresize',
        'validateeventdrop',
        'validateeventresize',
        'ready'
    ];
    return extcalendar_daysMetaData;
}());
var extcalendar_days = (function (_super) {
    __extends(extcalendar_days, _super);
    function extcalendar_days(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_daysMetaData);
    }
    extcalendar_days.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_days.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_daysMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_days.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_days.prototype, "dynamicRef", void 0);
    extcalendar_days = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_daysMetaData.XTYPE,
            inputs: extcalendar_daysMetaData.INPUTNAMES,
            outputs: extcalendar_daysMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_days; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_days);
    return extcalendar_days;
}(ext_base_1.extbase));
exports.extcalendar_days = extcalendar_days;
