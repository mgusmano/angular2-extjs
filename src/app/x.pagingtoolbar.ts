import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.grid.PagingToolbar
class xpagingtoolbarMetaData {
	public static XTYPE: string = 'pagingtoolbar';
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
		'defaultButtonUI',
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
		'nextButton',
		'padding',
		'plugins',
		'prevButton',
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
		'sliderField',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'summaryComponent',
		'title',
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
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,pagingtoolbar,oldActiveItem'},
		{name:'add',parameters:'pagingtoolbar,item,index'},
		{name:'added',parameters:'pagingtoolbar,container,index'},
		{name:'beforehide',parameters:'pagingtoolbar'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'pagingtoolbar'},
		{name:'beforetofront',parameters:'pagingtoolbar'},
		{name:'deactivate',parameters:'oldActiveItem,pagingtoolbar,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'pagingtoolbar'},
		{name:'floatingchange',parameters:'pagingtoolbar,positioned'},
		{name:'fullscreen',parameters:'pagingtoolbar'},
		{name:'hide',parameters:'pagingtoolbar'},
		{name:'initialize',parameters:'pagingtoolbar'},
		{name:'move',parameters:'pagingtoolbar,item,toIndex,fromIndex'},
		{name:'moved',parameters:'pagingtoolbar,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'pagingtoolbar,positioned'},
		{name:'remove',parameters:'pagingtoolbar,item,index'},
		{name:'removed',parameters:'pagingtoolbar,container,index'},
		{name:'renderedchange',parameters:'pagingtoolbar,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'pagingtoolbar'},
		{name:'tofront',parameters:'pagingtoolbar'},
		{name:'updatedata',parameters:'pagingtoolbar,newData'},
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
  selector: 'x-' + xpagingtoolbarMetaData.XTYPE,
	inputs: xpagingtoolbarMetaData.INPUTNAMES,
	outputs: xpagingtoolbarMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xpagingtoolbar)}],
	template: '<template #dynamic></template>'
})
export class xpagingtoolbar extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xpagingtoolbarMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xpagingtoolbarMetaData);}
}
