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
var xtabbarMetaData = (function () {
    function xtabbarMetaData() {
    }
    xtabbarMetaData.XTYPE = 'tabbar';
    xtabbarMetaData.INPUTNAMES = [
        'activeItem',
        'activeTab',
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
        'defaultTabUI',
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
        'fittoparent',
        'config'
    ];
    xtabbarMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,tabbar,oldActiveItem' },
        { name: 'add', parameters: 'tabbar,item,index' },
        { name: 'added', parameters: 'tabbar,container,index' },
        { name: 'beforehide', parameters: 'tabbar' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'tabbar' },
        { name: 'beforetofront', parameters: 'tabbar' },
        { name: 'deactivate', parameters: 'oldActiveItem,tabbar,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'tabbar' },
        { name: 'floatingchange', parameters: 'tabbar,positioned' },
        { name: 'fullscreen', parameters: 'tabbar' },
        { name: 'hide', parameters: 'tabbar' },
        { name: 'initialize', parameters: 'tabbar' },
        { name: 'move', parameters: 'tabbar,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'tabbar,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'tabbar,positioned' },
        { name: 'remove', parameters: 'tabbar,item,index' },
        { name: 'removed', parameters: 'tabbar,container,index' },
        { name: 'renderedchange', parameters: 'tabbar,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'tabbar' },
        { name: 'tabchange', parameters: 'tabbar,newTab,oldTab' },
        { name: 'tofront', parameters: 'tabbar' },
        { name: 'updatedata', parameters: 'tabbar,newData' },
        { name: 'ready', parameters: '' }
    ];
    xtabbarMetaData.OUTPUTNAMES = [
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
        'tabchange',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xtabbarMetaData;
}());
var xtabbar = (function (_super) {
    __extends(xtabbar, _super);
    function xtabbar(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xtabbarMetaData);
    }
    xtabbar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xtabbar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xtabbarMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xtabbar.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xtabbar.prototype, "dynamicRef", void 0);
    xtabbar = __decorate([
        core_1.Component({
            selector: 'x-' + xtabbarMetaData.XTYPE,
            inputs: xtabbarMetaData.INPUTNAMES,
            outputs: xtabbarMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xtabbar; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xtabbar);
    return xtabbar;
}(x_base_1.xbase));
exports.xtabbar = xtabbar;
