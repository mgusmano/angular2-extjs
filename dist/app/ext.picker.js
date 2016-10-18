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
var extpickerMetaData = (function () {
    function extpickerMetaData() {
    }
    extpickerMetaData.XTYPE = 'picker';
    extpickerMetaData.INPUTNAMES = [
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
    extpickerMetaData.OUTPUTS = [
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
    extpickerMetaData.OUTPUTNAMES = [
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
    return extpickerMetaData;
}());
var extpicker = (function (_super) {
    __extends(extpicker, _super);
    function extpicker(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extpickerMetaData);
    }
    extpicker.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extpicker.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extpickerMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extpicker.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extpicker.prototype, "dynamicRef", void 0);
    extpicker = __decorate([
        core_1.Component({
            selector: 'ext-' + extpickerMetaData.XTYPE,
            inputs: extpickerMetaData.INPUTNAMES,
            outputs: extpickerMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extpicker; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extpicker);
    return extpicker;
}(ext_base_1.extbase));
exports.extpicker = extpicker;
