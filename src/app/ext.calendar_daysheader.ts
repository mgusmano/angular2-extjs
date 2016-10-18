import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.header.Days
class extcalendar_daysheaderMetaData {
	public static XTYPE: string = 'calendar-daysheader';
	public static INPUTNAMES: string[] = [
		'cellCls',
		'compact',
		'compactOptions',
		'format',
		'value',
		'visibleDays',
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
  selector: 'ext-' + extcalendar_daysheaderMetaData.XTYPE,
	inputs: extcalendar_daysheaderMetaData.INPUTNAMES,
	outputs: extcalendar_daysheaderMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_daysheader)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_daysheader extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_daysheaderMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_daysheaderMetaData);}
}
