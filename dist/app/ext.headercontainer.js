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
var extheadercontainerMetaData = (function () {
    function extheadercontainerMetaData() {
    }
    extheadercontainerMetaData.XTYPE = 'headercontainer';
    extheadercontainerMetaData.INPUTNAMES = [
        'activeItem',
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
        'defaultColumnUI',
        'defaultListenerScope',
        'defaults',
        'defaultType',
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
        'sortable',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
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
    extheadercontainerMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,headercontainer,oldActiveItem' },
        { name: 'add', parameters: 'headercontainer,item,index' },
        { name: 'added', parameters: 'headercontainer,container,index' },
        { name: 'beforehide', parameters: 'headercontainer' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'headercontainer' },
        { name: 'beforetofront', parameters: 'headercontainer' },
        { name: 'deactivate', parameters: 'oldActiveItem,headercontainer,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'headercontainer' },
        { name: 'floatingchange', parameters: 'headercontainer,positioned' },
        { name: 'fullscreen', parameters: 'headercontainer' },
        { name: 'hide', parameters: 'headercontainer' },
        { name: 'initialize', parameters: 'headercontainer' },
        { name: 'move', parameters: 'headercontainer,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'headercontainer,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'headercontainer,positioned' },
        { name: 'remove', parameters: 'headercontainer,item,index' },
        { name: 'removed', parameters: 'headercontainer,container,index' },
        { name: 'renderedchange', parameters: 'headercontainer,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'headercontainer' },
        { name: 'tofront', parameters: 'headercontainer' },
        { name: 'updatedata', parameters: 'headercontainer,newData' },
        { name: 'ready', parameters: '' }
    ];
    extheadercontainerMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
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
    return extheadercontainerMetaData;
}());
var extheadercontainer = (function (_super) {
    __extends(extheadercontainer, _super);
    function extheadercontainer(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extheadercontainerMetaData);
    }
    extheadercontainer.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extheadercontainer.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extheadercontainerMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extheadercontainer.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extheadercontainer.prototype, "dynamicRef", void 0);
    extheadercontainer = __decorate([
        core_1.Component({
            selector: 'ext-' + extheadercontainerMetaData.XTYPE,
            inputs: extheadercontainerMetaData.INPUTNAMES,
            outputs: extheadercontainerMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extheadercontainer; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extheadercontainer);
    return extheadercontainer;
}(ext_base_1.extbase));
exports.extheadercontainer = extheadercontainer;
