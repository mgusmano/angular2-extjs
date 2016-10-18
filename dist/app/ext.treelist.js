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
var exttreelistMetaData = (function () {
    function exttreelistMetaData() {
    }
    exttreelistMetaData.XTYPE = 'treelist';
    exttreelistMetaData.INPUTNAMES = [
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
    exttreelistMetaData.OUTPUTS = [
        { name: 'beforetofront', parameters: 'treelist' },
        { name: 'tofront', parameters: 'treelist' },
        { name: 'ready', parameters: '' }
    ];
    exttreelistMetaData.OUTPUTNAMES = [
        'beforetofront',
        'tofront',
        'ready'
    ];
    return exttreelistMetaData;
}());
var exttreelist = (function (_super) {
    __extends(exttreelist, _super);
    function exttreelist(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, exttreelistMetaData);
    }
    exttreelist.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    exttreelist.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, exttreelistMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], exttreelist.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], exttreelist.prototype, "dynamicRef", void 0);
    exttreelist = __decorate([
        core_1.Component({
            selector: 'ext-' + exttreelistMetaData.XTYPE,
            inputs: exttreelistMetaData.INPUTNAMES,
            outputs: exttreelistMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return exttreelist; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], exttreelist);
    return exttreelist;
}(ext_base_1.extbase));
exports.exttreelist = exttreelist;
