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
var extnavigationviewMetaData = (function () {
    function extnavigationviewMetaData() {
    }
    extnavigationviewMetaData.XTYPE = 'navigationview';
    extnavigationviewMetaData.INPUTNAMES = [
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
        'defaultBackButtonText',
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
        'navigationBar',
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
        'useTitleForBackButtonText',
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
    extnavigationviewMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,navigationview,oldActiveItem' },
        { name: 'add', parameters: 'navigationview,item,index' },
        { name: 'added', parameters: 'navigationview,container,index' },
        { name: 'back', parameters: 'navigationview' },
        { name: 'beforehide', parameters: 'navigationview' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'navigationview' },
        { name: 'beforetofront', parameters: 'navigationview' },
        { name: 'deactivate', parameters: 'oldActiveItem,navigationview,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'navigationview' },
        { name: 'floatingchange', parameters: 'navigationview,positioned' },
        { name: 'fullscreen', parameters: 'navigationview' },
        { name: 'hide', parameters: 'navigationview' },
        { name: 'initialize', parameters: 'navigationview' },
        { name: 'move', parameters: 'navigationview,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'navigationview,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'pop', parameters: 'navigationview,view' },
        { name: 'positionedchange', parameters: 'navigationview,positioned' },
        { name: 'push', parameters: 'navigationview,view' },
        { name: 'remove', parameters: 'navigationview,item,index' },
        { name: 'removed', parameters: 'navigationview,container,index' },
        { name: 'renderedchange', parameters: 'navigationview,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'navigationview' },
        { name: 'tofront', parameters: 'navigationview' },
        { name: 'updatedata', parameters: 'navigationview,newData' },
        { name: 'ready', parameters: '' }
    ];
    extnavigationviewMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'back',
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
        'pop',
        'positionedchange',
        'push',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return extnavigationviewMetaData;
}());
var extnavigationview = (function (_super) {
    __extends(extnavigationview, _super);
    function extnavigationview(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extnavigationviewMetaData);
    }
    extnavigationview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extnavigationview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extnavigationviewMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extnavigationview.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extnavigationview.prototype, "dynamicRef", void 0);
    extnavigationview = __decorate([
        core_1.Component({
            selector: 'ext-' + extnavigationviewMetaData.XTYPE,
            inputs: extnavigationviewMetaData.INPUTNAMES,
            outputs: extnavigationviewMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extnavigationview; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extnavigationview);
    return extnavigationview;
}(ext_base_1.extbase));
exports.extnavigationview = extnavigationview;
