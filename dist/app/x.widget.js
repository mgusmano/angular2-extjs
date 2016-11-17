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
var xwidgetMetaData = (function () {
    function xwidgetMetaData() {
    }
    xwidgetMetaData.XTYPE = 'widget';
    xwidgetMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'baseCls',
        'bind',
        'border',
        'cls',
        'controller',
        'defaultListenerScope',
        'flex',
        'floated',
        'height',
        'hidden',
        'id',
        'itemId',
        'listeners',
        'plugins',
        'publishes',
        'reference',
        'relative',
        'session',
        'shadow',
        'shim',
        'style',
        'toFrontOnShow',
        'touchAction',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'viewModel',
        'width',
        'x',
        'y',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xwidgetMetaData.OUTPUTS = [
        { name: 'beforetofront', parameters: 'widget' },
        { name: 'tofront', parameters: 'widget' },
        { name: 'ready', parameters: '' }
    ];
    xwidgetMetaData.OUTPUTNAMES = [
        'beforetofront',
        'tofront',
        'ready'
    ];
    return xwidgetMetaData;
}());
var xwidget = (function (_super) {
    __extends(xwidget, _super);
    function xwidget(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xwidgetMetaData);
    }
    xwidget.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xwidget.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xwidgetMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xwidget.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xwidget.prototype, "dynamicRef", void 0);
    xwidget = __decorate([
        core_1.Component({
            selector: 'x-' + xwidgetMetaData.XTYPE,
            inputs: xwidgetMetaData.INPUTNAMES,
            outputs: xwidgetMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xwidget; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xwidget);
    return xwidget;
}(x_base_1.xbase));
exports.xwidget = xwidget;
