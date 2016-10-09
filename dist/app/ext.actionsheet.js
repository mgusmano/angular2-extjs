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
var extactionsheetMetaData = (function () {
    function extactionsheetMetaData() {
    }
    extactionsheetMetaData.XTYPE = 'actionsheet';
    extactionsheetMetaData.INPUTNAMES = [
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
        'enter',
        'enterAnimation',
        'exit',
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
        'stretchX',
        'stretchY',
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
    extactionsheetMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,actionsheet,oldActiveItem' },
        { name: 'add', parameters: 'actionsheet,item,index' },
        { name: 'added', parameters: 'actionsheet,container,index' },
        { name: 'beforehide', parameters: 'actionsheet' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'actionsheet' },
        { name: 'beforetofront', parameters: 'actionsheet' },
        { name: 'deactivate', parameters: 'oldActiveItem,actionsheet,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'actionsheet' },
        { name: 'floatingchange', parameters: 'actionsheet,positioned' },
        { name: 'fullscreen', parameters: 'actionsheet' },
        { name: 'hide', parameters: 'actionsheet' },
        { name: 'initialize', parameters: 'actionsheet' },
        { name: 'move', parameters: 'actionsheet,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'actionsheet,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'actionsheet,positioned' },
        { name: 'remove', parameters: 'actionsheet,item,index' },
        { name: 'removed', parameters: 'actionsheet,container,index' },
        { name: 'renderedchange', parameters: 'actionsheet,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'actionsheet' },
        { name: 'tofront', parameters: 'actionsheet' },
        { name: 'updatedata', parameters: 'actionsheet,newData' },
        { name: 'ready', parameters: '' }
    ];
    extactionsheetMetaData.OUTPUTNAMES = [
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
    return extactionsheetMetaData;
}());
var extactionsheet = (function (_super) {
    __extends(extactionsheet, _super);
    function extactionsheet(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extactionsheetMetaData);
    }
    extactionsheet.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extactionsheet.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extactionsheetMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extactionsheet.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extactionsheet.prototype, "dynamicRef", void 0);
    extactionsheet = __decorate([
        core_1.Component({
            selector: 'ext-' + extactionsheetMetaData.XTYPE,
            inputs: extactionsheetMetaData.INPUTNAMES,
            outputs: extactionsheetMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extactionsheet; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extactionsheet);
    return extactionsheet;
}(ext_base_1.extbase));
exports.extactionsheet = extactionsheet;
