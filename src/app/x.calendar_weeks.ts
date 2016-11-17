import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.panel.Weeks
class xcalendar_weeksMetaData {
	public static XTYPE: string = 'calendar-weeks';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'view',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-weeks,context'},
		{name:'eventadd',parameters:'calendar-weeks,context'},
		{name:'eventedit',parameters:'calendar-weeks,context'},
		{name:'eventdrop',parameters:'calendar-weeks,context'},
		{name:'eventtap',parameters:'calendar-weeks,context'},
		{name:'validateeventadd',parameters:'calendar-weeks,context'},
		{name:'validateeventedit',parameters:'calendar-weeks,context'},
		{name:'validateeventdrop',parameters:'calendar-weeks,context'},
		{name:'valuechange',parameters:'calendar-weeks,context'},
		{name:'beforeeventadd',parameters:'calendar-weeks,context'},
		{name:'beforeeventdragstart',parameters:'calendar-weeks,context'},
		{name:'eventdrop',parameters:'calendar-weeks,context'},
		{name:'validateeventdrop',parameters:'calendar-weeks,context'},
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
  selector: 'x-' + xcalendar_weeksMetaData.XTYPE,
	inputs: xcalendar_weeksMetaData.INPUTNAMES,
	outputs: xcalendar_weeksMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_weeks)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_weeks extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_weeksMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_weeksMetaData);}
}
