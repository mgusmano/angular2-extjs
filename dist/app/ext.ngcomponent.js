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
var ExtNgComponentMetaData = (function () {
    function ExtNgComponentMetaData() {
    }
    ExtNgComponentMetaData.XTYPE = 'container';
    ExtNgComponentMetaData.INPUTNAMES = ['selector', 'component', 'selectorParams'];
    ExtNgComponentMetaData.OUTPUTS = [];
    ExtNgComponentMetaData.OUTPUTNAMES = [];
    return ExtNgComponentMetaData;
}());
var extngcomponent = (function (_super) {
    __extends(extngcomponent, _super);
    function extngcomponent(myElement, componentFactoryResolver, viewContainerRef) {
        _super.call(this, myElement, componentFactoryResolver, viewContainerRef, ExtNgComponentMetaData);
    }
    extngcomponent.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extngcomponent.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extngcomponent.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extngcomponent.prototype, "dynamicRef", void 0);
    extngcomponent = __decorate([
        core_1.Component({
            selector: 'ext-ngcomponent',
            inputs: ExtNgComponentMetaData.INPUTNAMES.concat('config'),
            outputs: ExtNgComponentMetaData.OUTPUTNAMES.concat('ready'),
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extngcomponent; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extngcomponent);
    return extngcomponent;
}(ext_base_1.extbase));
exports.extngcomponent = extngcomponent;
