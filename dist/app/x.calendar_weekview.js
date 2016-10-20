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
var xcalendar_weekviewMetaData = (function () {
    function xcalendar_weekviewMetaData() {
    }
    xcalendar_weekviewMetaData.XTYPE = 'calendar-weekview';
    xcalendar_weekviewMetaData.INPUTNAMES = [
        'addForm',
        'allowSelection',
        'compact',
        'compactOptions',
        'controlStoreRange',
        'displayOverlap',
        'draggable',
        'droppable',
        'editForm',
        'endHour',
        'eventDefaults',
        'firstDayOfWeek',
        'gestureNavigation',
        'header',
        'resizeEvents',
        'showNowMarker',
        'store',
        'timeFormat',
        'timeRenderer',
        'timezoneOffset',
        'value',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xcalendar_weekviewMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-weekview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-weekview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-weekview,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-weekview,context' },
        { name: 'eventadd', parameters: 'calendar-weekview,context' },
        { name: 'eventdrop', parameters: 'calendar-weekview,context' },
        { name: 'eventedit', parameters: 'calendar-weekview,context' },
        { name: 'eventresize', parameters: 'calendar-weekview,context' },
        { name: 'eventtap', parameters: 'calendar-weekview,context' },
        { name: 'validateeventadd', parameters: 'calendar-weekview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-weekview,context' },
        { name: 'validateeventedit', parameters: 'calendar-weekview,context' },
        { name: 'validateeventresize', parameters: 'calendar-weekview,context' },
        { name: 'valuechange', parameters: 'calendar-weekview,context' },
        { name: 'ready', parameters: '' }
    ];
    xcalendar_weekviewMetaData.OUTPUTNAMES = [
        'beforeeventadd',
        'beforeeventdragstart',
        'beforeeventedit',
        'beforeeventresizestart',
        'eventadd',
        'eventdrop',
        'eventedit',
        'eventresize',
        'eventtap',
        'validateeventadd',
        'validateeventdrop',
        'validateeventedit',
        'validateeventresize',
        'valuechange',
        'ready'
    ];
    return xcalendar_weekviewMetaData;
}());
var xcalendar_weekview = (function (_super) {
    __extends(xcalendar_weekview, _super);
    function xcalendar_weekview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_weekviewMetaData);
    }
    xcalendar_weekview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_weekview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_weekviewMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_weekview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_weekview.prototype, "dynamicRef", void 0);
    xcalendar_weekview = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_weekviewMetaData.XTYPE,
            inputs: xcalendar_weekviewMetaData.INPUTNAMES,
            outputs: xcalendar_weekviewMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_weekview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_weekview);
    return xcalendar_weekview;
}(x_base_1.xbase));
exports.xcalendar_weekview = xcalendar_weekview;
