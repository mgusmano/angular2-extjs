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
var xtogglefieldMetaData = (function () {
    function xtogglefieldMetaData() {
    }
    xtogglefieldMetaData.XTYPE = 'togglefield';
    xtogglefieldMetaData.INPUTNAMES = [
        'activeLabel',
        'alwaysOnTop',
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
        'inactiveLabel',
        'increment',
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
        'liveUpdate',
        'margin',
        'maxHeight',
        'maxValue',
        'maxWidth',
        'minHeight',
        'minValue',
        'minWidth',
        'modal',
        'name',
        'padding',
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
        'values',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fittoparent',
        'config'
    ];
    xtogglefieldMetaData.OUTPUTS = [
        { name: 'added', parameters: 'togglefield,container,index' },
        { name: 'beforehide', parameters: 'togglefield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'togglefield' },
        { name: 'beforetofront', parameters: 'togglefield' },
        { name: 'change', parameters: 'togglefield,newValue,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'drag', parameters: '' },
        { name: 'dragchange', parameters: 'me,newValue,oldValue' },
        { name: 'dragend', parameters: '' },
        { name: 'dragstart', parameters: '' },
        { name: 'erased', parameters: 'togglefield' },
        { name: 'floatingchange', parameters: 'togglefield,positioned' },
        { name: 'fullscreen', parameters: 'togglefield' },
        { name: 'hide', parameters: 'togglefield' },
        { name: 'initialize', parameters: 'togglefield' },
        { name: 'moved', parameters: 'togglefield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'togglefield,positioned' },
        { name: 'removed', parameters: 'togglefield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'togglefield' },
        { name: 'tofront', parameters: 'togglefield' },
        { name: 'updatedata', parameters: 'togglefield,newData' },
        { name: 'ready', parameters: '' }
    ];
    xtogglefieldMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'change',
        'destroy',
        'drag',
        'dragchange',
        'dragend',
        'dragstart',
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
        'updatedata',
        'ready'
    ];
    return xtogglefieldMetaData;
}());
var xtogglefield = (function (_super) {
    __extends(xtogglefield, _super);
    function xtogglefield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xtogglefieldMetaData);
    }
    xtogglefield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xtogglefield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xtogglefieldMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xtogglefield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xtogglefield.prototype, "dynamicRef", void 0);
    xtogglefield = __decorate([
        core_1.Component({
            selector: 'x-' + xtogglefieldMetaData.XTYPE,
            inputs: xtogglefieldMetaData.INPUTNAMES,
            outputs: xtogglefieldMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xtogglefield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xtogglefield);
    return xtogglefield;
}(x_base_1.xbase));
exports.xtogglefield = xtogglefield;
