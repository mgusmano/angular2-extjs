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
var extfileinputMetaData = (function () {
    function extfileinputMetaData() {
    }
    extfileinputMetaData.XTYPE = 'fileinput';
    extfileinputMetaData.INPUTNAMES = [
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
        'me',
        'minHeight',
        'minValue',
        'minWidth',
        'modal',
        'name',
        'newValue',
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
    extfileinputMetaData.OUTPUTS = [
        { name: 'added', parameters: 'fileinput,container,index' },
        { name: 'beforehide', parameters: 'fileinput' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'fileinput' },
        { name: 'beforetofront', parameters: 'fileinput' },
        { name: 'blur', parameters: 'e' },
        { name: 'change', parameters: 'fileinput,newValue,oldValue' },
        { name: 'click', parameters: 'e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'fileinput' },
        { name: 'floatingchange', parameters: 'fileinput,positioned' },
        { name: 'focus', parameters: 'e' },
        { name: 'fullscreen', parameters: 'fileinput' },
        { name: 'hide', parameters: 'fileinput' },
        { name: 'initialize', parameters: 'fileinput' },
        { name: 'keyup', parameters: 'e' },
        { name: 'masktap', parameters: 'fileinput,e' },
        { name: 'mousedown', parameters: 'e' },
        { name: 'moved', parameters: 'fileinput,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'e' },
        { name: 'positionedchange', parameters: 'fileinput,positioned' },
        { name: 'removed', parameters: 'fileinput,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'fileinput' },
        { name: 'tofront', parameters: 'fileinput' },
        { name: 'updatedata', parameters: 'fileinput,newData' },
        { name: 'ready', parameters: '' }
    ];
    extfileinputMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'blur',
        'change',
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
    return extfileinputMetaData;
}());
var extfileinput = (function (_super) {
    __extends(extfileinput, _super);
    function extfileinput(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extfileinputMetaData);
    }
    extfileinput.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extfileinput.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extfileinputMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extfileinput.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extfileinput.prototype, "dynamicRef", void 0);
    extfileinput = __decorate([
        core_1.Component({
            selector: 'ext-' + extfileinputMetaData.XTYPE,
            inputs: extfileinputMetaData.INPUTNAMES,
            outputs: extfileinputMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extfileinput; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extfileinput);
    return extfileinput;
}(ext_base_1.extbase));
exports.extfileinput = extfileinput;
