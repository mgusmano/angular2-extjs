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
var extcalendar_monthMetaData = (function () {
    function extcalendar_monthMetaData() {
    }
    extcalendar_monthMetaData.XTYPE = 'calendar-month';
    extcalendar_monthMetaData.INPUTNAMES = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'value',
        'view',
        'visibleWeeks',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    extcalendar_monthMetaData.OUTPUTS = [
        { name: 'beforeeventadd', parameters: 'calendar-month,context' },
        { name: 'eventadd', parameters: 'calendar-month,context' },
        { name: 'eventedit', parameters: 'calendar-month,context' },
        { name: 'eventdrop', parameters: 'calendar-month,context' },
        { name: 'eventtap', parameters: 'calendar-month,context' },
        { name: 'validateeventadd', parameters: 'calendar-month,context' },
        { name: 'validateeventedit', parameters: 'calendar-month,context' },
        { name: 'validateeventdrop', parameters: 'calendar-month,context' },
        { name: 'valuechange', parameters: 'calendar-month,context' },
        { name: 'beforeeventadd', parameters: 'calendar-month,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-month,context' },
        { name: 'eventdrop', parameters: 'calendar-month,context' },
        { name: 'validateeventdrop', parameters: 'calendar-month,context' },
        { name: 'ready', parameters: '' }
    ];
    extcalendar_monthMetaData.OUTPUTNAMES = [
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
    return extcalendar_monthMetaData;
}());
var extcalendar_month = (function (_super) {
    __extends(extcalendar_month, _super);
    function extcalendar_month(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_monthMetaData);
    }
    extcalendar_month.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_month.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_monthMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_month.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_month.prototype, "dynamicRef", void 0);
    extcalendar_month = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_monthMetaData.XTYPE,
            inputs: extcalendar_monthMetaData.INPUTNAMES,
            outputs: extcalendar_monthMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_month; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_month);
    return extcalendar_month;
}(ext_base_1.extbase));
exports.extcalendar_month = extcalendar_month;
