import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.d3.canvas.Canvas
class xd3_canvasMetaData {
	public static XTYPE: string = 'd3-canvas';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'centered',
		'cls',
		'componentCls',
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
		'hdpi',
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
		'size',
		'store',
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
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'d3-canvas,container,index'},
		{name:'beforehide',parameters:'d3-canvas'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'d3-canvas'},
		{name:'beforetofront',parameters:'d3-canvas'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'d3-canvas'},
		{name:'floatingchange',parameters:'d3-canvas,positioned'},
		{name:'fullscreen',parameters:'d3-canvas'},
		{name:'hide',parameters:'d3-canvas'},
		{name:'initialize',parameters:'d3-canvas'},
		{name:'moved',parameters:'d3-canvas,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'d3-canvas,positioned'},
		{name:'removed',parameters:'d3-canvas,container,index'},
		{name:'resize',parameters:'element'},
		{name:'sceneresize',parameters:'component,canvas,size'},
		{name:'show',parameters:'d3-canvas'},
		{name:'tofront',parameters:'d3-canvas'},
		{name:'updatedata',parameters:'d3-canvas,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
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
		'sceneresize',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xd3_canvasMetaData.XTYPE,
	inputs: xd3_canvasMetaData.INPUTNAMES,
	outputs: xd3_canvasMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xd3_canvas)}],
	template: '<template #dynamic></template>'
})
export class xd3_canvas extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xd3_canvasMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xd3_canvasMetaData);}
}
