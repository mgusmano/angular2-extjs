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
var extpanelMetaData = (function () {
    function extpanelMetaData() {
    }
    extpanelMetaData.XTYPE = 'panel';
    extpanelMetaData.INPUTNAMES = [
        'activeItem',
        'alwaysOnTop',
        'anchor',
        'anchorPosition',
        'autoDestroy',
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
        'disabled',
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
        'tools',
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
        'fit',
        'config'
    ];
    extpanelMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,panel,oldActiveItem' },
        { name: 'add', parameters: 'panel,item,index' },
        { name: 'added', parameters: 'panel,container,index' },
        { name: 'beforehide', parameters: 'panel' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'panel' },
        { name: 'beforetofront', parameters: 'panel' },
        { name: 'deactivate', parameters: 'oldActiveItem,panel,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'panel' },
        { name: 'floatingchange', parameters: 'panel,positioned' },
        { name: 'fullscreen', parameters: 'panel' },
        { name: 'hide', parameters: 'panel' },
        { name: 'initialize', parameters: 'panel' },
        { name: 'move', parameters: 'panel,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'panel,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'panel,positioned' },
        { name: 'remove', parameters: 'panel,item,index' },
        { name: 'removed', parameters: 'panel,container,index' },
        { name: 'renderedchange', parameters: 'panel,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'panel' },
        { name: 'tofront', parameters: 'panel' },
        { name: 'updatedata', parameters: 'panel,newData' },
        { name: 'ready', parameters: '' }
    ];
    extpanelMetaData.OUTPUTNAMES = [
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
    return extpanelMetaData;
}());
var extpanel = (function (_super) {
    __extends(extpanel, _super);
    function extpanel(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extpanelMetaData);
    }
    extpanel.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extpanel.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extpanelMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extpanel.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extpanel.prototype, "dynamicRef", void 0);
    extpanel = __decorate([
        core_1.Component({
            selector: 'ext-' + extpanelMetaData.XTYPE,
            inputs: extpanelMetaData.INPUTNAMES,
            outputs: extpanelMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extpanel; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extpanel);
    return extpanel;
}(ext_base_1.extbase));
exports.extpanel = extpanel;
