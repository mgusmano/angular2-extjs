import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.Container
class xcontainerMetaData {
	public static XTYPE: string = 'container';
	public static INPUTNAMES: string[] = [
		'activeItem',
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
		{name:'activate',parameters:'newActiveItem,container,oldActiveItem'},
		{name:'add',parameters:'container,item,index'},
		{name:'added',parameters:'container,container,index'},
		{name:'beforehide',parameters:'container'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'container'},
		{name:'beforetofront',parameters:'container'},
		{name:'deactivate',parameters:'oldActiveItem,container,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'container'},
		{name:'floatingchange',parameters:'container,positioned'},
		{name:'fullscreen',parameters:'container'},
		{name:'hide',parameters:'container'},
		{name:'initialize',parameters:'container'},
		{name:'move',parameters:'container,item,toIndex,fromIndex'},
		{name:'moved',parameters:'container,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'container,positioned'},
		{name:'remove',parameters:'container,item,index'},
		{name:'removed',parameters:'container,container,index'},
		{name:'renderedchange',parameters:'container,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'container'},
		{name:'tofront',parameters:'container'},
		{name:'updatedata',parameters:'container,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
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
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xcontainerMetaData.XTYPE,
	inputs: xcontainerMetaData.INPUTNAMES,
	outputs: xcontainerMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcontainer)}],
	template: '<template #dynamic></template>'
})
export class xcontainer extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcontainerMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcontainerMetaData);}
}
