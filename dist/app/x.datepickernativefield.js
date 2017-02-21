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
var xdatepickernativefieldMetaData = (function () {
    function xdatepickernativefieldMetaData() {
    }
    xdatepickernativefieldMetaData.XTYPE = 'datepickernativefield';
    xdatepickernativefieldMetaData.INPUTNAMES = [
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
    xdatepickernativefieldMetaData.OUTPUTS = [
        { name: 'action', parameters: 'datepickernativefield,e' },
        { name: 'added', parameters: 'datepickernativefield,container,index' },
        { name: 'beforehide', parameters: 'datepickernativefield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'datepickernativefield' },
        { name: 'beforetofront', parameters: 'datepickernativefield' },
        { name: 'blur', parameters: 'datepickernativefield,e' },
        { name: 'change', parameters: 'datepickernativefield,newDate,oldDate' },
        { name: 'clearicontap', parameters: 'datepickernativefield,input,e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'datepickernativefield' },
        { name: 'floatingchange', parameters: 'datepickernativefield,positioned' },
        { name: 'focus', parameters: 'datepickernativefield,e' },
        { name: 'fullscreen', parameters: 'datepickernativefield' },
        { name: 'hide', parameters: 'datepickernativefield' },
        { name: 'initialize', parameters: 'datepickernativefield' },
        { name: 'keyup', parameters: 'datepickernativefield,e' },
        { name: 'mousedown', parameters: 'datepickernativefield,e' },
        { name: 'moved', parameters: 'datepickernativefield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'datepickernativefield,e' },
        { name: 'positionedchange', parameters: 'datepickernativefield,positioned' },
        { name: 'removed', parameters: 'datepickernativefield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'datepickernativefield' },
        { name: 'tofront', parameters: 'datepickernativefield' },
        { name: 'updatedata', parameters: 'datepickernativefield,newData' },
        { name: 'ready', parameters: '' }
    ];
    xdatepickernativefieldMetaData.OUTPUTNAMES = [
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
    return xdatepickernativefieldMetaData;
}());
var xdatepickernativefield = (function (_super) {
    __extends(xdatepickernativefield, _super);
    function xdatepickernativefield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xdatepickernativefieldMetaData);
    }
    xdatepickernativefield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xdatepickernativefield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xdatepickernativefieldMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xdatepickernativefield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xdatepickernativefield.prototype, "dynamicRef", void 0);
    xdatepickernativefield = __decorate([
        core_1.Component({
            selector: 'x-' + xdatepickernativefieldMetaData.XTYPE,
            inputs: xdatepickernativefieldMetaData.INPUTNAMES,
            outputs: xdatepickernativefieldMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xdatepickernativefield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xdatepickernativefield);
    return xdatepickernativefield;
}(x_base_1.xbase));
exports.xdatepickernativefield = xdatepickernativefield;
