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
var xtabpanelMetaData = (function () {
    function xtabpanelMetaData() {
    }
    xtabpanelMetaData.XTYPE = 'tabpanel';
    xtabpanelMetaData.INPUTNAMES = [
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
        'scroll',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'tabBar',
        'tabBarPosition',
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
    xtabpanelMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,tabpanel,oldActiveItem' },
        { name: 'add', parameters: 'tabpanel,item,index' },
        { name: 'added', parameters: 'tabpanel,container,index' },
        { name: 'beforehide', parameters: 'tabpanel' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'tabpanel' },
        { name: 'beforetofront', parameters: 'tabpanel' },
        { name: 'deactivate', parameters: 'oldActiveItem,tabpanel,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'tabpanel' },
        { name: 'floatingchange', parameters: 'tabpanel,positioned' },
        { name: 'fullscreen', parameters: 'tabpanel' },
        { name: 'hide', parameters: 'tabpanel' },
        { name: 'initialize', parameters: 'tabpanel' },
        { name: 'move', parameters: 'tabpanel,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'tabpanel,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'tabpanel,positioned' },
        { name: 'remove', parameters: 'tabpanel,item,index' },
        { name: 'removed', parameters: 'tabpanel,container,index' },
        { name: 'renderedchange', parameters: 'tabpanel,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'tabpanel' },
        { name: 'tofront', parameters: 'tabpanel' },
        { name: 'updatedata', parameters: 'tabpanel,newData' },
        { name: 'ready', parameters: '' }
    ];
    xtabpanelMetaData.OUTPUTNAMES = [
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
    return xtabpanelMetaData;
}());
var xtabpanel = (function (_super) {
    __extends(xtabpanel, _super);
    function xtabpanel(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xtabpanelMetaData);
    }
    xtabpanel.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xtabpanel.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xtabpanelMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xtabpanel.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xtabpanel.prototype, "dynamicRef", void 0);
    xtabpanel = __decorate([
        core_1.Component({
            selector: 'x-' + xtabpanelMetaData.XTYPE,
            inputs: xtabpanelMetaData.INPUTNAMES,
            outputs: xtabpanelMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xtabpanel; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xtabpanel);
    return xtabpanel;
}(x_base_1.xbase));
exports.xtabpanel = xtabpanel;
