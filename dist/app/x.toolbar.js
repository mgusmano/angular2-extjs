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
var xtoolbarMetaData = (function () {
    function xtoolbarMetaData() {
    }
    xtoolbarMetaData.XTYPE = 'toolbar';
    xtoolbarMetaData.INPUTNAMES = [
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
        'defaultButtonUI',
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
    xtoolbarMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,toolbar,oldActiveItem' },
        { name: 'add', parameters: 'toolbar,item,index' },
        { name: 'added', parameters: 'toolbar,container,index' },
        { name: 'beforehide', parameters: 'toolbar' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'toolbar' },
        { name: 'beforetofront', parameters: 'toolbar' },
        { name: 'deactivate', parameters: 'oldActiveItem,toolbar,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'toolbar' },
        { name: 'floatingchange', parameters: 'toolbar,positioned' },
        { name: 'fullscreen', parameters: 'toolbar' },
        { name: 'hide', parameters: 'toolbar' },
        { name: 'initialize', parameters: 'toolbar' },
        { name: 'move', parameters: 'toolbar,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'toolbar,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'toolbar,positioned' },
        { name: 'remove', parameters: 'toolbar,item,index' },
        { name: 'removed', parameters: 'toolbar,container,index' },
        { name: 'renderedchange', parameters: 'toolbar,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'toolbar' },
        { name: 'tofront', parameters: 'toolbar' },
        { name: 'updatedata', parameters: 'toolbar,newData' },
        { name: 'ready', parameters: '' }
    ];
    xtoolbarMetaData.OUTPUTNAMES = [
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
    return xtoolbarMetaData;
}());
var xtoolbar = (function (_super) {
    __extends(xtoolbar, _super);
    function xtoolbar(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xtoolbarMetaData);
    }
    xtoolbar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xtoolbar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xtoolbarMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xtoolbar.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xtoolbar.prototype, "dynamicRef", void 0);
    xtoolbar = __decorate([
        core_1.Component({
            selector: 'x-' + xtoolbarMetaData.XTYPE,
            inputs: xtoolbarMetaData.INPUTNAMES,
            outputs: xtoolbarMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xtoolbar; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xtoolbar);
    return xtoolbar;
}(x_base_1.xbase));
exports.xtoolbar = xtoolbar;
