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
var extselectfieldMetaData = (function () {
    function extselectfieldMetaData() {
    }
    extselectfieldMetaData.XTYPE = 'selectfield';
    extselectfieldMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'autoCapitalize',
        'autoComplete',
        'autoCorrect',
        'autoSelect',
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
        'defaultPhonePickerConfig',
        'defaultTabletPickerConfig',
        'disabled',
        'displayField',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hiddenName',
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
        'options',
        'padding',
        'pickerSlotAlign',
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
        'selection',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'store',
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
        'useClearIcon',
        'usePicker',
        'userCls',
        'value',
        'valueField',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'fit',
        'config'
    ];
    extselectfieldMetaData.OUTPUTS = [
        { name: 'action', parameters: 'selectfield,e' },
        { name: 'added', parameters: 'selectfield,container,index' },
        { name: 'beforehide', parameters: 'selectfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'selectfield' },
        { name: 'beforetofront', parameters: 'selectfield' },
        { name: 'blur', parameters: 'selectfield,e' },
        { name: 'change', parameters: 'selectfield,newValue,oldValue' },
        { name: 'clearicontap', parameters: 'selectfield,input,e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'selectfield' },
        { name: 'floatingchange', parameters: 'selectfield,positioned' },
        { name: 'focus', parameters: 'selectfield,e' },
        { name: 'fullscreen', parameters: 'selectfield' },
        { name: 'hide', parameters: 'selectfield' },
        { name: 'initialize', parameters: 'selectfield' },
        { name: 'keyup', parameters: 'selectfield,e' },
        { name: 'mousedown', parameters: 'selectfield,e' },
        { name: 'moved', parameters: 'selectfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'selectfield,e' },
        { name: 'positionedchange', parameters: 'selectfield,positioned' },
        { name: 'removed', parameters: 'selectfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'selectfield' },
        { name: 'tofront', parameters: 'selectfield' },
        { name: 'updatedata', parameters: 'selectfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    extselectfieldMetaData.OUTPUTNAMES = [
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
    return extselectfieldMetaData;
}());
var extselectfield = (function (_super) {
    __extends(extselectfield, _super);
    function extselectfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extselectfieldMetaData);
    }
    extselectfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extselectfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extselectfieldMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extselectfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extselectfield.prototype, "dynamicRef", void 0);
    extselectfield = __decorate([
        core_1.Component({
            selector: 'ext-' + extselectfieldMetaData.XTYPE,
            inputs: extselectfieldMetaData.INPUTNAMES,
            outputs: extselectfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extselectfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extselectfield);
    return extselectfield;
}(ext_base_1.extbase));
exports.extselectfield = extselectfield;
