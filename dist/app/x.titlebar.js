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
var xtitlebarMetaData = (function () {
    function xtitlebarMetaData() {
    }
    xtitlebarMetaData.XTYPE = 'titlebar';
    xtitlebarMetaData.INPUTNAMES = [
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
        'maxButtonWidth',
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
        'titleAlign',
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
    xtitlebarMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,titlebar,oldActiveItem' },
        { name: 'add', parameters: 'titlebar,item,index' },
        { name: 'added', parameters: 'titlebar,container,index' },
        { name: 'beforehide', parameters: 'titlebar' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'titlebar' },
        { name: 'beforetofront', parameters: 'titlebar' },
        { name: 'deactivate', parameters: 'oldActiveItem,titlebar,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'titlebar' },
        { name: 'floatingchange', parameters: 'titlebar,positioned' },
        { name: 'fullscreen', parameters: 'titlebar' },
        { name: 'hide', parameters: 'titlebar' },
        { name: 'initialize', parameters: 'titlebar' },
        { name: 'move', parameters: 'titlebar,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'titlebar,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'titlebar,positioned' },
        { name: 'remove', parameters: 'titlebar,item,index' },
        { name: 'removed', parameters: 'titlebar,container,index' },
        { name: 'renderedchange', parameters: 'titlebar,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'titlebar' },
        { name: 'tofront', parameters: 'titlebar' },
        { name: 'updatedata', parameters: 'titlebar,newData' },
        { name: 'ready', parameters: '' }
    ];
    xtitlebarMetaData.OUTPUTNAMES = [
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
    return xtitlebarMetaData;
}());
var xtitlebar = (function (_super) {
    __extends(xtitlebar, _super);
    function xtitlebar(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xtitlebarMetaData);
    }
    xtitlebar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xtitlebar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xtitlebarMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xtitlebar.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xtitlebar.prototype, "dynamicRef", void 0);
    xtitlebar = __decorate([
        core_1.Component({
            selector: 'x-' + xtitlebarMetaData.XTYPE,
            inputs: xtitlebarMetaData.INPUTNAMES,
            outputs: xtitlebarMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xtitlebar; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xtitlebar);
    return xtitlebar;
}(x_base_1.xbase));
exports.xtitlebar = xtitlebar;
