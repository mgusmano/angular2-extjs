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
var extcheckboxfieldMetaData = (function () {
    function extcheckboxfieldMetaData() {
    }
    extcheckboxfieldMetaData.XTYPE = 'checkboxfield';
    extcheckboxfieldMetaData.INPUTNAMES = [
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
    extcheckboxfieldMetaData.OUTPUTS = [
        { name: 'added', parameters: 'checkboxfield,container,index' },
        { name: 'beforehide', parameters: 'checkboxfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'checkboxfield' },
        { name: 'beforetofront', parameters: 'checkboxfield' },
        { name: 'change', parameters: 'checkboxfield,newValue,oldValue' },
        { name: 'check', parameters: 'checkboxfield' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'checkboxfield' },
        { name: 'floatingchange', parameters: 'checkboxfield,positioned' },
        { name: 'fullscreen', parameters: 'checkboxfield' },
        { name: 'hide', parameters: 'checkboxfield' },
        { name: 'initialize', parameters: 'checkboxfield' },
        { name: 'moved', parameters: 'checkboxfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'checkboxfield,positioned' },
        { name: 'removed', parameters: 'checkboxfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'checkboxfield' },
        { name: 'tofront', parameters: 'checkboxfield' },
        { name: 'uncheck', parameters: 'checkboxfield' },
        { name: 'updatedata', parameters: 'checkboxfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    extcheckboxfieldMetaData.OUTPUTNAMES = [
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
    return extcheckboxfieldMetaData;
}());
var extcheckboxfield = (function (_super) {
    __extends(extcheckboxfield, _super);
    function extcheckboxfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcheckboxfieldMetaData);
    }
    extcheckboxfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcheckboxfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcheckboxfieldMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcheckboxfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcheckboxfield.prototype, "dynamicRef", void 0);
    extcheckboxfield = __decorate([
        core_1.Component({
            selector: 'ext-' + extcheckboxfieldMetaData.XTYPE,
            inputs: extcheckboxfieldMetaData.INPUTNAMES,
            outputs: extcheckboxfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcheckboxfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcheckboxfield);
    return extcheckboxfield;
}(ext_base_1.extbase));
exports.extcheckboxfield = extcheckboxfield;
