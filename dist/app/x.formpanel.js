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
var xformpanelMetaData = (function () {
    function xformpanelMetaData() {
    }
    xformpanelMetaData.XTYPE = 'formpanel';
    xformpanelMetaData.INPUTNAMES = [
        'activeItem',
        'alwaysOnTop',
        'anchor',
        'anchorPosition',
        'api',
        'autoDestroy',
        'axisLock',
        'baseCls',
        'baseParams',
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
        'disabled',
        'docked',
        'draggable',
        'enableSubmissionForm',
        'enctype',
        'enterAnimation',
        'exitAnimation',
        'fieldSeparators',
        'flex',
        'floated',
        'fullscreen',
        'header',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'icon',
        'iconCls',
        'id',
        'inputBorders',
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
        'method',
        'minHeight',
        'minWidth',
        'modal',
        'multipartDetection',
        'padding',
        'paramOrder',
        'paramsAsHash',
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
        'standardSubmit',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'submitOnAction',
        'timeout',
        'title',
        'toFrontOnShow',
        'tools',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'trackResetOnLoad',
        'translatable',
        'twoWayBindable',
        'ui',
        'url',
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
    xformpanelMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,formpanel,oldActiveItem' },
        { name: 'add', parameters: 'formpanel,item,index' },
        { name: 'added', parameters: 'formpanel,container,index' },
        { name: 'beforehide', parameters: 'formpanel' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'formpanel' },
        { name: 'beforesubmit', parameters: 'formpanel,values,options,e' },
        { name: 'beforetofront', parameters: 'formpanel' },
        { name: 'deactivate', parameters: 'oldActiveItem,formpanel,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'formpanel' },
        { name: 'exception', parameters: 'formpanel,result' },
        { name: 'floatingchange', parameters: 'formpanel,positioned' },
        { name: 'fullscreen', parameters: 'formpanel' },
        { name: 'hide', parameters: 'formpanel' },
        { name: 'initialize', parameters: 'formpanel' },
        { name: 'move', parameters: 'formpanel,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'formpanel,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'formpanel,positioned' },
        { name: 'remove', parameters: 'formpanel,item,index' },
        { name: 'removed', parameters: 'formpanel,container,index' },
        { name: 'renderedchange', parameters: 'formpanel,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'formpanel' },
        { name: 'submit', parameters: 'formpanel,result,e' },
        { name: 'tofront', parameters: 'formpanel' },
        { name: 'updatedata', parameters: 'formpanel,newData' },
        { name: 'ready', parameters: '' }
    ];
    xformpanelMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforesubmit',
        'beforetofront',
        'deactivate',
        'destroy',
        'erased',
        'exception',
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
        'submit',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xformpanelMetaData;
}());
var xformpanel = (function (_super) {
    __extends(xformpanel, _super);
    function xformpanel(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xformpanelMetaData);
    }
    xformpanel.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xformpanel.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xformpanelMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xformpanel.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xformpanel.prototype, "dynamicRef", void 0);
    xformpanel = __decorate([
        core_1.Component({
            selector: 'x-' + xformpanelMetaData.XTYPE,
            inputs: xformpanelMetaData.INPUTNAMES,
            outputs: xformpanelMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xformpanel; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xformpanel);
    return xformpanel;
}(x_base_1.xbase));
exports.xformpanel = xformpanel;
