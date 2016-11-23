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
var xpaneltitleMetaData = (function () {
    function xpaneltitleMetaData() {
    }
    xpaneltitleMetaData.XTYPE = 'paneltitle';
    xpaneltitleMetaData.INPUTNAMES = [
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
        'fittoparent',
        'config'
    ];
    xpaneltitleMetaData.OUTPUTS = [
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
    xpaneltitleMetaData.OUTPUTNAMES = [
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
    return xpaneltitleMetaData;
}());
var xpaneltitle = (function (_super) {
    __extends(xpaneltitle, _super);
    function xpaneltitle(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xpaneltitleMetaData);
    }
    xpaneltitle.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xpaneltitle.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xpaneltitleMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xpaneltitle.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xpaneltitle.prototype, "dynamicRef", void 0);
    xpaneltitle = __decorate([
        core_1.Component({
            selector: 'x-' + xpaneltitleMetaData.XTYPE,
            inputs: xpaneltitleMetaData.INPUTNAMES,
            outputs: xpaneltitleMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xpaneltitle; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xpaneltitle);
    return xpaneltitle;
}(x_base_1.xbase));
exports.xpaneltitle = xpaneltitle;
