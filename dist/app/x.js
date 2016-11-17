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
var extMetaData = (function () {
    function extMetaData() {
    }
    extMetaData.XTYPE = '';
    extMetaData.INPUTNAMES = ['xtype', 'fitToParent'];
    extMetaData.OUTPUTS = [{ name: 'click', parameters: 'control,record,eOpts' }];
    extMetaData.OUTPUTNAMES = ['click'];
    return extMetaData;
}());
var x = (function (_super) {
    __extends(x, _super);
    function x(myElement, componentFactoryResolver, viewContainerRef) {
        _super.call(this, myElement, componentFactoryResolver, viewContainerRef, extMetaData);
    }
    x.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    x.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], x.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], x.prototype, "dynamicRef", void 0);
    x = __decorate([
        core_1.Component({
            selector: 'x' + extMetaData.XTYPE,
            inputs: extMetaData.INPUTNAMES.concat('config'),
            outputs: extMetaData.OUTPUTNAMES.concat('ready'),
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return x; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], x);
    return x;
}(x_base_1.xbase));
exports.x = x;
