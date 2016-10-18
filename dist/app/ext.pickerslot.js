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
var extpickerslotMetaData = (function () {
    function extpickerslotMetaData() {
    }
    extpickerslotMetaData.XTYPE = 'pickerslot';
    extpickerslotMetaData.INPUTNAMES = [
        'activeItem',
        'align',
        'allowDeselect',
        'alwaysOnTop',
        'autoDestroy',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'cardSwitchAnimation',
        'centered',
        'cls',
        'contentEl',
        'control',
        'controller',
        'data',
        'defaultListenerScope',
        'defaults',
        'defaultType',
        'deferEmptyText',
        'deselectOnContainerClick',
        'disabled',
        'disableSelection',
        'displayField',
        'docked',
        'draggable',
        'emptyText',
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
        'inline',
        'itemCls',
        'itemConfig',
        'itemId',
        'items',
        'itemTpl',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'lastFocused',
        'lastSelected',
        'layout',
        'left',
        'listeners',
        'loadingText',
        'locked',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxItemCache',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'mode',
        'name',
        'padding',
        'plugins',
        'pressedDelay',
        'publishes',
        'record',
        'reference',
        'referenceHolder',
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'scrollToTopOnRefresh',
        'selection',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'showTitle',
        'store',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'title',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggerCtEvent',
        'triggerEvent',
        'twoWayBindable',
        'ui',
        'useBodyElement',
        'useComponents',
        'userCls',
        'value',
        'valueField',
        'verticallyCenterItems',
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
    extpickerslotMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,pickerslot,oldActiveItem' },
        { name: 'add', parameters: '' },
        { name: 'added', parameters: 'pickerslot,container,index' },
        { name: 'beforehide', parameters: 'pickerslot' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeselectionchange', parameters: 'pickerslot' },
        { name: 'beforeshow', parameters: 'pickerslot' },
        { name: 'beforetofront', parameters: 'pickerslot' },
        { name: 'containertap', parameters: '' },
        { name: 'deactivate', parameters: 'oldActiveItem,pickerslot,newActiveItem' },
        { name: 'deselect', parameters: 'pickerslot,record,supressed' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'pickerslot' },
        { name: 'floatingchange', parameters: 'pickerslot,positioned' },
        { name: 'fullscreen', parameters: 'pickerslot' },
        { name: 'hide', parameters: 'pickerslot' },
        { name: 'initialize', parameters: 'pickerslot' },
        { name: 'itemdoubletap', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemmouseenter', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemmouseleave', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemsingletap', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemswipe', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtap', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtaphold', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtouchend', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtouchmove', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtouchstart', parameters: 'pickerslot,index,target,record,e' },
        { name: 'move', parameters: '' },
        { name: 'moved', parameters: 'pickerslot,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'pickerslot,positioned' },
        { name: 'refresh', parameters: 'pickerslot' },
        { name: 'remove', parameters: '' },
        { name: 'removed', parameters: 'pickerslot,container,index' },
        { name: 'renderedchange', parameters: 'pickerslot,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'select', parameters: 'pickerslot,record' },
        { name: 'selectionchange', parameters: 'pickerslot,records' },
        { name: 'show', parameters: 'pickerslot' },
        { name: 'slotpick', parameters: 'pickerslot,value,node' },
        { name: 'tofront', parameters: 'pickerslot' },
        { name: 'updatedata', parameters: 'pickerslot,newData' },
        { name: 'ready', parameters: '' }
    ];
    extpickerslotMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeselectionchange',
        'beforeshow',
        'beforetofront',
        'containertap',
        'deactivate',
        'deselect',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'itemdoubletap',
        'itemmouseenter',
        'itemmouseleave',
        'itemsingletap',
        'itemswipe',
        'itemtap',
        'itemtaphold',
        'itemtouchend',
        'itemtouchmove',
        'itemtouchstart',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'refresh',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'select',
        'selectionchange',
        'show',
        'slotpick',
        'tofront',
        'updatedata',
        'ready'
    ];
    return extpickerslotMetaData;
}());
var extpickerslot = (function (_super) {
    __extends(extpickerslot, _super);
    function extpickerslot(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extpickerslotMetaData);
    }
    extpickerslot.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extpickerslot.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extpickerslotMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extpickerslot.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extpickerslot.prototype, "dynamicRef", void 0);
    extpickerslot = __decorate([
        core_1.Component({
            selector: 'ext-' + extpickerslotMetaData.XTYPE,
            inputs: extpickerslotMetaData.INPUTNAMES,
            outputs: extpickerslotMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extpickerslot; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extpickerslot);
    return extpickerslot;
}(ext_base_1.extbase));
exports.extpickerslot = extpickerslot;
