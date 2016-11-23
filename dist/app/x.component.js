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
var xcomponentMetaData = (function () {
    function xcomponentMetaData() {
    }
    xcomponentMetaData.XTYPE = 'component';
    xcomponentMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'cls',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'useBodyElement',
        'userCls',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fittoparent',
        'config'
    ];
    xcomponentMetaData.OUTPUTS = [
        { name: 'added', parameters: 'component,container,index' },
        { name: 'beforehide', parameters: 'component' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'component' },
        { name: 'beforetofront', parameters: 'component' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'component' },
        { name: 'floatingchange', parameters: 'component,positioned' },
        { name: 'fullscreen', parameters: 'component' },
        { name: 'hide', parameters: 'component' },
        { name: 'initialize', parameters: 'component' },
        { name: 'moved', parameters: 'component,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'component,positioned' },
        { name: 'removed', parameters: 'component,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'component' },
        { name: 'tofront', parameters: 'component' },
        { name: 'updatedata', parameters: 'component,newData' },
        { name: 'ready', parameters: '' }
    ];
    xcomponentMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'removed',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xcomponentMetaData;
}());
var xcomponent = (function (_super) {
    __extends(xcomponent, _super);
    function xcomponent(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcomponentMetaData);
    }
    xcomponent.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcomponent.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcomponentMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcomponent.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcomponent.prototype, "dynamicRef", void 0);
    xcomponent = __decorate([
        core_1.Component({
            selector: 'x-' + xcomponentMetaData.XTYPE,
            inputs: xcomponentMetaData.INPUTNAMES,
            outputs: xcomponentMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcomponent; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcomponent);
    return xcomponent;
}(x_base_1.xbase));
exports.xcomponent = xcomponent;
