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
var xcalendar_monthMetaData = (function () {
    function xcalendar_monthMetaData() {
    }
    xcalendar_monthMetaData.XTYPE = 'calendar-month';
    xcalendar_monthMetaData.INPUTNAMES = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'value',
        'view',
        'visibleWeeks',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xcalendar_monthMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-month,context' },
        { name: 'eventadd', parameters: 'calendar-month,context' },
        { name: 'eventedit', parameters: 'calendar-month,context' },
        { name: 'eventdrop', parameters: 'calendar-month,context' },
        { name: 'eventtap', parameters: 'calendar-month,context' },
        { name: 'validateeventadd', parameters: 'calendar-month,context' },
        { name: 'validateeventedit', parameters: 'calendar-month,context' },
        { name: 'validateeventdrop', parameters: 'calendar-month,context' },
        { name: 'valuechange', parameters: 'calendar-month,context' },
        { name: 'beforeeventadd', parameters: 'calendar-month,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-month,context' },
        { name: 'eventdrop', parameters: 'calendar-month,context' },
        { name: 'validateeventdrop', parameters: 'calendar-month,context' },
        { name: 'ready', parameters: '' }
    ];
    xcalendar_monthMetaData.OUTPUTNAMES = [
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
        'eventdrop',
        'validateeventdrop',
        'ready'
    ];
    return xcalendar_monthMetaData;
}());
var xcalendar_month = (function (_super) {
    __extends(xcalendar_month, _super);
    function xcalendar_month(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_monthMetaData);
    }
    xcalendar_month.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_month.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_monthMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_month.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_month.prototype, "dynamicRef", void 0);
    xcalendar_month = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_monthMetaData.XTYPE,
            inputs: xcalendar_monthMetaData.INPUTNAMES,
            outputs: xcalendar_monthMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_month; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_month);
    return xcalendar_month;
}(x_base_1.xbase));
exports.xcalendar_month = xcalendar_month;
