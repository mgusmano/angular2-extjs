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
var xcalendar_weekMetaData = (function () {
    function xcalendar_weekMetaData() {
    }
    xcalendar_weekMetaData.XTYPE = 'calendar-week';
    xcalendar_weekMetaData.INPUTNAMES = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'firstDayOfWeek',
        'value',
        'view',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fittoparent',
        'config'
    ];
    xcalendar_weekMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-week,context' },
        { name: 'eventadd', parameters: 'calendar-week,context' },
        { name: 'eventedit', parameters: 'calendar-week,context' },
        { name: 'eventdrop', parameters: 'calendar-week,context' },
        { name: 'eventtap', parameters: 'calendar-week,context' },
        { name: 'validateeventadd', parameters: 'calendar-week,context' },
        { name: 'validateeventedit', parameters: 'calendar-week,context' },
        { name: 'validateeventdrop', parameters: 'calendar-week,context' },
        { name: 'valuechange', parameters: 'calendar-week,context' },
        { name: 'beforeeventadd', parameters: 'calendar-week,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-week,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-week,context' },
        { name: 'eventdrop', parameters: 'calendar-week,context' },
        { name: 'eventresize', parameters: 'calendar-week,context' },
        { name: 'validateeventdrop', parameters: 'calendar-week,context' },
        { name: 'validateeventresize', parameters: 'calendar-week,context' },
        { name: 'ready', parameters: '' }
    ];
    xcalendar_weekMetaData.OUTPUTNAMES = [
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
    return xcalendar_weekMetaData;
}());
var xcalendar_week = (function (_super) {
    __extends(xcalendar_week, _super);
    function xcalendar_week(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_weekMetaData);
    }
    xcalendar_week.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_week.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_weekMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_week.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_week.prototype, "dynamicRef", void 0);
    xcalendar_week = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_weekMetaData.XTYPE,
            inputs: xcalendar_weekMetaData.INPUTNAMES,
            outputs: xcalendar_weekMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_week; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_week);
    return xcalendar_week;
}(x_base_1.xbase));
exports.xcalendar_week = xcalendar_week;
