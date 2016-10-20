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
var xpickerMetaData = (function () {
    function xpickerMetaData() {
    }
    xpickerMetaData.XTYPE = 'picker';
    xpickerMetaData.INPUTNAMES = [
        'activeItem',
        'alwaysOnTop',
        'anchor',
        'anchorPosition',
        'autoDestroy',
        'axisLock',
        'baseCls',
        'bind',
        'bodyBorder',
        'bodyPadding',
        'border',
        'bottom',
        'cancelButton',
        'cardSwitchAnimation',
        'centered',
        'closable',
        'closeAction',
        'closeToolText',
        'cls',
        'contentEl',
        'control',
        'controller',
        'data',
        'defaultListenerScope',
        'defaults',
        'defaultType',
        'disabled',
        'docked',
        'doneButton',
        'draggable',
        'enter',
        'enterAnimation',
        'exit',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'header',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'icon',
        'iconCls',
        'id',
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'left',
        'listeners',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'referenceHolder',
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'slots',
        'stretchX',
        'stretchY',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'title',
        'toFrontOnShow',
        'toolbar',
        'tools',
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
        'useTitles',
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
    xpickerMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,picker,oldActiveItem' },
        { name: 'add', parameters: 'picker,item,index' },
        { name: 'added', parameters: 'picker,container,index' },
        { name: 'beforehide', parameters: 'picker' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'picker' },
        { name: 'beforetofront', parameters: 'picker' },
        { name: 'cancel', parameters: 'picker' },
        { name: 'change', parameters: 'picker,values' },
        { name: 'deactivate', parameters: 'oldActiveItem,picker,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'picker' },
        { name: 'floatingchange', parameters: 'picker,positioned' },
        { name: 'fullscreen', parameters: 'picker' },
        { name: 'hide', parameters: 'picker' },
        { name: 'initialize', parameters: 'picker' },
        { name: 'move', parameters: 'picker,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'picker,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'pick', parameters: 'picker,values,slot' },
        { name: 'positionedchange', parameters: 'picker,positioned' },
        { name: 'remove', parameters: 'picker,item,index' },
        { name: 'removed', parameters: 'picker,container,index' },
        { name: 'renderedchange', parameters: 'picker,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'picker' },
        { name: 'tofront', parameters: 'picker' },
        { name: 'updatedata', parameters: 'picker,newData' },
        { name: 'ready', parameters: '' }
    ];
    xpickerMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'cancel',
        'change',
        'deactivate',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'pick',
        'positionedchange',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xpickerMetaData;
}());
var xpicker = (function (_super) {
    __extends(xpicker, _super);
    function xpicker(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xpickerMetaData);
    }
    xpicker.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xpicker.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xpickerMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xpicker.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xpicker.prototype, "dynamicRef", void 0);
    xpicker = __decorate([
        core_1.Component({
            selector: 'x-' + xpickerMetaData.XTYPE,
            inputs: xpickerMetaData.INPUTNAMES,
            outputs: xpickerMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xpicker; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xpicker);
    return xpicker;
}(x_base_1.xbase));
exports.xpicker = xpicker;
