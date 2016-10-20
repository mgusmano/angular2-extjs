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
var xdatepickerfieldMetaData = (function () {
    function xdatepickerfieldMetaData() {
    }
    xdatepickerfieldMetaData.XTYPE = 'datepickerfield';
    xdatepickerfieldMetaData.INPUTNAMES = [
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
        'dateFormat',
        'defaultListenerScope',
        'defaultPhonePickerConfig',
        'defaultTabletPickerConfig',
        'destroyPickerOnHide',
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
        'picker',
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
        'usePicker',
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
    xdatepickerfieldMetaData.OUTPUTS = [
        { name: 'action', parameters: 'datepickerfield,e' },
        { name: 'added', parameters: 'datepickerfield,container,index' },
        { name: 'beforehide', parameters: 'datepickerfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'datepickerfield' },
        { name: 'beforetofront', parameters: 'datepickerfield' },
        { name: 'blur', parameters: 'datepickerfield,e' },
        { name: 'change', parameters: 'datepickerfield,newDate,oldDate' },
        { name: 'clearicontap', parameters: 'datepickerfield,input,e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'datepickerfield' },
        { name: 'floatingchange', parameters: 'datepickerfield,positioned' },
        { name: 'focus', parameters: 'datepickerfield,e' },
        { name: 'fullscreen', parameters: 'datepickerfield' },
        { name: 'hide', parameters: 'datepickerfield' },
        { name: 'initialize', parameters: 'datepickerfield' },
        { name: 'keyup', parameters: 'datepickerfield,e' },
        { name: 'mousedown', parameters: 'datepickerfield,e' },
        { name: 'moved', parameters: 'datepickerfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'datepickerfield,e' },
        { name: 'positionedchange', parameters: 'datepickerfield,positioned' },
        { name: 'removed', parameters: 'datepickerfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'datepickerfield' },
        { name: 'tofront', parameters: 'datepickerfield' },
        { name: 'updatedata', parameters: 'datepickerfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    xdatepickerfieldMetaData.OUTPUTNAMES = [
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
    return xdatepickerfieldMetaData;
}());
var xdatepickerfield = (function (_super) {
    __extends(xdatepickerfield, _super);
    function xdatepickerfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xdatepickerfieldMetaData);
    }
    xdatepickerfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xdatepickerfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xdatepickerfieldMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xdatepickerfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xdatepickerfield.prototype, "dynamicRef", void 0);
    xdatepickerfield = __decorate([
        core_1.Component({
            selector: 'x-' + xdatepickerfieldMetaData.XTYPE,
            inputs: xdatepickerfieldMetaData.INPUTNAMES,
            outputs: xdatepickerfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xdatepickerfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xdatepickerfield);
    return xdatepickerfield;
}(x_base_1.xbase));
exports.xdatepickerfield = xdatepickerfield;
