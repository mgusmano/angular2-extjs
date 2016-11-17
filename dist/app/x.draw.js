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
var xdrawMetaData = (function () {
    function xdrawMetaData() {
    }
    xdrawMetaData.XTYPE = 'draw';
    xdrawMetaData.INPUTNAMES = [
        'engine',
        'gradients',
        'resizeHandler',
        'sprites',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xdrawMetaData.OUTPUTS = [
        { name: 'bodyresize', parameters: 'size' },
        { name: 'spriteclick', parameters: 'sprite,event' },
        { name: 'spritedblclick', parameters: 'sprite,event' },
        { name: 'spritemousedown', parameters: 'sprite,event' },
        { name: 'spritemousemove', parameters: 'sprite,event' },
        { name: 'spritemouseout', parameters: 'sprite,event' },
        { name: 'spritemouseover', parameters: 'sprite,event' },
        { name: 'spritemouseup', parameters: 'sprite,event' },
        { name: 'spritetap', parameters: 'sprite,event' },
        { name: 'ready', parameters: '' }
    ];
    xdrawMetaData.OUTPUTNAMES = [
        'bodyresize',
        'spriteclick',
        'spritedblclick',
        'spritemousedown',
        'spritemousemove',
        'spritemouseout',
        'spritemouseover',
        'spritemouseup',
        'spritetap',
        'ready'
    ];
    return xdrawMetaData;
}());
var xdraw = (function (_super) {
    __extends(xdraw, _super);
    function xdraw(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xdrawMetaData);
    }
    xdraw.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xdraw.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xdrawMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xdraw.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xdraw.prototype, "dynamicRef", void 0);
    xdraw = __decorate([
        core_1.Component({
            selector: 'x-' + xdrawMetaData.XTYPE,
            inputs: xdrawMetaData.INPUTNAMES,
            outputs: xdrawMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xdraw; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xdraw);
    return xdraw;
}(x_base_1.xbase));
exports.xdraw = xdraw;
