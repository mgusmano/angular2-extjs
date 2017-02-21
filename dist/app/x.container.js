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
var xcontainerMetaData = (function () {
    function xcontainerMetaData() {
    }
    xcontainerMetaData.XTYPE = 'container';
    xcontainerMetaData.INPUTNAMES = [
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
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
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
    xcontainerMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,container,oldActiveItem' },
        { name: 'add', parameters: 'container,item,index' },
        { name: 'added', parameters: 'container,container,index' },
        { name: 'beforehide', parameters: 'container' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'container' },
        { name: 'beforetofront', parameters: 'container' },
        { name: 'deactivate', parameters: 'oldActiveItem,container,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'container' },
        { name: 'floatingchange', parameters: 'container,positioned' },
        { name: 'fullscreen', parameters: 'container' },
        { name: 'hide', parameters: 'container' },
        { name: 'initialize', parameters: 'container' },
        { name: 'move', parameters: 'container,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'container,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'container,positioned' },
        { name: 'remove', parameters: 'container,item,index' },
        { name: 'removed', parameters: 'container,container,index' },
        { name: 'renderedchange', parameters: 'container,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'container' },
        { name: 'tofront', parameters: 'container' },
        { name: 'updatedata', parameters: 'container,newData' },
        { name: 'ready', parameters: '' }
    ];
    xcontainerMetaData.OUTPUTNAMES = [
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
    return xcontainerMetaData;
}());
var xcontainer = (function (_super) {
    __extends(xcontainer, _super);
    function xcontainer(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcontainerMetaData);
    }
    xcontainer.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcontainer.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcontainerMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcontainer.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcontainer.prototype, "dynamicRef", void 0);
    xcontainer = __decorate([
        core_1.Component({
            selector: 'x-' + xcontainerMetaData.XTYPE,
            inputs: xcontainerMetaData.INPUTNAMES,
            outputs: xcontainerMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcontainer; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcontainer);
    return xcontainer;
}(x_base_1.xbase));
exports.xcontainer = xcontainer;
