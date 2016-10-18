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
var extcontainerMetaData = (function () {
    function extcontainerMetaData() {
    }
    extcontainerMetaData.XTYPE = 'container';
    extcontainerMetaData.INPUTNAMES = [
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
    extcontainerMetaData.OUTPUTS = [
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
    extcontainerMetaData.OUTPUTNAMES = [
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
    return extcontainerMetaData;
}());
var extcontainer = (function (_super) {
    __extends(extcontainer, _super);
    function extcontainer(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcontainerMetaData);
    }
    extcontainer.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcontainer.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcontainerMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcontainer.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcontainer.prototype, "dynamicRef", void 0);
    extcontainer = __decorate([
        core_1.Component({
            selector: 'ext-' + extcontainerMetaData.XTYPE,
            inputs: extcontainerMetaData.INPUTNAMES,
            outputs: extcontainerMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcontainer; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcontainer);
    return extcontainer;
}(ext_base_1.extbase));
exports.extcontainer = extcontainer;
