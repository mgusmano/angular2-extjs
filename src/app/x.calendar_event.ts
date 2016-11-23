import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.Event
class xcalendar_eventMetaData {
	public static XTYPE: string = 'calendar-event';
	public static INPUTNAMES: string[] = [
		'defaultTitle',
		'endDate',
		'mode',
		'model',
		'palette',
		'resize',
		'startDate',
		'timeFormat',
		'title',
		'touchAction',
		'view',
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
  selector: 'x-' + xcalendar_eventMetaData.XTYPE,
	inputs: xcalendar_eventMetaData.INPUTNAMES,
	outputs: xcalendar_eventMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_event)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_event extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_eventMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_eventMetaData);}
}
