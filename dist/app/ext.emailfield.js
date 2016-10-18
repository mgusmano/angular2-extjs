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
var extemailfieldMetaData = (function () {
    function extemailfieldMetaData() {
    }
    extemailfieldMetaData.XTYPE = 'emailfield';
    extemailfieldMetaData.INPUTNAMES = [
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
    extemailfieldMetaData.OUTPUTS = [
        { name: 'action', parameters: 'emailfield,e' },
        { name: 'added', parameters: 'emailfield,container,index' },
        { name: 'beforehide', parameters: 'emailfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'emailfield' },
        { name: 'beforetofront', parameters: 'emailfield' },
        { name: 'blur', parameters: 'emailfield,e' },
        { name: 'change', parameters: 'emailfield,newValue,oldValue' },
        { name: 'clearicontap', parameters: 'emailfield,input,e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'emailfield' },
        { name: 'floatingchange', parameters: 'emailfield,positioned' },
        { name: 'focus', parameters: 'emailfield,e' },
        { name: 'fullscreen', parameters: 'emailfield' },
        { name: 'hide', parameters: 'emailfield' },
        { name: 'initialize', parameters: 'emailfield' },
        { name: 'keyup', parameters: 'emailfield,e' },
        { name: 'mousedown', parameters: 'emailfield,e' },
        { name: 'moved', parameters: 'emailfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'emailfield,e' },
        { name: 'positionedchange', parameters: 'emailfield,positioned' },
        { name: 'removed', parameters: 'emailfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'emailfield' },
        { name: 'tofront', parameters: 'emailfield' },
        { name: 'updatedata', parameters: 'emailfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    extemailfieldMetaData.OUTPUTNAMES = [
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
    return extemailfieldMetaData;
}());
var extemailfield = (function (_super) {
    __extends(extemailfield, _super);
    function extemailfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extemailfieldMetaData);
    }
    extemailfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extemailfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extemailfieldMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extemailfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extemailfield.prototype, "dynamicRef", void 0);
    extemailfield = __decorate([
        core_1.Component({
            selector: 'ext-' + extemailfieldMetaData.XTYPE,
            inputs: extemailfieldMetaData.INPUTNAMES,
            outputs: extemailfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extemailfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extemailfield);
    return extemailfield;
}(ext_base_1.extbase));
exports.extemailfield = extemailfield;
