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
var xtabMetaData = (function () {
    function xtabMetaData() {
    }
    xtabMetaData.XTYPE = 'tab';
    xtabMetaData.INPUTNAMES = [
        'active',
        'activeCls',
        'allowDepress',
        'alwaysOnTop',
        'autoEvent',
        'axisLock',
        'badgeCls',
        'badgeText',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'cls',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'docked',
        'draggable',
        'enableToggle',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'handler',
        'hasBadgeCls',
        'hasLabelCls',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'icon',
        'iconAlign',
        'iconCls',
        'id',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'labelCls',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'padding',
        'plugins',
        'pressed',
        'pressedCls',
        'pressedDelay',
        'pressingCls',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'scope',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'text',
        'textAlign',
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
    xtabMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'tab' },
        { name: 'added', parameters: 'tab,container,index' },
        { name: 'beforehide', parameters: 'tab' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'tab' },
        { name: 'beforetofront', parameters: 'tab' },
        { name: 'deactivate', parameters: 'tab' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'tab' },
        { name: 'floatingchange', parameters: 'tab,positioned' },
        { name: 'fullscreen', parameters: 'tab' },
        { name: 'hide', parameters: 'tab' },
        { name: 'initialize', parameters: 'tab' },
        { name: 'moved', parameters: 'tab,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'tab,positioned' },
        { name: 'release', parameters: 'tab,e' },
        { name: 'removed', parameters: 'tab,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'tab' },
        { name: 'tap', parameters: 'tab,e' },
        { name: 'tofront', parameters: 'tab' },
        { name: 'updatedata', parameters: 'tab,newData' },
        { name: 'ready', parameters: '' }
    ];
    xtabMetaData.OUTPUTNAMES = [
        'activate',
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
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'release',
        'removed',
        'resize',
        'show',
        'tap',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xtabMetaData;
}());
var xtab = (function (_super) {
    __extends(xtab, _super);
    function xtab(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xtabMetaData);
    }
    xtab.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xtab.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xtabMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xtab.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xtab.prototype, "dynamicRef", void 0);
    xtab = __decorate([
        core_1.Component({
            selector: 'x-' + xtabMetaData.XTYPE,
            inputs: xtabMetaData.INPUTNAMES,
            outputs: xtabMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xtab; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xtab);
    return xtab;
}(x_base_1.xbase));
exports.xtab = xtab;
