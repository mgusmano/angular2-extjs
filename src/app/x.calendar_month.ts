import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.panel.Month
class xcalendar_monthMetaData {
	public static XTYPE: string = 'calendar-month';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'value',
		'view',
		'visibleWeeks',
		'platformConfig',
		'responsiveConfig',
		'fittoparent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-month,context'},
		{name:'eventadd',parameters:'calendar-month,context'},
		{name:'eventedit',parameters:'calendar-month,context'},
		{name:'eventdrop',parameters:'calendar-month,context'},
		{name:'eventtap',parameters:'calendar-month,context'},
		{name:'validateeventadd',parameters:'calendar-month,context'},
		{name:'validateeventedit',parameters:'calendar-month,context'},
		{name:'validateeventdrop',parameters:'calendar-month,context'},
		{name:'valuechange',parameters:'calendar-month,context'},
		{name:'beforeeventadd',parameters:'calendar-month,context'},
		{name:'beforeeventdragstart',parameters:'calendar-month,context'},
		{name:'eventdrop',parameters:'calendar-month,context'},
		{name:'validateeventdrop',parameters:'calendar-month,context'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforeeventadd',
		'eventadd',
		'eventedit',
		'eventdrop',
		'eventtap',
		'validateeventadd',
		'validateeventedit',
		'validateeventdrop',
		'valuechange',
		'beforeeventadd',
		'beforeeventdragstart',
		'eventdrop',
		'validateeventdrop',
		'ready'
];
}
@Component({
  selector: 'x-' + xcalendar_monthMetaData.XTYPE,
	inputs: xcalendar_monthMetaData.INPUTNAMES,
	outputs: xcalendar_monthMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_month)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_month extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_monthMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_monthMetaData);}
}
