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
var extdrawMetaData = (function () {
    function extdrawMetaData() {
    }
    extdrawMetaData.XTYPE = 'draw';
    extdrawMetaData.INPUTNAMES = [
        'engine',
        'gradients',
        'resizeHandler',
        'sprites',
        'fit',
        'config'
    ];
    extdrawMetaData.OUTPUTS = [
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
    extdrawMetaData.OUTPUTNAMES = [
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
    return extdrawMetaData;
}());
var extdraw = (function (_super) {
    __extends(extdraw, _super);
    function extdraw(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extdrawMetaData);
    }
    extdraw.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extdraw.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extdrawMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extdraw.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extdraw.prototype, "dynamicRef", void 0);
    extdraw = __decorate([
        core_1.Component({
            selector: 'ext-' + extdrawMetaData.XTYPE,
            inputs: extdrawMetaData.INPUTNAMES,
            outputs: extdrawMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extdraw; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extdraw);
    return extdraw;
}(ext_base_1.extbase));
exports.extdraw = extdraw;
