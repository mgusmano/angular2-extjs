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
var xtogglesliderMetaData = (function () {
    function xtogglesliderMetaData() {
    }
    xtogglesliderMetaData.XTYPE = 'toggleslider';
    xtogglesliderMetaData.INPUTNAMES = [
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
    xtogglesliderMetaData.OUTPUTS = [
        { name: 'added', parameters: 'toggleslider,container,index' },
        { name: 'beforehide', parameters: 'toggleslider' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'toggleslider' },
        { name: 'beforetofront', parameters: 'toggleslider' },
        { name: 'change', parameters: 'toggleslider,thumb,newValue,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'drag', parameters: 'toggleslider,thumb,e' },
        { name: 'dragend', parameters: 'toggleslider,thumb,value,e' },
        { name: 'dragstart', parameters: 'toggleslider,thumb,value,e' },
        { name: 'erased', parameters: 'toggleslider' },
        { name: 'floatingchange', parameters: 'toggleslider,positioned' },
        { name: 'fullscreen', parameters: 'toggleslider' },
        { name: 'hide', parameters: 'toggleslider' },
        { name: 'initialize', parameters: 'toggleslider' },
        { name: 'moved', parameters: 'toggleslider,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'toggleslider,positioned' },
        { name: 'removed', parameters: 'toggleslider,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'toggleslider' },
        { name: 'tofront', parameters: 'toggleslider' },
        { name: 'updatedata', parameters: 'toggleslider,newData' },
        { name: 'ready', parameters: '' }
    ];
    xtogglesliderMetaData.OUTPUTNAMES = [
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
    return xtogglesliderMetaData;
}());
var xtoggleslider = (function (_super) {
    __extends(xtoggleslider, _super);
    function xtoggleslider(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xtogglesliderMetaData);
    }
    xtoggleslider.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xtoggleslider.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xtogglesliderMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xtoggleslider.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xtoggleslider.prototype, "dynamicRef", void 0);
    xtoggleslider = __decorate([
        core_1.Component({
            selector: 'x-' + xtogglesliderMetaData.XTYPE,
            inputs: xtogglesliderMetaData.INPUTNAMES,
            outputs: xtogglesliderMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xtoggleslider; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xtoggleslider);
    return xtoggleslider;
}(x_base_1.xbase));
exports.xtoggleslider = xtoggleslider;
