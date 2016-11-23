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
var xcalendar_weeksMetaData = (function () {
    function xcalendar_weeksMetaData() {
    }
    xcalendar_weeksMetaData.XTYPE = 'calendar-weeks';
    xcalendar_weeksMetaData.INPUTNAMES = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'view',
        'platformConfig',
        'responsiveConfig',
        'fittoparent',
        'config'
    ];
    xcalendar_weeksMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-weeks,context' },
        { name: 'eventadd', parameters: 'calendar-weeks,context' },
        { name: 'eventedit', parameters: 'calendar-weeks,context' },
        { name: 'eventdrop', parameters: 'calendar-weeks,context' },
        { name: 'eventtap', parameters: 'calendar-weeks,context' },
        { name: 'validateeventadd', parameters: 'calendar-weeks,context' },
        { name: 'validateeventedit', parameters: 'calendar-weeks,context' },
        { name: 'validateeventdrop', parameters: 'calendar-weeks,context' },
        { name: 'valuechange', parameters: 'calendar-weeks,context' },
        { name: 'beforeeventadd', parameters: 'calendar-weeks,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-weeks,context' },
        { name: 'eventdrop', parameters: 'calendar-weeks,context' },
        { name: 'validateeventdrop', parameters: 'calendar-weeks,context' },
        { name: 'ready', parameters: '' }
    ];
    xcalendar_weeksMetaData.OUTPUTNAMES = [
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
    return xcalendar_weeksMetaData;
}());
var xcalendar_weeks = (function (_super) {
    __extends(xcalendar_weeks, _super);
    function xcalendar_weeks(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_weeksMetaData);
    }
    xcalendar_weeks.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_weeks.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_weeksMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_weeks.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_weeks.prototype, "dynamicRef", void 0);
    xcalendar_weeks = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_weeksMetaData.XTYPE,
            inputs: xcalendar_weeksMetaData.INPUTNAMES,
            outputs: xcalendar_weeksMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_weeks; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_weeks);
    return xcalendar_weeks;
}(x_base_1.xbase));
exports.xcalendar_weeks = xcalendar_weeks;
