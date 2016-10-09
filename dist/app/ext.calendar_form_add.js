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
var extcalendar_form_addMetaData = (function () {
    function extcalendar_form_addMetaData() {
    }
    extcalendar_form_addMetaData.XTYPE = 'calendar-form-add';
    extcalendar_form_addMetaData.INPUTNAMES = [
        'defaultEndTime',
        'defaultStartTime',
        'event',
        'title',
        'view',
        'fit',
        'config'
    ];
    extcalendar_form_addMetaData.OUTPUTS = [
        { name: 'cancel', parameters: 'calendar-form-add' },
        { name: 'drop', parameters: 'calendar-form-add' },
        { name: 'save', parameters: 'calendar-form-add,context' },
        { name: 'ready', parameters: '' }
    ];
    extcalendar_form_addMetaData.OUTPUTNAMES = [
        'cancel',
        'drop',
        'save',
        'ready'
    ];
    return extcalendar_form_addMetaData;
}());
var extcalendar_form_add = (function (_super) {
    __extends(extcalendar_form_add, _super);
    function extcalendar_form_add(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_form_addMetaData);
    }
    extcalendar_form_add.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_form_add.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_form_addMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_form_add.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_form_add.prototype, "dynamicRef", void 0);
    extcalendar_form_add = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_form_addMetaData.XTYPE,
            inputs: extcalendar_form_addMetaData.INPUTNAMES,
            outputs: extcalendar_form_addMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_form_add; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_form_add);
    return extcalendar_form_add;
}(ext_base_1.extbase));
exports.extcalendar_form_add = extcalendar_form_add;
