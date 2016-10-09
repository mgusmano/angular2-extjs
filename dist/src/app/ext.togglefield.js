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
var exttogglefieldMetaData = (function () {
    function exttogglefieldMetaData() {
    }
    exttogglefieldMetaData.XTYPE = 'togglefield';
    exttogglefieldMetaData.INPUTNAMES = [
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
        'fit',
        'config'
    ];
    exttogglefieldMetaData.OUTPUTS = [
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
    exttogglefieldMetaData.OUTPUTNAMES = [
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
    return exttogglefieldMetaData;
}());
var exttogglefield = (function (_super) {
    __extends(exttogglefield, _super);
    function exttogglefield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, exttogglefieldMetaData);
    }
    exttogglefield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    exttogglefield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, exttogglefieldMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], exttogglefield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], exttogglefield.prototype, "dynamicRef", void 0);
    exttogglefield = __decorate([
        core_1.Component({
            selector: 'ext-' + exttogglefieldMetaData.XTYPE,
            inputs: exttogglefieldMetaData.INPUTNAMES,
            outputs: exttogglefieldMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return exttogglefield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], exttogglefield);
    return exttogglefield;
}(ext_base_1.extbase));
exports.exttogglefield = exttogglefield;
