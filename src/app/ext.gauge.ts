import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.ux.Gauge
class extgaugeMetaData {
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
  selector: 'ext-' + extgaugeMetaData.XTYPE,
	inputs: extgaugeMetaData.INPUTNAMES,
	outputs: extgaugeMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extgauge)}],
	template: '<template #dynamic></template>'
})
export class extgauge extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extgaugeMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extgaugeMetaData);}
}
