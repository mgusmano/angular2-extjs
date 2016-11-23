import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.panel.Day
class xcalendar_dayMetaData {
	public static XTYPE: string = 'calendar-day';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'view',
		'visibleDays',
		'platformConfig',
		'responsiveConfig',
		'fittoparent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-day,context'},
		{name:'eventadd',parameters:'calendar-day,context'},
		{name:'eventedit',parameters:'calendar-day,context'},
		{name:'eventdrop',parameters:'calendar-day,context'},
		{name:'eventtap',parameters:'calendar-day,context'},
		{name:'validateeventadd',parameters:'calendar-day,context'},
		{name:'validateeventedit',parameters:'calendar-day,context'},
		{name:'validateeventdrop',parameters:'calendar-day,context'},
		{name:'valuechange',parameters:'calendar-day,context'},
		{name:'beforeeventadd',parameters:'calendar-day,context'},
		{name:'beforeeventdragstart',parameters:'calendar-day,context'},
		{name:'beforeeventresizestart',parameters:'calendar-day,context'},
		{name:'eventdrop',parameters:'calendar-day,context'},
		{name:'eventresize',parameters:'calendar-day,context'},
		{name:'validateeventdrop',parameters:'calendar-day,context'},
		{name:'validateeventresize',parameters:'calendar-day,context'},
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
		'beforeeventresizestart',
		'eventdrop',
		'eventresize',
		'validateeventdrop',
		'validateeventresize',
		'ready'
];
}
@Component({
  selector: 'x-' + xcalendar_dayMetaData.XTYPE,
	inputs: xcalendar_dayMetaData.INPUTNAMES,
	outputs: xcalendar_dayMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_day)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_day extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_dayMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_dayMetaData);}
}
