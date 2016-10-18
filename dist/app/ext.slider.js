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
var extsliderMetaData = (function () {
    function extsliderMetaData() {
    }
    extsliderMetaData.XTYPE = 'slider';
    extsliderMetaData.INPUTNAMES = [
        'allowThumbsOverlapping',
        'alwaysOnTop',
        'animation',
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
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'increment',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxValue',
        'maxWidth',
        'minHeight',
        'minValue',
        'minWidth',
        'modal',
        'padding',
        'plugins',
        'publishes',
        'readOnly',
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
        'thumbDefaults',
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
        'value',
        'valueIsArray',
        'values',
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
    extsliderMetaData.OUTPUTS = [
        { name: 'added', parameters: 'slider,container,index' },
        { name: 'beforehide', parameters: 'slider' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'slider' },
        { name: 'beforetofront', parameters: 'slider' },
        { name: 'change', parameters: 'slider,thumb,newValue,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'drag', parameters: 'slider,thumb,e' },
        { name: 'dragend', parameters: 'slider,thumb,value,e' },
        { name: 'dragstart', parameters: 'slider,thumb,value,e' },
        { name: 'erased', parameters: 'slider' },
        { name: 'floatingchange', parameters: 'slider,positioned' },
        { name: 'fullscreen', parameters: 'slider' },
        { name: 'hide', parameters: 'slider' },
        { name: 'initialize', parameters: 'slider' },
        { name: 'moved', parameters: 'slider,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'slider,positioned' },
        { name: 'removed', parameters: 'slider,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'slider' },
        { name: 'tofront', parameters: 'slider' },
        { name: 'updatedata', parameters: 'slider,newData' },
        { name: 'ready', parameters: '' }
    ];
    extsliderMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'change',
        'destroy',
        'drag',
        'dragend',
        'dragstart',
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
    return extsliderMetaData;
}());
var extslider = (function (_super) {
    __extends(extslider, _super);
    function extslider(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extsliderMetaData);
    }
    extslider.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extslider.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extsliderMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extslider.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extslider.prototype, "dynamicRef", void 0);
    extslider = __decorate([
        core_1.Component({
            selector: 'ext-' + extsliderMetaData.XTYPE,
            inputs: extsliderMetaData.INPUTNAMES,
            outputs: extsliderMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extslider; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extslider);
    return extslider;
}(ext_base_1.extbase));
exports.extslider = extslider;
