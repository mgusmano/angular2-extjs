import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.chart.interactions.Abstract
class xinteractionMetaData {
	public static XTYPE: string = 'interaction';
	public static INPUTNAMES: string[] = [
		'chart',
		'enabled',
		'gesture',
		'listeners',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'ready'
];
}
@Component({
  selector: 'x-' + xinteractionMetaData.XTYPE,
	inputs: xinteractionMetaData.INPUTNAMES,
	outputs: xinteractionMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xinteraction)}],
	template: '<template #dynamic></template>'
})
export class xinteraction extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xinteractionMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xinteractionMetaData);}
}
