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
var xsinglesliderfieldMetaData = (function () {
    function xsinglesliderfieldMetaData() {
    }
    xsinglesliderfieldMetaData.XTYPE = 'singlesliderfield';
    xsinglesliderfieldMetaData.INPUTNAMES = [
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
        'increment',
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
        'liveUpdate',
        'margin',
        'maxHeight',
        'maxValue',
        'maxWidth',
        'minHeight',
        'minValue',
        'minWidth',
        'modal',
        'name',
        'padding',
        'plugins',
        'publishes',
        'readOnly',
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
        'values',
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
    xsinglesliderfieldMetaData.OUTPUTS = [
        { name: 'added', parameters: 'singlesliderfield,container,index' },
        { name: 'beforehide', parameters: 'singlesliderfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'singlesliderfield' },
        { name: 'beforetofront', parameters: 'singlesliderfield' },
        { name: 'change', parameters: 'me,newValue,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'drag', parameters: 'singlesliderfield,sl,thumb,e' },
        { name: 'dragchange', parameters: 'me,newValue,oldValue' },
        { name: 'dragchange', parameters: 'me,sl,newValue,oldValue' },
        { name: 'dragend', parameters: 'singlesliderfield,sl,thumb,value,e' },
        { name: 'dragstart', parameters: 'singlesliderfield,sl,thumb,value,e' },
        { name: 'erased', parameters: 'singlesliderfield' },
        { name: 'floatingchange', parameters: 'singlesliderfield,positioned' },
        { name: 'fullscreen', parameters: 'singlesliderfield' },
        { name: 'hide', parameters: 'singlesliderfield' },
        { name: 'initialize', parameters: 'singlesliderfield' },
        { name: 'moved', parameters: 'singlesliderfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'singlesliderfield,positioned' },
        { name: 'removed', parameters: 'singlesliderfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'singlesliderfield' },
        { name: 'tofront', parameters: 'singlesliderfield' },
        { name: 'updatedata', parameters: 'singlesliderfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    xsinglesliderfieldMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'change',
        'destroy',
        'drag',
        'dragchange',
        'dragchange',
        'dragend',
        'dragstart',
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
    return xsinglesliderfieldMetaData;
}());
var xsinglesliderfield = (function (_super) {
    __extends(xsinglesliderfield, _super);
    function xsinglesliderfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xsinglesliderfieldMetaData);
    }
    xsinglesliderfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xsinglesliderfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xsinglesliderfieldMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xsinglesliderfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xsinglesliderfield.prototype, "dynamicRef", void 0);
    xsinglesliderfield = __decorate([
        core_1.Component({
            selector: 'x-' + xsinglesliderfieldMetaData.XTYPE,
            inputs: xsinglesliderfieldMetaData.INPUTNAMES,
            outputs: xsinglesliderfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xsinglesliderfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xsinglesliderfield);
    return xsinglesliderfield;
}(x_base_1.xbase));
exports.xsinglesliderfield = xsinglesliderfield;
