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
var extaudioMetaData = (function () {
    function extaudioMetaData() {
    }
    extaudioMetaData.XTYPE = 'audio';
    extaudioMetaData.INPUTNAMES = [
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
        'fit',
        'config'
    ];
    extaudioMetaData.OUTPUTS = [
        { name: 'added', parameters: 'audio,container,index' },
        { name: 'beforehide', parameters: 'audio' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'audio' },
        { name: 'beforetofront', parameters: 'audio' },
        { name: 'destroy', parameters: '' },
        { name: 'ended', parameters: 'audio,time' },
        { name: 'erased', parameters: 'audio' },
        { name: 'floatingchange', parameters: 'audio,positioned' },
        { name: 'fullscreen', parameters: 'audio' },
        { name: 'hide', parameters: 'audio' },
        { name: 'initialize', parameters: 'audio' },
        { name: 'moved', parameters: 'audio,container,toIndex,fromIndex' },
        { name: 'mutedchange', parameters: 'audio,muted' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'pause', parameters: 'audio,time' },
        { name: 'play', parameters: 'audio' },
        { name: 'positionedchange', parameters: 'audio,positioned' },
        { name: 'removed', parameters: 'audio,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'audio' },
        { name: 'stop', parameters: 'audio' },
        { name: 'timeupdate', parameters: 'audio,time' },
        { name: 'tofront', parameters: 'audio' },
        { name: 'updatedata', parameters: 'audio,newData' },
        { name: 'volumechange', parameters: 'audio,volume' },
        { name: 'ready', parameters: '' }
    ];
    extaudioMetaData.OUTPUTNAMES = [
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
    return extaudioMetaData;
}());
var extaudio = (function (_super) {
    __extends(extaudio, _super);
    function extaudio(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extaudioMetaData);
    }
    extaudio.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extaudio.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extaudioMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extaudio.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extaudio.prototype, "dynamicRef", void 0);
    extaudio = __decorate([
        core_1.Component({
            selector: 'ext-' + extaudioMetaData.XTYPE,
            inputs: extaudioMetaData.INPUTNAMES,
            outputs: extaudioMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extaudio; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extaudio);
    return extaudio;
}(ext_base_1.extbase));
exports.extaudio = extaudio;
