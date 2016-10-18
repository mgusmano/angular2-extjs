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
var extcalendar_weekMetaData = (function () {
    function extcalendar_weekMetaData() {
    }
    extcalendar_weekMetaData.XTYPE = 'calendar-week';
    extcalendar_weekMetaData.INPUTNAMES = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'firstDayOfWeek',
        'value',
        'view',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    extcalendar_weekMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-week,context' },
        { name: 'eventadd', parameters: 'calendar-week,context' },
        { name: 'eventedit', parameters: 'calendar-week,context' },
        { name: 'eventdrop', parameters: 'calendar-week,context' },
        { name: 'eventtap', parameters: 'calendar-week,context' },
        { name: 'validateeventadd', parameters: 'calendar-week,context' },
        { name: 'validateeventedit', parameters: 'calendar-week,context' },
        { name: 'validateeventdrop', parameters: 'calendar-week,context' },
        { name: 'valuechange', parameters: 'calendar-week,context' },
        { name: 'beforeeventadd', parameters: 'calendar-week,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-week,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-week,context' },
        { name: 'eventdrop', parameters: 'calendar-week,context' },
        { name: 'eventresize', parameters: 'calendar-week,context' },
        { name: 'validateeventdrop', parameters: 'calendar-week,context' },
        { name: 'validateeventresize', parameters: 'calendar-week,context' },
        { name: 'ready', parameters: '' }
    ];
    extcalendar_weekMetaData.OUTPUTNAMES = [
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
    return extcalendar_weekMetaData;
}());
var extcalendar_week = (function (_super) {
    __extends(extcalendar_week, _super);
    function extcalendar_week(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_weekMetaData);
    }
    extcalendar_week.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_week.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_weekMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_week.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_week.prototype, "dynamicRef", void 0);
    extcalendar_week = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_weekMetaData.XTYPE,
            inputs: extcalendar_weekMetaData.INPUTNAMES,
            outputs: extcalendar_weekMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_week; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_week);
    return extcalendar_week;
}(ext_base_1.extbase));
exports.extcalendar_week = extcalendar_week;
