import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.chart.interactions.Abstract
class extinteractionMetaData {
	public static XTYPE: string = 'interaction';
	public static INPUTNAMES: string[] = [
		'chart',
		'enabled',
		'gesture',
		'listeners',
		'fit',
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
  selector: 'ext-' + extinteractionMetaData.XTYPE,
	inputs: extinteractionMetaData.INPUTNAMES,
	outputs: extinteractionMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extinteraction)}],
	template: '<template #dynamic></template>'
})
export class extinteraction extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extinteractionMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extinteractionMetaData);}
}
