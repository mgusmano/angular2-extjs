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
var xhiddenfieldMetaData = (function () {
    function xhiddenfieldMetaData() {
    }
    xhiddenfieldMetaData.XTYPE = 'hiddenfield';
    xhiddenfieldMetaData.INPUTNAMES = [
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
    xhiddenfieldMetaData.OUTPUTS = [
        { name: 'action', parameters: 'hiddenfield,e' },
        { name: 'added', parameters: 'hiddenfield,container,index' },
        { name: 'beforehide', parameters: 'hiddenfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'hiddenfield' },
        { name: 'beforetofront', parameters: 'hiddenfield' },
        { name: 'blur', parameters: 'hiddenfield,e' },
        { name: 'change', parameters: 'hiddenfield,newValue,oldValue' },
        { name: 'clearicontap', parameters: 'hiddenfield,input,e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'hiddenfield' },
        { name: 'floatingchange', parameters: 'hiddenfield,positioned' },
        { name: 'focus', parameters: 'hiddenfield,e' },
        { name: 'fullscreen', parameters: 'hiddenfield' },
        { name: 'hide', parameters: 'hiddenfield' },
        { name: 'initialize', parameters: 'hiddenfield' },
        { name: 'keyup', parameters: 'hiddenfield,e' },
        { name: 'mousedown', parameters: 'hiddenfield,e' },
        { name: 'moved', parameters: 'hiddenfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'hiddenfield,e' },
        { name: 'positionedchange', parameters: 'hiddenfield,positioned' },
        { name: 'removed', parameters: 'hiddenfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'hiddenfield' },
        { name: 'tofront', parameters: 'hiddenfield' },
        { name: 'updatedata', parameters: 'hiddenfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    xhiddenfieldMetaData.OUTPUTNAMES = [
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
    return xhiddenfieldMetaData;
}());
var xhiddenfield = (function (_super) {
    __extends(xhiddenfield, _super);
    function xhiddenfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xhiddenfieldMetaData);
    }
    xhiddenfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xhiddenfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xhiddenfieldMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xhiddenfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xhiddenfield.prototype, "dynamicRef", void 0);
    xhiddenfield = __decorate([
        core_1.Component({
            selector: 'x-' + xhiddenfieldMetaData.XTYPE,
            inputs: xhiddenfieldMetaData.INPUTNAMES,
            outputs: xhiddenfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xhiddenfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xhiddenfield);
    return xhiddenfield;
}(x_base_1.xbase));
exports.xhiddenfield = xhiddenfield;
