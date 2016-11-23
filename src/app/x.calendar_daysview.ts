import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.view.Days
class xcalendar_daysviewMetaData {
	public static XTYPE: string = 'calendar-daysview';
	public static INPUTNAMES: string[] = [
		'addForm',
		'allowSelection',
		'compact',
		'compactOptions',
		'controlStoreRange',
		'displayOverlap',
		'draggable',
		'droppable',
		'editForm',
		'endHour',
		'endHour',
		'eventDefaults',
		'gestureNavigation',
		'header',
		'resizeEvents',
		'showNowMarker',
		'store',
		'timeFormat',
		'timeRenderer',
		'timezoneOffset',
		'value',
		'visibleDays',
		'platformConfig',
		'responsiveConfig',
		'fittoparent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-daysview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-daysview,context'},
		{name:'beforeeventedit',parameters:'calendar-daysview,context'},
		{name:'beforeeventresizestart',parameters:'calendar-daysview,context'},
		{name:'eventadd',parameters:'calendar-daysview,context'},
		{name:'eventdrop',parameters:'calendar-daysview,context'},
		{name:'eventedit',parameters:'calendar-daysview,context'},
		{name:'eventresize',parameters:'calendar-daysview,context'},
		{name:'eventtap',parameters:'calendar-daysview,context'},
		{name:'validateeventadd',parameters:'calendar-daysview,context'},
		{name:'validateeventdrop',parameters:'calendar-daysview,context'},
		{name:'validateeventedit',parameters:'calendar-daysview,context'},
		{name:'validateeventresize',parameters:'calendar-daysview,context'},
		{name:'valuechange',parameters:'calendar-daysview,context'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventedit',
		'beforeeventresizestart',
		'eventadd',
		'eventdrop',
		'eventedit',
		'eventresize',
		'eventtap',
		'validateeventadd',
		'validateeventdrop',
		'validateeventedit',
		'validateeventresize',
		'valuechange',
		'ready'
];
}
@Component({
  selector: 'x-' + xcalendar_daysviewMetaData.XTYPE,
	inputs: xcalendar_daysviewMetaData.INPUTNAMES,
	outputs: xcalendar_daysviewMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_daysview)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_daysview extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_daysviewMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_daysviewMetaData);}
}
