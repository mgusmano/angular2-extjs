import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.grid.Grid
class xgridMetaData {
	public static XTYPE: string = 'grid';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'allowDeselect',
		'alwaysOnTop',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'bufferSize',
		'cardSwitchAnimation',
		'centered',
		'cls',
		'columns',
		'container',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'deferEmptyText',
		'deselectOnContainerClick',
		'disabled',
		'disableSelection',
		'disclosureProperty',
		'docked',
		'draggable',
		'emptyText',
		'enterAnimation',
		'exitAnimation',
		'flex',
		'floated',
		'fullscreen',
		'grouped',
		'height',
		'hidden',
		'hideAnimation',
		'hideHeaders',
		'hideOnMaskTap',
		'html',
		'id',
		'indexBar',
		'infinite',
		'inline',
		'itemCls',
		'itemConfig',
		'itemHeight',
		'itemId',
		'itemMap',
		'items',
		'itemTpl',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'lastFocused',
		'lastSelected',
		'layout',
		'left',
		'listeners',
		'loadingText',
		'locked',
		'manageBorders',
		'margin',
		'masked',
		'maxHeight',
		'maxItemCache',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'mode',
		'onItemDisclosure',
		'padding',
		'pinHeaders',
		'pinnedHeader',
		'plugins',
		'pressedDelay',
		'preventSelectionOnDisclose',
		'publishes',
		'record',
		'reference',
		'referenceHolder',
		'refreshHeightOnUpdate',
		'relative',
		'renderTo',
		'right',
		'rowLines',
		'scrollable',
		'scrollDock',
		'scrollToTopOnRefresh',
		'selection',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'store',
		'striped',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'title',
		'toFrontOnShow',
		'tooltip',
		'top',
		'totalColumnWidth',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'triggerCtEvent',
		'triggerEvent',
		'twoWayBindable',
		'ui',
		'useBodyElement',
		'useComponents',
		'userCls',
		'useSimpleItems',
		'variableHeights',
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
		{name:'activate',parameters:'newActiveItem,grid,oldActiveItem'},
		{name:'add',parameters:''},
		{name:'added',parameters:'grid,container,index'},
		{name:'beforehide',parameters:'grid'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeselectionchange',parameters:'grid'},
		{name:'beforeshow',parameters:'grid'},
		{name:'beforetofront',parameters:'grid'},
		{name:'columnadd',parameters:'grid,column,index'},
		{name:'columnhide',parameters:'grid,column'},
		{name:'columnmove',parameters:'grid,column,fromIndex,toIndex'},
		{name:'columnremove',parameters:'grid,column'},
		{name:'columnresize',parameters:'grid,column,width'},
		{name:'columnshow',parameters:'grid,column'},
		{name:'columnsort',parameters:'grid,column,direction'},
		{name:'containertap',parameters:''},
		{name:'deactivate',parameters:'oldActiveItem,grid,newActiveItem'},
		{name:'deselect',parameters:'grid,record,supressed'},
		{name:'destroy',parameters:''},
		{name:'disclose',parameters:'grid,record,target,index,e'},
		{name:'erased',parameters:'grid'},
		{name:'floatingchange',parameters:'grid,positioned'},
		{name:'fullscreen',parameters:'grid'},
		{name:'hide',parameters:'grid'},
		{name:'initialize',parameters:'grid'},
		{name:'itemdoubletap',parameters:'grid,index,target,record,e'},
		{name:'itemmouseenter',parameters:'grid,index,target,record,e'},
		{name:'itemmouseleave',parameters:'grid,index,target,record,e'},
		{name:'itemsingletap',parameters:'grid,index,target,record,e'},
		{name:'itemswipe',parameters:'grid,index,target,record,e'},
		{name:'itemtap',parameters:'grid,index,target,record,e'},
		{name:'itemtaphold',parameters:'grid,index,target,record,e'},
		{name:'itemtouchend',parameters:'grid,index,target,record,e'},
		{name:'itemtouchmove',parameters:'grid,index,target,record,e'},
		{name:'itemtouchstart',parameters:'grid,index,target,record,e'},
		{name:'move',parameters:''},
		{name:'moved',parameters:'grid,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'grid,positioned'},
		{name:'refresh',parameters:'grid'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'grid,container,index'},
		{name:'renderedchange',parameters:'grid,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'select',parameters:'grid,record'},
		{name:'selectionchange',parameters:'grid,records'},
		{name:'show',parameters:'grid'},
		{name:'tofront',parameters:'grid'},
		{name:'updatedata',parameters:'grid,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeselectionchange',
		'beforeshow',
		'beforetofront',
		'columnadd',
		'columnhide',
		'columnmove',
		'columnremove',
		'columnresize',
		'columnshow',
		'columnsort',
		'containertap',
		'deactivate',
		'deselect',
		'destroy',
		'disclose',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'itemdoubletap',
		'itemmouseenter',
		'itemmouseleave',
		'itemsingletap',
		'itemswipe',
		'itemtap',
		'itemtaphold',
		'itemtouchend',
		'itemtouchmove',
		'itemtouchstart',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'refresh',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'select',
		'selectionchange',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xgridMetaData.XTYPE,
	inputs: xgridMetaData.INPUTNAMES,
	outputs: xgridMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xgrid)}],
	template: '<template #dynamic></template>'
})
export class xgrid extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xgridMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xgridMetaData);}
}
