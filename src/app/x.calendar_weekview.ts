import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.view.Week
class xcalendar_weekviewMetaData {
	public static XTYPE: string = 'calendar-weekview';
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
		'eventDefaults',
		'firstDayOfWeek',
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
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-weekview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-weekview,context'},
		{name:'beforeeventedit',parameters:'calendar-weekview,context'},
		{name:'beforeeventresizestart',parameters:'calendar-weekview,context'},
		{name:'eventadd',parameters:'calendar-weekview,context'},
		{name:'eventdrop',parameters:'calendar-weekview,context'},
		{name:'eventedit',parameters:'calendar-weekview,context'},
		{name:'eventresize',parameters:'calendar-weekview,context'},
		{name:'eventtap',parameters:'calendar-weekview,context'},
		{name:'validateeventadd',parameters:'calendar-weekview,context'},
		{name:'validateeventdrop',parameters:'calendar-weekview,context'},
		{name:'validateeventedit',parameters:'calendar-weekview,context'},
		{name:'validateeventresize',parameters:'calendar-weekview,context'},
		{name:'valuechange',parameters:'calendar-weekview,context'},
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
  selector: 'x-' + xcalendar_weekviewMetaData.XTYPE,
	inputs: xcalendar_weekviewMetaData.INPUTNAMES,
	outputs: xcalendar_weekviewMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_weekview)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_weekview extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_weekviewMetaData);
	}
	@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_weekviewMetaData);}
}
