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
var extcalendar_daysviewMetaData = (function () {
    function extcalendar_daysviewMetaData() {
    }
    extcalendar_daysviewMetaData.XTYPE = 'calendar-daysview';
    extcalendar_daysviewMetaData.INPUTNAMES = [
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
        'fit',
        'config'
    ];
    extcalendar_daysviewMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-daysview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-daysview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-daysview,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-daysview,context' },
        { name: 'eventadd', parameters: 'calendar-daysview,context' },
        { name: 'eventdrop', parameters: 'calendar-daysview,context' },
        { name: 'eventedit', parameters: 'calendar-daysview,context' },
        { name: 'eventresize', parameters: 'calendar-daysview,context' },
        { name: 'eventtap', parameters: 'calendar-daysview,context' },
        { name: 'validateeventadd', parameters: 'calendar-daysview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-daysview,context' },
        { name: 'validateeventedit', parameters: 'calendar-daysview,context' },
        { name: 'validateeventresize', parameters: 'calendar-daysview,context' },
        { name: 'valuechange', parameters: 'calendar-daysview,context' },
        { name: 'ready', parameters: '' }
    ];
    extcalendar_daysviewMetaData.OUTPUTNAMES = [
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
    return extcalendar_daysviewMetaData;
}());
var extcalendar_daysview = (function (_super) {
    __extends(extcalendar_daysview, _super);
    function extcalendar_daysview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_daysviewMetaData);
    }
    extcalendar_daysview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_daysview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_daysviewMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_daysview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_daysview.prototype, "dynamicRef", void 0);
    extcalendar_daysview = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_daysviewMetaData.XTYPE,
            inputs: extcalendar_daysviewMetaData.INPUTNAMES,
            outputs: extcalendar_daysviewMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_daysview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_daysview);
    return extcalendar_daysview;
}(ext_base_1.extbase));
exports.extcalendar_daysview = extcalendar_daysview;
