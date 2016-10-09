import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.draw.Surface
class extsurfaceMetaData {
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
		'fit',
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
  selector: 'ext-' + extsurfaceMetaData.XTYPE,
	inputs: extsurfaceMetaData.INPUTNAMES,
	outputs: extsurfaceMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extsurface)}],
	template: '<template #dynamic></template>'
})
export class extsurface extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extsurfaceMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extsurfaceMetaData);}
}
