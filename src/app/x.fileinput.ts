import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.field.FileInput
class xfileinputMetaData {
	public static XTYPE: string = 'fileinput';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'autoCapitalize',
		'autoComplete',
		'autoCorrect',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'centered',
		'checked',
		'cls',
		'contentEl',
		'controller',
		'data',
		'defaultListenerScope',
		'disabled',
		'docked',
		'draggable',
		'enterAnimation',
		'exitAnimation',
		'fastFocus',
		'flex',
		'floated',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'id',
		'isFocused',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxLength',
		'maxRows',
		'maxValue',
		'maxWidth',
		'me',
		'minHeight',
		'minValue',
		'minWidth',
		'modal',
		'name',
		'newValue',
		'originalValue',
		'padding',
		'pattern',
		'placeHolder',
		'plugins',
		'publishes',
		'readOnly',
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
		'startValue',
		'stepValue',
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
		'type',
		'ui',
		'useBodyElement',
		'useMask',
		'userCls',
		'value',
		'value',
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
		{name:'added',parameters:'fileinput,container,index'},
		{name:'beforehide',parameters:'fileinput'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'fileinput'},
		{name:'beforetofront',parameters:'fileinput'},
		{name:'blur',parameters:'e'},
		{name:'change',parameters:'fileinput,newValue,oldValue'},
		{name:'click',parameters:'e'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'fileinput'},
		{name:'floatingchange',parameters:'fileinput,positioned'},
		{name:'focus',parameters:'e'},
		{name:'fullscreen',parameters:'fileinput'},
		{name:'hide',parameters:'fileinput'},
		{name:'initialize',parameters:'fileinput'},
		{name:'keyup',parameters:'e'},
		{name:'masktap',parameters:'fileinput,e'},
		{name:'mousedown',parameters:'e'},
		{name:'moved',parameters:'fileinput,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'e'},
		{name:'positionedchange',parameters:'fileinput,positioned'},
		{name:'removed',parameters:'fileinput,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'fileinput'},
		{name:'tofront',parameters:'fileinput'},
		{name:'updatedata',parameters:'fileinput,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'blur',
		'change',
		'click',
		'destroy',
		'erased',
		'floatingchange',
		'focus',
		'fullscreen',
		'hide',
		'initialize',
		'keyup',
		'masktap',
		'mousedown',
		'moved',
		'orientationchange',
		'painted',
		'paste',
		'positionedchange',
		'removed',
		'resize',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xfileinputMetaData.XTYPE,
	inputs: xfileinputMetaData.INPUTNAMES,
	outputs: xfileinputMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xfileinput)}],
	template: '<template #dynamic></template>'
})
export class xfileinput extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xfileinputMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xfileinputMetaData);}
}
