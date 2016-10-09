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
var extMetaData = (function () {
    function extMetaData() {
    }
    extMetaData.XTYPE = '';
    extMetaData.INPUTNAMES = ['xtype', 'fit'];
    extMetaData.OUTPUTS = [{ name: 'click', parameters: 'control,record,eOpts' }];
    extMetaData.OUTPUTNAMES = ['click'];
    return extMetaData;
}());
var ext = (function (_super) {
    __extends(ext, _super);
    function ext(myElement, componentFactoryResolver, viewContainerRef) {
        _super.call(this, myElement, componentFactoryResolver, viewContainerRef, extMetaData);
    }
    ext.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    ext.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], ext.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], ext.prototype, "dynamicRef", void 0);
    ext = __decorate([
        core_1.Component({
            selector: 'ext' + extMetaData.XTYPE,
            inputs: extMetaData.INPUTNAMES.concat('config'),
            outputs: extMetaData.OUTPUTNAMES.concat('ready'),
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return ext; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], ext);
    return ext;
}(ext_base_1.extbase));
exports.ext = ext;
