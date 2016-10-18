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
var extpolarMetaData = (function () {
    function extpolarMetaData() {
    }
    extpolarMetaData.XTYPE = 'polar';
    extpolarMetaData.INPUTNAMES = [
        'animation',
        'axes',
        'background',
        'center',
        'colors',
        'engine',
        'gradients',
        'highlightItem',
        'innerPadding',
        'insetPadding',
        'interactions',
        'legend',
        'mainRect',
        'radius',
        'resizeHandler',
        'series',
        'sprites',
        'store',
        'style',
        'theme',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    extpolarMetaData.OUTPUTS = [
        { name: 'beforerefresh', parameters: 'polar' },
        { name: 'bodyresize', parameters: 'size' },
        { name: 'itemclick', parameters: 'chart,item,event' },
        { name: 'itemdblclick', parameters: 'chart,item,event' },
        { name: 'itemmousedown', parameters: 'chart,item,event' },
        { name: 'itemmousemove', parameters: 'chart,item,event' },
        { name: 'itemmouseout', parameters: 'chart,item,event' },
        { name: 'itemmouseover', parameters: 'chart,item,event' },
        { name: 'itemmouseup', parameters: 'chart,item,event' },
        { name: 'itemtap', parameters: 'chart,item,event' },
        { name: 'redraw', parameters: 'polar' },
        { name: 'refresh', parameters: 'polar' },
        { name: 'spriteclick', parameters: 'sprite,event' },
        { name: 'spritedblclick', parameters: 'sprite,event' },
        { name: 'spritemousedown', parameters: 'sprite,event' },
        { name: 'spritemousemove', parameters: 'sprite,event' },
        { name: 'spritemouseout', parameters: 'sprite,event' },
        { name: 'spritemouseover', parameters: 'sprite,event' },
        { name: 'spritemouseup', parameters: 'sprite,event' },
        { name: 'spritetap', parameters: 'sprite,event' },
        { name: 'storechange', parameters: 'chart,newStore,oldStore' },
        { name: 'ready', parameters: '' }
    ];
    extpolarMetaData.OUTPUTNAMES = [
        'beforerefresh',
        'bodyresize',
        'itemclick',
        'itemdblclick',
        'itemmousedown',
        'itemmousemove',
        'itemmouseout',
        'itemmouseover',
        'itemmouseup',
        'itemtap',
        'redraw',
        'refresh',
        'spriteclick',
        'spritedblclick',
        'spritemousedown',
        'spritemousemove',
        'spritemouseout',
        'spritemouseover',
        'spritemouseup',
        'spritetap',
        'storechange',
        'ready'
    ];
    return extpolarMetaData;
}());
var extpolar = (function (_super) {
    __extends(extpolar, _super);
    function extpolar(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extpolarMetaData);
    }
    extpolar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extpolar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extpolarMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extpolar.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extpolar.prototype, "dynamicRef", void 0);
    extpolar = __decorate([
        core_1.Component({
            selector: 'ext-' + extpolarMetaData.XTYPE,
            inputs: extpolarMetaData.INPUTNAMES,
            outputs: extpolarMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extpolar; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extpolar);
    return extpolar;
}(ext_base_1.extbase));
exports.extpolar = extpolar;
