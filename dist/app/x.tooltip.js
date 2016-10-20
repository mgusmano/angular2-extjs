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
var xtooltipMetaData = (function () {
    function xtooltipMetaData() {
    }
    xtooltipMetaData.XTYPE = 'tooltip';
    xtooltipMetaData.INPUTNAMES = [
        'activeItem',
        'align',
        'alignDelegate',
        'allowOver',
        'alwaysOnTop',
        'anchor',
        'anchorPosition',
        'anchorToTarget',
        'autoDestroy',
        'autoHide',
        'axisLock',
        'baseCls',
        'bind',
        'bodyBorder',
        'bodyPadding',
        'border',
        'bottom',
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
        'delegate',
        'disabled',
        'dismissDelay',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'header',
        'height',
        'hidden',
        'hideAnimation',
        'hideDelay',
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
        'mouseOffset',
        'padding',
        'plugins',
        'publishes',
        'quickShowInterval',
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
        'showDelay',
        'showOnTap',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'target',
        'title',
        'toFrontOnShow',
        'tools',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'trackMouse',
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
    xtooltipMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,tooltip,oldActiveItem' },
        { name: 'add', parameters: 'tooltip,item,index' },
        { name: 'added', parameters: 'tooltip,container,index' },
        { name: 'beforehide', parameters: 'tooltip' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'tooltip' },
        { name: 'beforetofront', parameters: 'tooltip' },
        { name: 'deactivate', parameters: 'oldActiveItem,tooltip,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'tooltip' },
        { name: 'floatingchange', parameters: 'tooltip,positioned' },
        { name: 'fullscreen', parameters: 'tooltip' },
        { name: 'hide', parameters: 'tooltip' },
        { name: 'initialize', parameters: 'tooltip' },
        { name: 'move', parameters: 'tooltip,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'tooltip,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'tooltip,positioned' },
        { name: 'remove', parameters: 'tooltip,item,index' },
        { name: 'removed', parameters: 'tooltip,container,index' },
        { name: 'renderedchange', parameters: 'tooltip,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'tooltip' },
        { name: 'tofront', parameters: 'tooltip' },
        { name: 'updatedata', parameters: 'tooltip,newData' },
        { name: 'ready', parameters: '' }
    ];
    xtooltipMetaData.OUTPUTNAMES = [
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
    return xtooltipMetaData;
}());
var xtooltip = (function (_super) {
    __extends(xtooltip, _super);
    function xtooltip(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xtooltipMetaData);
    }
    xtooltip.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xtooltip.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xtooltipMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xtooltip.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xtooltip.prototype, "dynamicRef", void 0);
    xtooltip = __decorate([
        core_1.Component({
            selector: 'x-' + xtooltipMetaData.XTYPE,
            inputs: xtooltipMetaData.INPUTNAMES,
            outputs: xtooltipMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xtooltip; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xtooltip);
    return xtooltip;
}(x_base_1.xbase));
exports.xtooltip = xtooltip;
