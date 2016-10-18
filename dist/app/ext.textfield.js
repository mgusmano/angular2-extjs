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
var exttextfieldMetaData = (function () {
    function exttextfieldMetaData() {
    }
    exttextfieldMetaData.XTYPE = 'textfield';
    exttextfieldMetaData.INPUTNAMES = [
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
    exttextfieldMetaData.OUTPUTS = [
        { name: 'action', parameters: 'textfield,e' },
        { name: 'added', parameters: 'textfield,container,index' },
        { name: 'beforehide', parameters: 'textfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'textfield' },
        { name: 'beforetofront', parameters: 'textfield' },
        { name: 'blur', parameters: 'textfield,e' },
        { name: 'change', parameters: 'textfield,newValue,oldValue' },
        { name: 'clearicontap', parameters: 'textfield,input,e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'textfield' },
        { name: 'floatingchange', parameters: 'textfield,positioned' },
        { name: 'focus', parameters: 'textfield,e' },
        { name: 'fullscreen', parameters: 'textfield' },
        { name: 'hide', parameters: 'textfield' },
        { name: 'initialize', parameters: 'textfield' },
        { name: 'keyup', parameters: 'textfield,e' },
        { name: 'mousedown', parameters: 'textfield,e' },
        { name: 'moved', parameters: 'textfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'textfield,e' },
        { name: 'positionedchange', parameters: 'textfield,positioned' },
        { name: 'removed', parameters: 'textfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'textfield' },
        { name: 'tofront', parameters: 'textfield' },
        { name: 'updatedata', parameters: 'textfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    exttextfieldMetaData.OUTPUTNAMES = [
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
    return exttextfieldMetaData;
}());
var exttextfield = (function (_super) {
    __extends(exttextfield, _super);
    function exttextfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, exttextfieldMetaData);
    }
    exttextfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    exttextfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, exttextfieldMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], exttextfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], exttextfield.prototype, "dynamicRef", void 0);
    exttextfield = __decorate([
        core_1.Component({
            selector: 'ext-' + exttextfieldMetaData.XTYPE,
            inputs: exttextfieldMetaData.INPUTNAMES,
            outputs: exttextfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return exttextfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], exttextfield);
    return exttextfield;
}(ext_base_1.extbase));
exports.exttextfield = exttextfield;
