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
var extcalendar_dayMetaData = (function () {
    function extcalendar_dayMetaData() {
    }
    extcalendar_dayMetaData.XTYPE = 'calendar-day';
    extcalendar_dayMetaData.INPUTNAMES = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'view',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    extcalendar_dayMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-day,context' },
        { name: 'eventadd', parameters: 'calendar-day,context' },
        { name: 'eventedit', parameters: 'calendar-day,context' },
        { name: 'eventdrop', parameters: 'calendar-day,context' },
        { name: 'eventtap', parameters: 'calendar-day,context' },
        { name: 'validateeventadd', parameters: 'calendar-day,context' },
        { name: 'validateeventedit', parameters: 'calendar-day,context' },
        { name: 'validateeventdrop', parameters: 'calendar-day,context' },
        { name: 'valuechange', parameters: 'calendar-day,context' },
        { name: 'beforeeventadd', parameters: 'calendar-day,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-day,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-day,context' },
        { name: 'eventdrop', parameters: 'calendar-day,context' },
        { name: 'eventresize', parameters: 'calendar-day,context' },
        { name: 'validateeventdrop', parameters: 'calendar-day,context' },
        { name: 'validateeventresize', parameters: 'calendar-day,context' },
        { name: 'ready', parameters: '' }
    ];
    extcalendar_dayMetaData.OUTPUTNAMES = [
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
    return extcalendar_dayMetaData;
}());
var extcalendar_day = (function (_super) {
    __extends(extcalendar_day, _super);
    function extcalendar_day(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_dayMetaData);
    }
    extcalendar_day.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_day.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_dayMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_day.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_day.prototype, "dynamicRef", void 0);
    extcalendar_day = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_dayMetaData.XTYPE,
            inputs: extcalendar_dayMetaData.INPUTNAMES,
            outputs: extcalendar_dayMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_day; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_day);
    return extcalendar_day;
}(ext_base_1.extbase));
exports.extcalendar_day = extcalendar_day;
