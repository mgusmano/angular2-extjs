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
var extvideoMetaData = (function () {
    function extvideoMetaData() {
    }
    extvideoMetaData.XTYPE = 'video';
    extvideoMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'autoPause',
        'autoResume',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'cls',
        'contentEl',
        'controller',
        'controls',
        'data',
        'defaultListenerScope',
        'disabled',
        'docked',
        'draggable',
        'enableControls',
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
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'loop',
        'margin',
        'maxHeight',
        'maxWidth',
        'media',
        'minHeight',
        'minWidth',
        'modal',
        'muted',
        'padding',
        'plugins',
        'posterUrl',
        'preload',
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
        'url',
        'useBodyElement',
        'userCls',
        'viewModel',
        'volume',
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
    extvideoMetaData.OUTPUTS = [
        { name: 'added', parameters: 'video,container,index' },
        { name: 'beforehide', parameters: 'video' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'video' },
        { name: 'beforetofront', parameters: 'video' },
        { name: 'destroy', parameters: '' },
        { name: 'ended', parameters: 'video,time' },
        { name: 'erased', parameters: 'video' },
        { name: 'floatingchange', parameters: 'video,positioned' },
        { name: 'fullscreen', parameters: 'video' },
        { name: 'hide', parameters: 'video' },
        { name: 'initialize', parameters: 'video' },
        { name: 'moved', parameters: 'video,container,toIndex,fromIndex' },
        { name: 'mutedchange', parameters: 'video,muted' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'pause', parameters: 'video,time' },
        { name: 'play', parameters: 'video' },
        { name: 'positionedchange', parameters: 'video,positioned' },
        { name: 'removed', parameters: 'video,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'video' },
        { name: 'stop', parameters: 'video' },
        { name: 'timeupdate', parameters: 'video,time' },
        { name: 'tofront', parameters: 'video' },
        { name: 'updatedata', parameters: 'video,newData' },
        { name: 'volumechange', parameters: 'video,volume' },
        { name: 'ready', parameters: '' }
    ];
    extvideoMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'destroy',
        'ended',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'moved',
        'mutedchange',
        'orientationchange',
        'painted',
        'pause',
        'play',
        'positionedchange',
        'removed',
        'resize',
        'show',
        'stop',
        'timeupdate',
        'tofront',
        'updatedata',
        'volumechange',
        'ready'
    ];
    return extvideoMetaData;
}());
var extvideo = (function (_super) {
    __extends(extvideo, _super);
    function extvideo(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extvideoMetaData);
    }
    extvideo.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extvideo.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extvideoMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extvideo.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extvideo.prototype, "dynamicRef", void 0);
    extvideo = __decorate([
        core_1.Component({
            selector: 'ext-' + extvideoMetaData.XTYPE,
            inputs: extvideoMetaData.INPUTNAMES,
            outputs: extvideoMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extvideo; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extvideo);
    return extvideo;
}(ext_base_1.extbase));
exports.extvideo = extvideo;
