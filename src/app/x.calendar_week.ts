import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.panel.Week
class xcalendar_weekMetaData {
	public static XTYPE: string = 'calendar-week';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'firstDayOfWeek',
		'value',
		'view',
		'visibleDays',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-week,context'},
		{name:'eventadd',parameters:'calendar-week,context'},
		{name:'eventedit',parameters:'calendar-week,context'},
		{name:'eventdrop',parameters:'calendar-week,context'},
		{name:'eventtap',parameters:'calendar-week,context'},
		{name:'validateeventadd',parameters:'calendar-week,context'},
		{name:'validateeventedit',parameters:'calendar-week,context'},
		{name:'validateeventdrop',parameters:'calendar-week,context'},
		{name:'valuechange',parameters:'calendar-week,context'},
		{name:'beforeeventadd',parameters:'calendar-week,context'},
		{name:'beforeeventdragstart',parameters:'calendar-week,context'},
		{name:'beforeeventresizestart',parameters:'calendar-week,context'},
		{name:'eventdrop',parameters:'calendar-week,context'},
		{name:'eventresize',parameters:'calendar-week,context'},
		{name:'validateeventdrop',parameters:'calendar-week,context'},
		{name:'validateeventresize',parameters:'calendar-week,context'},
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
  selector: 'x-' + xcalendar_weekMetaData.XTYPE,
	inputs: xcalendar_weekMetaData.INPUTNAMES,
	outputs: xcalendar_weekMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_week)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_week extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_weekMetaData);
	}
	@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_weekMetaData);}
}
