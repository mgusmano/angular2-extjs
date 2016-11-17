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
var xtreelistMetaData = (function () {
    function xtreelistMetaData() {
    }
    xtreelistMetaData.XTYPE = 'treelist';
    xtreelistMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'baseCls',
        'bind',
        'border',
        'cls',
        'controller',
        'defaultListenerScope',
        'defaults',
        'expanderOnly',
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
        'selection',
        'selectOnExpander',
        'session',
        'shadow',
        'shim',
        'singleExpand',
        'store',
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
    xtreelistMetaData.OUTPUTS = [
        { name: 'beforetofront', parameters: 'treelist' },
        { name: 'tofront', parameters: 'treelist' },
        { name: 'ready', parameters: '' }
    ];
    xtreelistMetaData.OUTPUTNAMES = [
        'beforetofront',
        'tofront',
        'ready'
    ];
    return xtreelistMetaData;
}());
var xtreelist = (function (_super) {
    __extends(xtreelist, _super);
    function xtreelist(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xtreelistMetaData);
    }
    xtreelist.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xtreelist.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xtreelistMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xtreelist.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xtreelist.prototype, "dynamicRef", void 0);
    xtreelist = __decorate([
        core_1.Component({
            selector: 'x-' + xtreelistMetaData.XTYPE,
            inputs: xtreelistMetaData.INPUTNAMES,
            outputs: xtreelistMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xtreelist; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xtreelist);
    return xtreelist;
}(x_base_1.xbase));
exports.xtreelist = xtreelist;
