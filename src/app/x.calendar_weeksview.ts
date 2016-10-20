import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.view.Weeks
class xcalendar_weeksviewMetaData {
	public static XTYPE: string = 'calendar-weeksview';
	public static INPUTNAMES: string[] = [
		'addForm',
		'addOnSelect',
		'allowSelection',
		'compact',
		'compactOptions',
		'controlStoreRange',
		'dayFormat',
		'draggable',
		'droppable',
		'editForm',
		'eventDefaults',
		'firstDayOfWeek',
		'gestureNavigation',
		'header',
		'overflowText',
		'showOverflow',
		'store',
		'timezoneOffset',
		'value',
		'visibleDays',
		'visibleWeeks',
		'weekendDays',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-weeksview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-weeksview,context'},
		{name:'beforeeventedit',parameters:'calendar-weeksview,context'},
		{name:'eventadd',parameters:'calendar-weeksview,context'},
		{name:'eventdrop',parameters:'calendar-weeksview,context'},
		{name:'eventedit',parameters:'calendar-weeksview,context'},
		{name:'eventtap',parameters:'calendar-weeksview,context'},
		{name:'select',parameters:'calendar-weeksview,context'},
		{name:'selectrange',parameters:'calendar-weeksview,context'},
		{name:'validateeventadd',parameters:'calendar-weeksview,context'},
		{name:'validateeventdrop',parameters:'calendar-weeksview,context'},
		{name:'validateeventedit',parameters:'calendar-weeksview,context'},
		{name:'valuechange',parameters:'calendar-weeksview,context'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventedit',
		'eventadd',
		'eventdrop',
		'eventedit',
		'eventtap',
		'select',
		'selectrange',
		'validateeventadd',
		'validateeventdrop',
		'validateeventedit',
		'valuechange',
		'ready'
];
}
@Component({
  selector: 'x-' + xcalendar_weeksviewMetaData.XTYPE,
	inputs: xcalendar_weeksviewMetaData.INPUTNAMES,
	outputs: xcalendar_weeksviewMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_weeksview)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_weeksview extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_weeksviewMetaData);
	}
	@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_weeksviewMetaData);}
}
