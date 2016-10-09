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
var extcalendar_weeksviewMetaData = (function () {
    function extcalendar_weeksviewMetaData() {
    }
    extcalendar_weeksviewMetaData.XTYPE = 'calendar-weeksview';
    extcalendar_weeksviewMetaData.INPUTNAMES = [
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
        'fit',
        'config'
    ];
    extcalendar_weeksviewMetaData.OUTPUTS = [
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
    extcalendar_weeksviewMetaData.OUTPUTNAMES = [
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
    return extcalendar_weeksviewMetaData;
}());
var extcalendar_weeksview = (function (_super) {
    __extends(extcalendar_weeksview, _super);
    function extcalendar_weeksview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_weeksviewMetaData);
    }
    extcalendar_weeksview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_weeksview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_weeksviewMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_weeksview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_weeksview.prototype, "dynamicRef", void 0);
    extcalendar_weeksview = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_weeksviewMetaData.XTYPE,
            inputs: extcalendar_weeksviewMetaData.INPUTNAMES,
            outputs: extcalendar_weeksviewMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_weeksview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_weeksview);
    return extcalendar_weeksview;
}(ext_base_1.extbase));
exports.extcalendar_weeksview = extcalendar_weeksview;
