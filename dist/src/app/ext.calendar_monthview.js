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
var extcalendar_monthviewMetaData = (function () {
    function extcalendar_monthviewMetaData() {
    }
    extcalendar_monthviewMetaData.XTYPE = 'calendar-monthview';
    extcalendar_monthviewMetaData.INPUTNAMES = [
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
    extcalendar_monthviewMetaData.OUTPUTS = [
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
    extcalendar_monthviewMetaData.OUTPUTNAMES = [
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
    return extcalendar_monthviewMetaData;
}());
var extcalendar_monthview = (function (_super) {
    __extends(extcalendar_monthview, _super);
    function extcalendar_monthview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_monthviewMetaData);
    }
    extcalendar_monthview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_monthview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_monthviewMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_monthview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_monthview.prototype, "dynamicRef", void 0);
    extcalendar_monthview = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_monthviewMetaData.XTYPE,
            inputs: extcalendar_monthviewMetaData.INPUTNAMES,
            outputs: extcalendar_monthviewMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_monthview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_monthview);
    return extcalendar_monthview;
}(ext_base_1.extbase));
exports.extcalendar_monthview = extcalendar_monthview;
