import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.form.FieldSet
class xfieldsetMetaData {
	public static XTYPE: string = 'fieldset';
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
		'fieldSeparators',
		'flex',
		'floated',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'id',
		'inputBorders',
		'instructions',
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
		{name:'activate',parameters:'newActiveItem,fieldset,oldActiveItem'},
		{name:'add',parameters:'fieldset,item,index'},
		{name:'added',parameters:'fieldset,container,index'},
		{name:'beforehide',parameters:'fieldset'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'fieldset'},
		{name:'beforetofront',parameters:'fieldset'},
		{name:'deactivate',parameters:'oldActiveItem,fieldset,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'fieldset'},
		{name:'floatingchange',parameters:'fieldset,positioned'},
		{name:'fullscreen',parameters:'fieldset'},
		{name:'hide',parameters:'fieldset'},
		{name:'initialize',parameters:'fieldset'},
		{name:'move',parameters:'fieldset,item,toIndex,fromIndex'},
		{name:'moved',parameters:'fieldset,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'fieldset,positioned'},
		{name:'remove',parameters:'fieldset,item,index'},
		{name:'removed',parameters:'fieldset,container,index'},
		{name:'renderedchange',parameters:'fieldset,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'fieldset'},
		{name:'tofront',parameters:'fieldset'},
		{name:'updatedata',parameters:'fieldset,newData'},
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
  selector: 'x-' + xfieldsetMetaData.XTYPE,
	inputs: xfieldsetMetaData.INPUTNAMES,
	outputs: xfieldsetMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xfieldset)}],
	template: '<template #dynamic></template>'
})
export class xfieldset extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xfieldsetMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xfieldsetMetaData);}
}
