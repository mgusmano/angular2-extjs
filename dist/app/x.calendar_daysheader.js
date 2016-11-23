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
var xcalendar_daysheaderMetaData = (function () {
    function xcalendar_daysheaderMetaData() {
    }
    xcalendar_daysheaderMetaData.XTYPE = 'calendar-daysheader';
    xcalendar_daysheaderMetaData.INPUTNAMES = [
        'cellCls',
        'compact',
        'compactOptions',
        'format',
        'value',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fittoparent',
        'config'
    ];
    xcalendar_daysheaderMetaData.OUTPUTS = [
        { name: 'ready', parameters: '' }
    ];
    xcalendar_daysheaderMetaData.OUTPUTNAMES = [
        'ready'
    ];
    return xcalendar_daysheaderMetaData;
}());
var xcalendar_daysheader = (function (_super) {
    __extends(xcalendar_daysheader, _super);
    function xcalendar_daysheader(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcalendar_daysheaderMetaData);
    }
    xcalendar_daysheader.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcalendar_daysheader.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcalendar_daysheaderMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcalendar_daysheader.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcalendar_daysheader.prototype, "dynamicRef", void 0);
    xcalendar_daysheader = __decorate([
        core_1.Component({
            selector: 'x-' + xcalendar_daysheaderMetaData.XTYPE,
            inputs: xcalendar_daysheaderMetaData.INPUTNAMES,
            outputs: xcalendar_daysheaderMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcalendar_daysheader; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcalendar_daysheader);
    return xcalendar_daysheader;
}(x_base_1.xbase));
exports.xcalendar_daysheader = xcalendar_daysheader;
