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
var xcalendar_dayMetaData = (function () {
    function xcalendar_dayMetaData() {
    }
    xcalendar_dayMetaData.XTYPE = 'calendar-day';
    xcalendar_dayMetaData.INPUTNAMES = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'view',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xcalendar_dayMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-day,context' },
        { name: 'eventadd', parameters: 'calendar-day,context' },
        { name: 'eventedit', parameters: 'calendar-day,context' },
        { name: 'eventdrop', parameters: 'calendar-day,context' },
        { name: 'eventtap', parameters: 'calendar-day,context' },
        { name: 'validateeventadd', parameters: 'calendar-day,context' },
        { name: 'validateeventedit', parameters: 'calendar-day,context' },
        { name: 'validateeventdrop', parameters: 'calendar-day,context' },
        { name: 'valuechange', parameters: 'calendar-day,context' },
        { name: 'beforeeventadd', parameters: 'calendar-day,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-day,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-day,context' },
        { name: 'eventdrop', parameters: 'calendar-day,context' },
        { name: 'eventresize', parameters: 'calendar-day,context' },
        { name: 'validateeventdrop', parameters: 'calendar-day,context' },
        { name: 'validateeventresize', parameters: 'calendar-day,context' },
        { name: 'ready', parameters: '' }
    ];
    xcalendar_dayMetaData.OUTPUTNAMES = [
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
    return xcalendar_dayMetaData;
}());
var xcalendar_day = (function (_super) {
    __extends(xcalendar_day, _super);
    function xcalendar_day(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_dayMetaData);
    }
    xcalendar_day.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_day.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_dayMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_day.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_day.prototype, "dynamicRef", void 0);
    xcalendar_day = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_dayMetaData.XTYPE,
            inputs: xcalendar_dayMetaData.INPUTNAMES,
            outputs: xcalendar_dayMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_day; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_day);
    return xcalendar_day;
}(x_base_1.xbase));
exports.xcalendar_day = xcalendar_day;
