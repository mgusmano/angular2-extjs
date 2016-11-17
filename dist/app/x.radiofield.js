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
var xradiofieldMetaData = (function () {
    function xradiofieldMetaData() {
    }
    xradiofieldMetaData.XTYPE = 'radiofield';
    xradiofieldMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
        'baseCls',
        'bind',
        'bodyAlign',
        'border',
        'bottom',
        'centered',
        'checked',
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
        'labelMaskTap',
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
    xradiofieldMetaData.OUTPUTS = [
        { name: 'added', parameters: 'radiofield,container,index' },
        { name: 'beforehide', parameters: 'radiofield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'radiofield' },
        { name: 'beforetofront', parameters: 'radiofield' },
        { name: 'change', parameters: 'radiofield,newValue,oldValue' },
        { name: 'check', parameters: 'radiofield' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'radiofield' },
        { name: 'floatingchange', parameters: 'radiofield,positioned' },
        { name: 'fullscreen', parameters: 'radiofield' },
        { name: 'hide', parameters: 'radiofield' },
        { name: 'initialize', parameters: 'radiofield' },
        { name: 'moved', parameters: 'radiofield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'radiofield,positioned' },
        { name: 'removed', parameters: 'radiofield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'radiofield' },
        { name: 'tofront', parameters: 'radiofield' },
        { name: 'uncheck', parameters: 'radiofield' },
        { name: 'updatedata', parameters: 'radiofield,newData' },
        { name: 'ready', parameters: '' }
    ];
    xradiofieldMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'change',
        'check',
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
        'uncheck',
        'updatedata',
        'ready'
    ];
    return xradiofieldMetaData;
}());
var xradiofield = (function (_super) {
    __extends(xradiofield, _super);
    function xradiofield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xradiofieldMetaData);
    }
    xradiofield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xradiofield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xradiofieldMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xradiofield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xradiofield.prototype, "dynamicRef", void 0);
    xradiofield = __decorate([
        core_1.Component({
            selector: 'x-' + xradiofieldMetaData.XTYPE,
            inputs: xradiofieldMetaData.INPUTNAMES,
            outputs: xradiofieldMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xradiofield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xradiofield);
    return xradiofield;
}(x_base_1.xbase));
exports.xradiofield = xradiofield;
