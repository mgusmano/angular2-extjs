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
var extpanelheaderMetaData = (function () {
    function extpanelheaderMetaData() {
    }
    extpanelheaderMetaData.XTYPE = 'panelheader';
    extpanelheaderMetaData.INPUTNAMES = [
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
        'glyph',
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
        'fit',
        'config'
    ];
    extpanelheaderMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,panelheader,oldActiveItem' },
        { name: 'add', parameters: 'panelheader,item,index' },
        { name: 'added', parameters: 'panelheader,container,index' },
        { name: 'beforehide', parameters: 'panelheader' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'panelheader' },
        { name: 'beforetofront', parameters: 'panelheader' },
        { name: 'deactivate', parameters: 'oldActiveItem,panelheader,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'panelheader' },
        { name: 'floatingchange', parameters: 'panelheader,positioned' },
        { name: 'fullscreen', parameters: 'panelheader' },
        { name: 'hide', parameters: 'panelheader' },
        { name: 'initialize', parameters: 'panelheader' },
        { name: 'move', parameters: 'panelheader,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'panelheader,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'panelheader,positioned' },
        { name: 'remove', parameters: 'panelheader,item,index' },
        { name: 'removed', parameters: 'panelheader,container,index' },
        { name: 'renderedchange', parameters: 'panelheader,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'panelheader' },
        { name: 'tofront', parameters: 'panelheader' },
        { name: 'updatedata', parameters: 'panelheader,newData' },
        { name: 'ready', parameters: '' }
    ];
    extpanelheaderMetaData.OUTPUTNAMES = [
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
    return extpanelheaderMetaData;
}());
var extpanelheader = (function (_super) {
    __extends(extpanelheader, _super);
    function extpanelheader(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extpanelheaderMetaData);
    }
    extpanelheader.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extpanelheader.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extpanelheaderMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extpanelheader.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extpanelheader.prototype, "dynamicRef", void 0);
    extpanelheader = __decorate([
        core_1.Component({
            selector: 'ext-' + extpanelheaderMetaData.XTYPE,
            inputs: extpanelheaderMetaData.INPUTNAMES,
            outputs: extpanelheaderMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extpanelheader; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extpanelheader);
    return extpanelheader;
}(ext_base_1.extbase));
exports.extpanelheader = extpanelheader;
