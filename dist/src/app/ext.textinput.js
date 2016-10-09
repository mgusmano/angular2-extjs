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
var exttextinputMetaData = (function () {
    function exttextinputMetaData() {
    }
    exttextinputMetaData.XTYPE = 'textinput';
    exttextinputMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'autoCapitalize',
        'autoComplete',
        'autoCorrect',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'checked',
        'cls',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'fastFocus',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'isFocused',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxLength',
        'maxRows',
        'maxValue',
        'maxWidth',
        'minHeight',
        'minValue',
        'minWidth',
        'modal',
        'name',
        'originalValue',
        'padding',
        'pattern',
        'placeHolder',
        'plugins',
        'publishes',
        'readOnly',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'startValue',
        'stepValue',
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
        'type',
        'ui',
        'useBodyElement',
        'useMask',
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
    exttextinputMetaData.OUTPUTS = [
        { name: 'added', parameters: 'textinput,container,index' },
        { name: 'beforehide', parameters: 'textinput' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'textinput' },
        { name: 'beforetofront', parameters: 'textinput' },
        { name: 'blur', parameters: 'e' },
        { name: 'click', parameters: 'e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'textinput' },
        { name: 'floatingchange', parameters: 'textinput,positioned' },
        { name: 'focus', parameters: 'e' },
        { name: 'fullscreen', parameters: 'textinput' },
        { name: 'hide', parameters: 'textinput' },
        { name: 'initialize', parameters: 'textinput' },
        { name: 'keyup', parameters: 'e' },
        { name: 'masktap', parameters: 'textinput,e' },
        { name: 'mousedown', parameters: 'e' },
        { name: 'moved', parameters: 'textinput,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'e' },
        { name: 'positionedchange', parameters: 'textinput,positioned' },
        { name: 'removed', parameters: 'textinput,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'textinput' },
        { name: 'tofront', parameters: 'textinput' },
        { name: 'updatedata', parameters: 'textinput,newData' },
        { name: 'ready', parameters: '' }
    ];
    exttextinputMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'blur',
        'click',
        'destroy',
        'erased',
        'floatingchange',
        'focus',
        'fullscreen',
        'hide',
        'initialize',
        'keyup',
        'masktap',
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
    return exttextinputMetaData;
}());
var exttextinput = (function (_super) {
    __extends(exttextinput, _super);
    function exttextinput(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, exttextinputMetaData);
    }
    exttextinput.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    exttextinput.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, exttextinputMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], exttextinput.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], exttextinput.prototype, "dynamicRef", void 0);
    exttextinput = __decorate([
        core_1.Component({
            selector: 'ext-' + exttextinputMetaData.XTYPE,
            inputs: exttextinputMetaData.INPUTNAMES,
            outputs: exttextinputMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return exttextinput; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], exttextinput);
    return exttextinput;
}(ext_base_1.extbase));
exports.exttextinput = exttextinput;
