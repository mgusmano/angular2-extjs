import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.ux.Gauge
class xgaugeMetaData {
	public static XTYPE: string = 'gauge';
	public static INPUTNAMES: string[] = [
		'angleOffset',
		'animation',
		'clockwise',
		'maxValue',
		'minValue',
		'padding',
		'textAlign',
		'textTpl',
		'trackLength',
		'trackStart',
		'trackStyle',
		'value',
		'valueStyle',
		'platformConfig',
		'responsiveConfig',
		'fittoparent',
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
  selector: 'x-' + xgaugeMetaData.XTYPE,
	inputs: xgaugeMetaData.INPUTNAMES,
	outputs: xgaugeMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xgauge)}],
	template: '<template #dynamic></template>'
})
export class xgauge extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xgaugeMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xgaugeMetaData);}
}
