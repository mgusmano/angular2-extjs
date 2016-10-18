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
var extcalendar_weeksheaderMetaData = (function () {
    function extcalendar_weeksheaderMetaData() {
    }
    extcalendar_weeksheaderMetaData.XTYPE = 'calendar-weeksheader';
    extcalendar_weeksheaderMetaData.INPUTNAMES = [
        'cellCls',
        'compact',
        'compactOptions',
        'format',
        'value',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    extcalendar_weeksheaderMetaData.OUTPUTS = [
        { name: 'ready', parameters: '' }
    ];
    extcalendar_weeksheaderMetaData.OUTPUTNAMES = [
        'ready'
    ];
    return extcalendar_weeksheaderMetaData;
}());
var extcalendar_weeksheader = (function (_super) {
    __extends(extcalendar_weeksheader, _super);
    function extcalendar_weeksheader(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_weeksheaderMetaData);
    }
    extcalendar_weeksheader.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_weeksheader.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_weeksheaderMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_weeksheader.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_weeksheader.prototype, "dynamicRef", void 0);
    extcalendar_weeksheader = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_weeksheaderMetaData.XTYPE,
            inputs: extcalendar_weeksheaderMetaData.INPUTNAMES,
            outputs: extcalendar_weeksheaderMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_weeksheader; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_weeksheader);
    return extcalendar_weeksheader;
}(ext_base_1.extbase));
exports.extcalendar_weeksheader = extcalendar_weeksheader;
