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
var extsearchfieldMetaData = (function () {
    function extsearchfieldMetaData() {
    }
    extsearchfieldMetaData.XTYPE = 'searchfield';
    extsearchfieldMetaData.INPUTNAMES = [
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
        'fit',
        'config'
    ];
    extsearchfieldMetaData.OUTPUTS = [
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
    extsearchfieldMetaData.OUTPUTNAMES = [
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
    return extsearchfieldMetaData;
}());
var extsearchfield = (function (_super) {
    __extends(extsearchfield, _super);
    function extsearchfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extsearchfieldMetaData);
    }
    extsearchfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extsearchfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extsearchfieldMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extsearchfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extsearchfield.prototype, "dynamicRef", void 0);
    extsearchfield = __decorate([
        core_1.Component({
            selector: 'ext-' + extsearchfieldMetaData.XTYPE,
            inputs: extsearchfieldMetaData.INPUTNAMES,
            outputs: extsearchfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extsearchfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extsearchfield);
    return extsearchfield;
}(ext_base_1.extbase));
exports.extsearchfield = extsearchfield;
