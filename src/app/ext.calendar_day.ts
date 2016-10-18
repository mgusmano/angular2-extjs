import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.panel.Day
class extcalendar_dayMetaData {
	public static XTYPE: string = 'calendar-day';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'view',
		'visibleDays',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
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
  selector: 'ext-' + extcalendar_dayMetaData.XTYPE,
	inputs: extcalendar_dayMetaData.INPUTNAMES,
	outputs: extcalendar_dayMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_day)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_day extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_dayMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_dayMetaData);}
}
