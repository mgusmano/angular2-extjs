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
var xfieldMetaData = (function () {
    function xfieldMetaData() {
    }
    xfieldMetaData.XTYPE = 'field';
    xfieldMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
        'baseCls',
        'bind',
        'bodyAlign',
        'border',
        'bottom',
        'centered',
        'clearIcon',
        'cls',
        'component',
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
        'inputCls',
        'inputType',
        'isFocused',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'label',
        'labelAlign',
        'labelCls',
        'labelTextAlign',
        'labelWidth',
        'labelWrap',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'name',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderTo',
        'required',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'tabIndex',
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
        'value',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xfieldMetaData.OUTPUTS = [
        { name: 'added', parameters: 'field,container,index' },
        { name: 'beforehide', parameters: 'field' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'field' },
        { name: 'beforetofront', parameters: 'field' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'field' },
        { name: 'floatingchange', parameters: 'field,positioned' },
        { name: 'fullscreen', parameters: 'field' },
        { name: 'hide', parameters: 'field' },
        { name: 'initialize', parameters: 'field' },
        { name: 'moved', parameters: 'field,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'field,positioned' },
        { name: 'removed', parameters: 'field,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'field' },
        { name: 'tofront', parameters: 'field' },
        { name: 'updatedata', parameters: 'field,newData' },
        { name: 'ready', parameters: '' }
    ];
    xfieldMetaData.OUTPUTNAMES = [
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
    return xfieldMetaData;
}());
var xfield = (function (_super) {
    __extends(xfield, _super);
    function xfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xfieldMetaData);
    }
    xfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xfieldMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xfield.prototype, "dynamicRef", void 0);
    xfield = __decorate([
        core_1.Component({
            selector: 'x-' + xfieldMetaData.XTYPE,
            inputs: xfieldMetaData.INPUTNAMES,
            outputs: xfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xfield);
    return xfield;
}(x_base_1.xbase));
exports.xfield = xfield;
