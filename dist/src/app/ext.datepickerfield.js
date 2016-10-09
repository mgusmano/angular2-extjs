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
var extdatepickerfieldMetaData = (function () {
    function extdatepickerfieldMetaData() {
    }
    extdatepickerfieldMetaData.XTYPE = 'datepickerfield';
    extdatepickerfieldMetaData.INPUTNAMES = [
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
        'fit',
        'config'
    ];
    extdatepickerfieldMetaData.OUTPUTS = [
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
    extdatepickerfieldMetaData.OUTPUTNAMES = [
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
    return extdatepickerfieldMetaData;
}());
var extdatepickerfield = (function (_super) {
    __extends(extdatepickerfield, _super);
    function extdatepickerfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extdatepickerfieldMetaData);
    }
    extdatepickerfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extdatepickerfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extdatepickerfieldMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extdatepickerfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extdatepickerfield.prototype, "dynamicRef", void 0);
    extdatepickerfield = __decorate([
        core_1.Component({
            selector: 'ext-' + extdatepickerfieldMetaData.XTYPE,
            inputs: extdatepickerfieldMetaData.INPUTNAMES,
            outputs: extdatepickerfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extdatepickerfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extdatepickerfield);
    return extdatepickerfield;
}(ext_base_1.extbase));
exports.extdatepickerfield = extdatepickerfield;
