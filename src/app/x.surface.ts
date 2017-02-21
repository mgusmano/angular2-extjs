import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.draw.Surface
class xsurfaceMetaData {
	public static XTYPE: string = 'surface';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'background',
		'baseCls',
		'bind',
		'border',
		'cls',
		'controller',
		'defaultListenerScope',
		'dirty',
		'flex',
		'flipRtlText',
		'floated',
		'height',
		'hidden',
		'id',
		'itemId',
		'items',
		'listeners',
		'plugins',
		'publishes',
		'rect',
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
		{name:'beforetofront',parameters:'surface'},
		{name:'tofront',parameters:'surface'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforetofront',
		'tofront',
		'ready'
];
}
@Component({
  selector: 'x-' + xsurfaceMetaData.XTYPE,
	inputs: xsurfaceMetaData.INPUTNAMES,
	outputs: xsurfaceMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xsurface)}],
	template: '<template #dynamic></template>'
})
export class xsurface extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xsurfaceMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xsurfaceMetaData);}
}
