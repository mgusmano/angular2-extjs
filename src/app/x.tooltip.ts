import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.tip.ToolTip
class xtooltipMetaData {
	public static XTYPE: string = 'tooltip';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'align',
		'alignDelegate',
		'allowOver',
		'alwaysOnTop',
		'anchor',
		'anchorPosition',
		'anchorToTarget',
		'autoDestroy',
		'autoHide',
		'axisLock',
		'baseCls',
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
		'delegate',
		'disabled',
		'dismissDelay',
		'docked',
		'draggable',
		'enterAnimation',
		'exitAnimation',
		'flex',
		'floated',
		'fullscreen',
		'header',
		'height',
		'hidden',
		'hideAnimation',
		'hideDelay',
		'hideOnMaskTap',
		'html',
		'icon',
		'iconCls',
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
		'mouseOffset',
		'padding',
		'plugins',
		'publishes',
		'quickShowInterval',
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
		'showDelay',
		'showOnTap',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'target',
		'title',
		'toFrontOnShow',
		'tools',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'trackMouse',
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
		{name:'activate',parameters:'newActiveItem,tooltip,oldActiveItem'},
		{name:'add',parameters:'tooltip,item,index'},
		{name:'added',parameters:'tooltip,container,index'},
		{name:'beforehide',parameters:'tooltip'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'tooltip'},
		{name:'beforetofront',parameters:'tooltip'},
		{name:'deactivate',parameters:'oldActiveItem,tooltip,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'tooltip'},
		{name:'floatingchange',parameters:'tooltip,positioned'},
		{name:'fullscreen',parameters:'tooltip'},
		{name:'hide',parameters:'tooltip'},
		{name:'initialize',parameters:'tooltip'},
		{name:'move',parameters:'tooltip,item,toIndex,fromIndex'},
		{name:'moved',parameters:'tooltip,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'tooltip,positioned'},
		{name:'remove',parameters:'tooltip,item,index'},
		{name:'removed',parameters:'tooltip,container,index'},
		{name:'renderedchange',parameters:'tooltip,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'tooltip'},
		{name:'tofront',parameters:'tooltip'},
		{name:'updatedata',parameters:'tooltip,newData'},
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
  selector: 'x-' + xtooltipMetaData.XTYPE,
	inputs: xtooltipMetaData.INPUTNAMES,
	outputs: xtooltipMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xtooltip)}],
	template: '<template #dynamic></template>'
})
export class xtooltip extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xtooltipMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xtooltipMetaData);}
}
