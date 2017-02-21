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
var xcalendar_daysMetaData = (function () {
    function xcalendar_daysMetaData() {
    }
    xcalendar_daysMetaData.XTYPE = 'calendar-days';
    xcalendar_daysMetaData.INPUTNAMES = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'view',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xcalendar_daysMetaData.OUTPUTS = [
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
    xcalendar_daysMetaData.OUTPUTNAMES = [
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
    return xcalendar_daysMetaData;
}());
var xcalendar_days = (function (_super) {
    __extends(xcalendar_days, _super);
    function xcalendar_days(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_daysMetaData);
    }
    xcalendar_days.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_days.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_daysMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_days.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_days.prototype, "dynamicRef", void 0);
    xcalendar_days = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_daysMetaData.XTYPE,
            inputs: xcalendar_daysMetaData.INPUTNAMES,
            outputs: xcalendar_daysMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_days; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_days);
    return xcalendar_days;
}(x_base_1.xbase));
exports.xcalendar_days = xcalendar_days;
