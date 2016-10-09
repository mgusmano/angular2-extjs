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
var extthumbMetaData = (function () {
    function extthumbMetaData() {
    }
    extthumbMetaData.XTYPE = 'thumb';
    extthumbMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
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
        'enterAnimation',
        'exitAnimation',
        'fillCls',
        'fillTrack',
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
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
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
        'publishes',
        'record',
        'reference',
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
        'fit',
        'config'
    ];
    extthumbMetaData.OUTPUTS = [
        { name: 'added', parameters: 'thumb,container,index' },
        { name: 'beforehide', parameters: 'thumb' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'thumb' },
        { name: 'beforetofront', parameters: 'thumb' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'thumb' },
        { name: 'floatingchange', parameters: 'thumb,positioned' },
        { name: 'fullscreen', parameters: 'thumb' },
        { name: 'hide', parameters: 'thumb' },
        { name: 'initialize', parameters: 'thumb' },
        { name: 'moved', parameters: 'thumb,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'thumb,positioned' },
        { name: 'removed', parameters: 'thumb,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'thumb' },
        { name: 'tofront', parameters: 'thumb' },
        { name: 'updatedata', parameters: 'thumb,newData' },
        { name: 'ready', parameters: '' }
    ];
    extthumbMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
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
        'removed',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return extthumbMetaData;
}());
var extthumb = (function (_super) {
    __extends(extthumb, _super);
    function extthumb(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extthumbMetaData);
    }
    extthumb.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extthumb.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extthumbMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extthumb.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extthumb.prototype, "dynamicRef", void 0);
    extthumb = __decorate([
        core_1.Component({
            selector: 'ext-' + extthumbMetaData.XTYPE,
            inputs: extthumbMetaData.INPUTNAMES,
            outputs: extthumbMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extthumb; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extthumb);
    return extthumb;
}(ext_base_1.extbase));
exports.extthumb = extthumb;
