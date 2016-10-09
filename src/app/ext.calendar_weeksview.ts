import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.view.Weeks
class extcalendar_weeksviewMetaData {
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
		'fit',
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
  selector: 'ext-' + extcalendar_weeksviewMetaData.XTYPE,
	inputs: extcalendar_weeksviewMetaData.INPUTNAMES,
	outputs: extcalendar_weeksviewMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_weeksview)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_weeksview extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_weeksviewMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_weeksviewMetaData);}
}
