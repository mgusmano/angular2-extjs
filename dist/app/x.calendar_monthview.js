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
var xcalendar_monthviewMetaData = (function () {
    function xcalendar_monthviewMetaData() {
    }
    xcalendar_monthviewMetaData.XTYPE = 'calendar-monthview';
    xcalendar_monthviewMetaData.INPUTNAMES = [
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
    xcalendar_monthviewMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-monthview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-monthview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-monthview,context' },
        { name: 'eventadd', parameters: 'calendar-monthview,context' },
        { name: 'eventdrop', parameters: 'calendar-monthview,context' },
        { name: 'eventedit', parameters: 'calendar-monthview,context' },
        { name: 'eventtap', parameters: 'calendar-monthview,context' },
        { name: 'select', parameters: 'calendar-monthview,context' },
        { name: 'selectrange', parameters: 'calendar-monthview,context' },
        { name: 'validateeventadd', parameters: 'calendar-monthview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-monthview,context' },
        { name: 'validateeventedit', parameters: 'calendar-monthview,context' },
        { name: 'valuechange', parameters: 'calendar-monthview,context' },
        { name: 'ready', parameters: '' }
    ];
    xcalendar_monthviewMetaData.OUTPUTNAMES = [
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
    return xcalendar_monthviewMetaData;
}());
var xcalendar_monthview = (function (_super) {
    __extends(xcalendar_monthview, _super);
    function xcalendar_monthview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_monthviewMetaData);
    }
    xcalendar_monthview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_monthview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_monthviewMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_monthview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_monthview.prototype, "dynamicRef", void 0);
    xcalendar_monthview = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_monthviewMetaData.XTYPE,
            inputs: xcalendar_monthviewMetaData.INPUTNAMES,
            outputs: xcalendar_monthviewMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_monthview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_monthview);
    return xcalendar_monthview;
}(x_base_1.xbase));
exports.xcalendar_monthview = xcalendar_monthview;
