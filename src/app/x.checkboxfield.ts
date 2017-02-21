import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.field.Checkbox
class xcheckboxfieldMetaData {
	public static XTYPE: string = 'checkboxfield';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'axisLock',
		'baseCls',
		'bind',
		'bodyAlign',
		'border',
		'bottom',
		'centered',
		'checked',
		'clearIcon',
		'cls',
		'component',
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
		'inputCls',
		'inputType',
		'isFocused',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'label',
		'labelAlign',
		'labelCls',
		'labelMaskTap',
		'labelTextAlign',
		'labelWidth',
		'labelWrap',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'name',
		'padding',
		'plugins',
		'publishes',
		'record',
		'reference',
		'relative',
		'renderTo',
		'required',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'tabIndex',
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
		{name:'added',parameters:'checkboxfield,container,index'},
		{name:'beforehide',parameters:'checkboxfield'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'checkboxfield'},
		{name:'beforetofront',parameters:'checkboxfield'},
		{name:'change',parameters:'checkboxfield,newValue,oldValue'},
		{name:'check',parameters:'checkboxfield'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'checkboxfield'},
		{name:'floatingchange',parameters:'checkboxfield,positioned'},
		{name:'fullscreen',parameters:'checkboxfield'},
		{name:'hide',parameters:'checkboxfield'},
		{name:'initialize',parameters:'checkboxfield'},
		{name:'moved',parameters:'checkboxfield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'checkboxfield,positioned'},
		{name:'removed',parameters:'checkboxfield,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'checkboxfield'},
		{name:'tofront',parameters:'checkboxfield'},
		{name:'uncheck',parameters:'checkboxfield'},
		{name:'updatedata',parameters:'checkboxfield,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'change',
		'check',
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
		'show',
		'tofront',
		'uncheck',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xcheckboxfieldMetaData.XTYPE,
	inputs: xcheckboxfieldMetaData.INPUTNAMES,
	outputs: xcheckboxfieldMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcheckboxfield)}],
	template: '<template #dynamic></template>'
})
export class xcheckboxfield extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcheckboxfieldMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcheckboxfieldMetaData);}
}
