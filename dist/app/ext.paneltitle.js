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
var extpaneltitleMetaData = (function () {
    function extpaneltitleMetaData() {
    }
    extpaneltitleMetaData.XTYPE = 'paneltitle';
    extpaneltitleMetaData.INPUTNAMES = [
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
        'text',
        'textAlign',
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
    extpaneltitleMetaData.OUTPUTS = [
        { name: 'added', parameters: 'paneltitle,container,index' },
        { name: 'beforehide', parameters: 'paneltitle' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'paneltitle' },
        { name: 'beforetofront', parameters: 'paneltitle' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'paneltitle' },
        { name: 'floatingchange', parameters: 'paneltitle,positioned' },
        { name: 'fullscreen', parameters: 'paneltitle' },
        { name: 'hide', parameters: 'paneltitle' },
        { name: 'initialize', parameters: 'paneltitle' },
        { name: 'moved', parameters: 'paneltitle,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'paneltitle,positioned' },
        { name: 'removed', parameters: 'paneltitle,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'paneltitle' },
        { name: 'tofront', parameters: 'paneltitle' },
        { name: 'updatedata', parameters: 'paneltitle,newData' },
        { name: 'ready', parameters: '' }
    ];
    extpaneltitleMetaData.OUTPUTNAMES = [
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
    return extpaneltitleMetaData;
}());
var extpaneltitle = (function (_super) {
    __extends(extpaneltitle, _super);
    function extpaneltitle(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extpaneltitleMetaData);
    }
    extpaneltitle.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extpaneltitle.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extpaneltitleMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extpaneltitle.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extpaneltitle.prototype, "dynamicRef", void 0);
    extpaneltitle = __decorate([
        core_1.Component({
            selector: 'ext-' + extpaneltitleMetaData.XTYPE,
            inputs: extpaneltitleMetaData.INPUTNAMES,
            outputs: extpaneltitleMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extpaneltitle; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extpaneltitle);
    return extpaneltitle;
}(ext_base_1.extbase));
exports.extpaneltitle = extpaneltitle;
