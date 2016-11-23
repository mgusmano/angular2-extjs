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
var xcalendar_weeksviewMetaData = (function () {
    function xcalendar_weeksviewMetaData() {
    }
    xcalendar_weeksviewMetaData.XTYPE = 'calendar-weeksview';
    xcalendar_weeksviewMetaData.INPUTNAMES = [
        'addForm',
        'addOnSelect',
        'allowSelection',
        'compact',
        'compactOptions',
        'controlStoreRange',
        'dayFormat',
        'draggable',
        'droppable',
        'editForm',
        'eventDefaults',
        'firstDayOfWeek',
        'gestureNavigation',
        'header',
        'overflowText',
        'showOverflow',
        'store',
        'timezoneOffset',
        'value',
        'visibleDays',
        'visibleWeeks',
        'weekendDays',
        'platformConfig',
        'responsiveConfig',
        'fittoparent',
        'config'
    ];
    xcalendar_weeksviewMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-weeksview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-weeksview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-weeksview,context' },
        { name: 'eventadd', parameters: 'calendar-weeksview,context' },
        { name: 'eventdrop', parameters: 'calendar-weeksview,context' },
        { name: 'eventedit', parameters: 'calendar-weeksview,context' },
        { name: 'eventtap', parameters: 'calendar-weeksview,context' },
        { name: 'select', parameters: 'calendar-weeksview,context' },
        { name: 'selectrange', parameters: 'calendar-weeksview,context' },
        { name: 'validateeventadd', parameters: 'calendar-weeksview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-weeksview,context' },
        { name: 'validateeventedit', parameters: 'calendar-weeksview,context' },
        { name: 'valuechange', parameters: 'calendar-weeksview,context' },
        { name: 'ready', parameters: '' }
    ];
    xcalendar_weeksviewMetaData.OUTPUTNAMES = [
        'beforeeventadd',
        'beforeeventdragstart',
        'beforeeventedit',
        'eventadd',
        'eventdrop',
        'eventedit',
        'eventtap',
        'select',
        'selectrange',
        'validateeventadd',
        'validateeventdrop',
        'validateeventedit',
        'valuechange',
        'ready'
    ];
    return xcalendar_weeksviewMetaData;
}());
var xcalendar_weeksview = (function (_super) {
    __extends(xcalendar_weeksview, _super);
    function xcalendar_weeksview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_weeksviewMetaData);
    }
    xcalendar_weeksview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_weeksview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_weeksviewMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_weeksview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_weeksview.prototype, "dynamicRef", void 0);
    xcalendar_weeksview = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_weeksviewMetaData.XTYPE,
            inputs: xcalendar_weeksviewMetaData.INPUTNAMES,
            outputs: xcalendar_weeksviewMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_weeksview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_weeksview);
    return xcalendar_weeksview;
}(x_base_1.xbase));
exports.xcalendar_weeksview = xcalendar_weeksview;
