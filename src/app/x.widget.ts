import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.Widget
class xwidgetMetaData {
	public static XTYPE: string = 'widget';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'baseCls',
		'bind',
		'border',
		'cls',
		'controller',
		'defaultListenerScope',
		'flex',
		'floated',
		'height',
		'hidden',
		'id',
		'itemId',
		'listeners',
		'plugins',
		'publishes',
		'reference',
		'relative',
		'session',
		'shadow',
		'shim',
		'style',
		'toFrontOnShow',
		'touchAction',
		'translatable',
		'twoWayBindable',
		'ui',
		'userCls',
		'viewModel',
		'width',
		'x',
		'y',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforetofront',parameters:'widget'},
		{name:'tofront',parameters:'widget'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforetofront',
		'tofront',
		'ready'
];
}
@Component({
  selector: 'x-' + xwidgetMetaData.XTYPE,
	inputs: xwidgetMetaData.INPUTNAMES,
	outputs: xwidgetMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xwidget)}],
	template: '<template #dynamic></template>'
})
export class xwidget extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xwidgetMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xwidgetMetaData);}
}
