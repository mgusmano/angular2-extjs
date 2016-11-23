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
var xcalendar_dayviewMetaData = (function () {
    function xcalendar_dayviewMetaData() {
    }
    xcalendar_dayviewMetaData.XTYPE = 'calendar-dayview';
    xcalendar_dayviewMetaData.INPUTNAMES = [
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
        'fittoparent',
        'config'
    ];
    xcalendar_dayviewMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-dayview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-dayview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-dayview,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-dayview,context' },
        { name: 'eventadd', parameters: 'calendar-dayview,context' },
        { name: 'eventdrop', parameters: 'calendar-dayview,context' },
        { name: 'eventedit', parameters: 'calendar-dayview,context' },
        { name: 'eventresize', parameters: 'calendar-dayview,context' },
        { name: 'eventtap', parameters: 'calendar-dayview,context' },
        { name: 'validateeventadd', parameters: 'calendar-dayview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-dayview,context' },
        { name: 'validateeventedit', parameters: 'calendar-dayview,context' },
        { name: 'validateeventresize', parameters: 'calendar-dayview,context' },
        { name: 'valuechange', parameters: 'calendar-dayview,context' },
        { name: 'ready', parameters: '' }
    ];
    xcalendar_dayviewMetaData.OUTPUTNAMES = [
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
    return xcalendar_dayviewMetaData;
}());
var xcalendar_dayview = (function (_super) {
    __extends(xcalendar_dayview, _super);
    function xcalendar_dayview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_dayviewMetaData);
    }
    xcalendar_dayview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_dayview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_dayviewMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_dayview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_dayview.prototype, "dynamicRef", void 0);
    xcalendar_dayview = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_dayviewMetaData.XTYPE,
            inputs: xcalendar_dayviewMetaData.INPUTNAMES,
            outputs: xcalendar_dayviewMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_dayview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_dayview);
    return xcalendar_dayview;
}(x_base_1.xbase));
exports.xcalendar_dayview = xcalendar_dayview;
