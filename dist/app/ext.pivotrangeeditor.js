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
var extpivotrangeeditorMetaData = (function () {
    function extpivotrangeeditorMetaData() {
    }
    extpivotrangeeditorMetaData.XTYPE = 'pivotrangeeditor';
    extpivotrangeeditorMetaData.INPUTNAMES = [
        'activeItem',
        'alwaysOnTop',
        'anchor',
        'anchorPosition',
        'api',
        'autoDestroy',
        'axisLock',
        'baseCls',
        'baseParams',
        'bind',
        'bodyBorder',
        'bodyPadding',
        'border',
        'bottom',
        'cardSwitchAnimation',
        'centered',
        'closable',
        'closeAction',
        'closeToolText',
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
        'enableSubmissionForm',
        'enctype',
        'enterAnimation',
        'exitAnimation',
        'fieldSeparators',
        'flex',
        'floated',
        'fullscreen',
        'header',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'icon',
        'iconCls',
        'id',
        'inputBorders',
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
        'method',
        'minHeight',
        'minWidth',
        'modal',
        'multipartDetection',
        'padding',
        'paramOrder',
        'paramsAsHash',
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
        'standardSubmit',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'submitOnAction',
        'timeout',
        'title',
        'toFrontOnShow',
        'tools',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'trackResetOnLoad',
        'translatable',
        'twoWayBindable',
        'ui',
        'url',
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
    extpivotrangeeditorMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,pivotrangeeditor,oldActiveItem' },
        { name: 'add', parameters: 'pivotrangeeditor,item,index' },
        { name: 'added', parameters: 'pivotrangeeditor,container,index' },
        { name: 'beforehide', parameters: 'pivotrangeeditor' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'pivotrangeeditor' },
        { name: 'beforesubmit', parameters: 'pivotrangeeditor,values,options,e' },
        { name: 'beforetofront', parameters: 'pivotrangeeditor' },
        { name: 'deactivate', parameters: 'oldActiveItem,pivotrangeeditor,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'pivotrangeeditor' },
        { name: 'exception', parameters: 'pivotrangeeditor,result' },
        { name: 'floatingchange', parameters: 'pivotrangeeditor,positioned' },
        { name: 'fullscreen', parameters: 'pivotrangeeditor' },
        { name: 'hide', parameters: 'pivotrangeeditor' },
        { name: 'initialize', parameters: 'pivotrangeeditor' },
        { name: 'move', parameters: 'pivotrangeeditor,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'pivotrangeeditor,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'pivotrangeeditor,positioned' },
        { name: 'remove', parameters: 'pivotrangeeditor,item,index' },
        { name: 'removed', parameters: 'pivotrangeeditor,container,index' },
        { name: 'renderedchange', parameters: 'pivotrangeeditor,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'pivotrangeeditor' },
        { name: 'submit', parameters: 'pivotrangeeditor,result,e' },
        { name: 'tofront', parameters: 'pivotrangeeditor' },
        { name: 'updatedata', parameters: 'pivotrangeeditor,newData' },
        { name: 'ready', parameters: '' }
    ];
    extpivotrangeeditorMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforesubmit',
        'beforetofront',
        'deactivate',
        'destroy',
        'erased',
        'exception',
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
        'submit',
        'tofront',
        'updatedata',
        'ready'
    ];
    return extpivotrangeeditorMetaData;
}());
var extpivotrangeeditor = (function (_super) {
    __extends(extpivotrangeeditor, _super);
    function extpivotrangeeditor(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extpivotrangeeditorMetaData);
    }
    extpivotrangeeditor.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extpivotrangeeditor.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extpivotrangeeditorMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extpivotrangeeditor.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extpivotrangeeditor.prototype, "dynamicRef", void 0);
    extpivotrangeeditor = __decorate([
        core_1.Component({
            selector: 'ext-' + extpivotrangeeditorMetaData.XTYPE,
            inputs: extpivotrangeeditorMetaData.INPUTNAMES,
            outputs: extpivotrangeeditorMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extpivotrangeeditor; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extpivotrangeeditor);
    return extpivotrangeeditor;
}(ext_base_1.extbase));
exports.extpivotrangeeditor = extpivotrangeeditor;
