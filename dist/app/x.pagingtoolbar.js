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
var xpagingtoolbarMetaData = (function () {
    function xpagingtoolbarMetaData() {
    }
    xpagingtoolbarMetaData.XTYPE = 'pagingtoolbar';
    xpagingtoolbarMetaData.INPUTNAMES = [
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
        'nextButton',
        'padding',
        'plugins',
        'prevButton',
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
        'sliderField',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'summaryComponent',
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
        'fittoparent',
        'config'
    ];
    xpagingtoolbarMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,pagingtoolbar,oldActiveItem' },
        { name: 'add', parameters: 'pagingtoolbar,item,index' },
        { name: 'added', parameters: 'pagingtoolbar,container,index' },
        { name: 'beforehide', parameters: 'pagingtoolbar' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'pagingtoolbar' },
        { name: 'beforetofront', parameters: 'pagingtoolbar' },
        { name: 'deactivate', parameters: 'oldActiveItem,pagingtoolbar,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'pagingtoolbar' },
        { name: 'floatingchange', parameters: 'pagingtoolbar,positioned' },
        { name: 'fullscreen', parameters: 'pagingtoolbar' },
        { name: 'hide', parameters: 'pagingtoolbar' },
        { name: 'initialize', parameters: 'pagingtoolbar' },
        { name: 'move', parameters: 'pagingtoolbar,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'pagingtoolbar,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'pagingtoolbar,positioned' },
        { name: 'remove', parameters: 'pagingtoolbar,item,index' },
        { name: 'removed', parameters: 'pagingtoolbar,container,index' },
        { name: 'renderedchange', parameters: 'pagingtoolbar,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'pagingtoolbar' },
        { name: 'tofront', parameters: 'pagingtoolbar' },
        { name: 'updatedata', parameters: 'pagingtoolbar,newData' },
        { name: 'ready', parameters: '' }
    ];
    xpagingtoolbarMetaData.OUTPUTNAMES = [
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
    return xpagingtoolbarMetaData;
}());
var xpagingtoolbar = (function (_super) {
    __extends(xpagingtoolbar, _super);
    function xpagingtoolbar(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xpagingtoolbarMetaData);
    }
    xpagingtoolbar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xpagingtoolbar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xpagingtoolbarMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xpagingtoolbar.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xpagingtoolbar.prototype, "dynamicRef", void 0);
    xpagingtoolbar = __decorate([
        core_1.Component({
            selector: 'x-' + xpagingtoolbarMetaData.XTYPE,
            inputs: xpagingtoolbarMetaData.INPUTNAMES,
            outputs: xpagingtoolbarMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xpagingtoolbar; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xpagingtoolbar);
    return xpagingtoolbar;
}(x_base_1.xbase));
exports.xpagingtoolbar = xpagingtoolbar;
