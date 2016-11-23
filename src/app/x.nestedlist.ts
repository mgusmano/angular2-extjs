import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.dataview.NestedList
class xnestedlistMetaData {
	public static XTYPE: string = 'nestedlist';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'allowDeselect',
		'alwaysOnTop',
		'autoDestroy',
		'axisLock',
		'backButton',
		'backText',
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
		'detailCard',
		'detailContainer',
		'disabled',
		'displayField',
		'docked',
		'draggable',
		'emptyText',
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
		'itemHeight',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'lastActiveList',
		'lastNode',
		'layout',
		'left',
		'listConfig',
		'listeners',
		'loadingText',
		'manageBorders',
		'margin',
		'masked',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'onItemDisclosure',
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
		'store',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'title',
		'toFrontOnShow',
		'toolbar',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'twoWayBindable',
		'ui',
		'updateTitleText',
		'useBodyElement',
		'userCls',
		'useSimpleItems',
		'useTitleAsBackText',
		'useToolbar',
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
		{name:'activate',parameters:'newActiveItem,nestedlist,oldActiveItem'},
		{name:'add',parameters:'nestedlist,item,index'},
		{name:'added',parameters:'nestedlist,container,index'},
		{name:'back',parameters:'nestedlist,node,lastActiveList,detailCardActive'},
		{name:'beforehide',parameters:'nestedlist'},
		{name:'beforeload',parameters:'nestedlist,store,operation'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeselectionchange',parameters:'nestedlist,list,node,selections'},
		{name:'beforeshow',parameters:'nestedlist'},
		{name:'beforetofront',parameters:'nestedlist'},
		{name:'containertap',parameters:'nestedlist,list,e'},
		{name:'deactivate',parameters:'oldActiveItem,nestedlist,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'nestedlist'},
		{name:'floatingchange',parameters:'nestedlist,positioned'},
		{name:'fullscreen',parameters:'nestedlist'},
		{name:'hide',parameters:'nestedlist'},
		{name:'initialize',parameters:'nestedlist'},
		{name:'itemdoubletap',parameters:'nestedlist,list,index,target,record,e'},
		{name:'itemtap',parameters:'nestedlist,list,index,target,record,e'},
		{name:'leafitemtap',parameters:'nestedlist,list,index,target,record,e'},
		{name:'listchange',parameters:'nestedlist,listitem'},
		{name:'load',parameters:'nestedlist,store,records,successful,operation'},
		{name:'move',parameters:'nestedlist,item,toIndex,fromIndex'},
		{name:'moved',parameters:'nestedlist,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'nestedlist,positioned'},
		{name:'remove',parameters:'nestedlist,item,index'},
		{name:'removed',parameters:'nestedlist,container,index'},
		{name:'renderedchange',parameters:'nestedlist,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'selectionchange',parameters:'nestedlist,list,selections'},
		{name:'show',parameters:'nestedlist'},
		{name:'tofront',parameters:'nestedlist'},
		{name:'updatedata',parameters:'nestedlist,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'back',
		'beforehide',
		'beforeload',
		'beforeorientationchange',
		'beforeselectionchange',
		'beforeshow',
		'beforetofront',
		'containertap',
		'deactivate',
		'destroy',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'itemdoubletap',
		'itemtap',
		'leafitemtap',
		'listchange',
		'load',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'selectionchange',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xnestedlistMetaData.XTYPE,
	inputs: xnestedlistMetaData.INPUTNAMES,
	outputs: xnestedlistMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xnestedlist)}],
	template: '<template #dynamic></template>'
})
export class xnestedlist extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xnestedlistMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xnestedlistMetaData);}
}
