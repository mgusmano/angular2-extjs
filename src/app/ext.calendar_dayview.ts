import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.view.Day
class extcalendar_dayviewMetaData {
	public static XTYPE: string = 'calendar-dayview';
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
		{name:'beforeeventadd',parameters:'calendar-dayview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-dayview,context'},
		{name:'beforeeventedit',parameters:'calendar-dayview,context'},
		{name:'beforeeventresizestart',parameters:'calendar-dayview,context'},
		{name:'eventadd',parameters:'calendar-dayview,context'},
		{name:'eventdrop',parameters:'calendar-dayview,context'},
		{name:'eventedit',parameters:'calendar-dayview,context'},
		{name:'eventresize',parameters:'calendar-dayview,context'},
		{name:'eventtap',parameters:'calendar-dayview,context'},
		{name:'validateeventadd',parameters:'calendar-dayview,context'},
		{name:'validateeventdrop',parameters:'calendar-dayview,context'},
		{name:'validateeventedit',parameters:'calendar-dayview,context'},
		{name:'validateeventresize',parameters:'calendar-dayview,context'},
		{name:'valuechange',parameters:'calendar-dayview,context'},
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
  selector: 'ext-' + extcalendar_dayviewMetaData.XTYPE,
	inputs: extcalendar_dayviewMetaData.INPUTNAMES,
	outputs: extcalendar_dayviewMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_dayview)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_dayview extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_dayviewMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_dayviewMetaData);}
}
