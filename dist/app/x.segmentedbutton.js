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
var xsegmentedbuttonMetaData = (function () {
    function xsegmentedbuttonMetaData() {
    }
    xsegmentedbuttonMetaData.XTYPE = 'segmentedbutton';
    xsegmentedbuttonMetaData.INPUTNAMES = [
        'activeItem',
        'allowDepress',
        'allowMultiple',
        'allowToggle',
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
        'defaultUI',
        'disabled',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'forceSelection',
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
        'pressedButtons',
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
        'value',
        'vertical',
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
    xsegmentedbuttonMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,segmentedbutton,oldActiveItem' },
        { name: 'add', parameters: 'segmentedbutton,item,index' },
        { name: 'added', parameters: 'segmentedbutton,container,index' },
        { name: 'beforehide', parameters: 'segmentedbutton' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'segmentedbutton' },
        { name: 'beforetofront', parameters: 'segmentedbutton' },
        { name: 'change', parameters: 'segmentedbutton,value,oldValue' },
        { name: 'deactivate', parameters: 'oldActiveItem,segmentedbutton,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'segmentedbutton' },
        { name: 'floatingchange', parameters: 'segmentedbutton,positioned' },
        { name: 'fullscreen', parameters: 'segmentedbutton' },
        { name: 'hide', parameters: 'segmentedbutton' },
        { name: 'initialize', parameters: 'segmentedbutton' },
        { name: 'move', parameters: 'segmentedbutton,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'segmentedbutton,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'segmentedbutton,positioned' },
        { name: 'remove', parameters: 'segmentedbutton,item,index' },
        { name: 'removed', parameters: 'segmentedbutton,container,index' },
        { name: 'renderedchange', parameters: 'segmentedbutton,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'segmentedbutton' },
        { name: 'tofront', parameters: 'segmentedbutton' },
        { name: 'toggle', parameters: 'segmentedbutton,button,isPressed' },
        { name: 'updatedata', parameters: 'segmentedbutton,newData' },
        { name: 'ready', parameters: '' }
    ];
    xsegmentedbuttonMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'change',
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
        'toggle',
        'updatedata',
        'ready'
    ];
    return xsegmentedbuttonMetaData;
}());
var xsegmentedbutton = (function (_super) {
    __extends(xsegmentedbutton, _super);
    function xsegmentedbutton(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xsegmentedbuttonMetaData);
    }
    xsegmentedbutton.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xsegmentedbutton.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xsegmentedbuttonMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], xsegmentedbutton.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xsegmentedbutton.prototype, "dynamicRef", void 0);
    xsegmentedbutton = __decorate([
        core_1.Component({
            selector: 'x-' + xsegmentedbuttonMetaData.XTYPE,
            inputs: xsegmentedbuttonMetaData.INPUTNAMES,
            outputs: xsegmentedbuttonMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xsegmentedbutton; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xsegmentedbutton);
    return xsegmentedbutton;
}(x_base_1.xbase));
exports.xsegmentedbutton = xsegmentedbutton;
