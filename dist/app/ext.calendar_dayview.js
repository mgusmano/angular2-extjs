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
var extcalendar_dayviewMetaData = (function () {
    function extcalendar_dayviewMetaData() {
    }
    extcalendar_dayviewMetaData.XTYPE = 'calendar-dayview';
    extcalendar_dayviewMetaData.INPUTNAMES = [
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
        'fit',
        'config'
    ];
    extcalendar_dayviewMetaData.OUTPUTS = [
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
    extcalendar_dayviewMetaData.OUTPUTNAMES = [
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
    return extcalendar_dayviewMetaData;
}());
var extcalendar_dayview = (function (_super) {
    __extends(extcalendar_dayview, _super);
    function extcalendar_dayview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_dayviewMetaData);
    }
    extcalendar_dayview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_dayview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_dayviewMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_dayview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_dayview.prototype, "dynamicRef", void 0);
    extcalendar_dayview = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_dayviewMetaData.XTYPE,
            inputs: extcalendar_dayviewMetaData.INPUTNAMES,
            outputs: extcalendar_dayviewMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_dayview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_dayview);
    return extcalendar_dayview;
}(ext_base_1.extbase));
exports.extcalendar_dayview = extcalendar_dayview;
