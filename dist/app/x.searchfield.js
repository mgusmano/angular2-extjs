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
var xsearchfieldMetaData = (function () {
    function xsearchfieldMetaData() {
    }
    xsearchfieldMetaData.XTYPE = 'searchfield';
    xsearchfieldMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'autoCapitalize',
        'autoComplete',
        'autoCorrect',
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
        'maxLength',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'name',
        'padding',
        'placeHolder',
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
        'textAlign',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggers',
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
    xsearchfieldMetaData.OUTPUTS = [
        { name: 'action', parameters: 'searchfield,e' },
        { name: 'added', parameters: 'searchfield,container,index' },
        { name: 'beforehide', parameters: 'searchfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'searchfield' },
        { name: 'beforetofront', parameters: 'searchfield' },
        { name: 'blur', parameters: 'searchfield,e' },
        { name: 'change', parameters: 'searchfield,newValue,oldValue' },
        { name: 'clearicontap', parameters: 'searchfield,input,e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'searchfield' },
        { name: 'floatingchange', parameters: 'searchfield,positioned' },
        { name: 'focus', parameters: 'searchfield,e' },
        { name: 'fullscreen', parameters: 'searchfield' },
        { name: 'hide', parameters: 'searchfield' },
        { name: 'initialize', parameters: 'searchfield' },
        { name: 'keyup', parameters: 'searchfield,e' },
        { name: 'mousedown', parameters: 'searchfield,e' },
        { name: 'moved', parameters: 'searchfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'searchfield,e' },
        { name: 'positionedchange', parameters: 'searchfield,positioned' },
        { name: 'removed', parameters: 'searchfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'searchfield' },
        { name: 'tofront', parameters: 'searchfield' },
        { name: 'updatedata', parameters: 'searchfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    xsearchfieldMetaData.OUTPUTNAMES = [
        'action',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'blur',
        'change',
        'clearicontap',
        'destroy',
        'erased',
        'floatingchange',
        'focus',
        'fullscreen',
        'hide',
        'initialize',
        'keyup',
        'mousedown',
        'moved',
        'orientationchange',
        'painted',
        'paste',
        'positionedchange',
        'removed',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xsearchfieldMetaData;
}());
var xsearchfield = (function (_super) {
    __extends(xsearchfield, _super);
    function xsearchfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xsearchfieldMetaData);
    }
    xsearchfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xsearchfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xsearchfieldMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xsearchfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xsearchfield.prototype, "dynamicRef", void 0);
    xsearchfield = __decorate([
        core_1.Component({
            selector: 'x-' + xsearchfieldMetaData.XTYPE,
            inputs: xsearchfieldMetaData.INPUTNAMES,
            outputs: xsearchfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xsearchfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xsearchfield);
    return xsearchfield;
}(x_base_1.xbase));
exports.xsearchfield = xsearchfield;
