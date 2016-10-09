import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.panel.Week
class extcalendar_weekMetaData {
	public static XTYPE: string = 'calendar-week';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'firstDayOfWeek',
		'value',
		'view',
		'visibleDays',
		'fit',
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
  selector: 'ext-' + extcalendar_weekMetaData.XTYPE,
	inputs: extcalendar_weekMetaData.INPUTNAMES,
	outputs: extcalendar_weekMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_week)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_week extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_weekMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_weekMetaData);}
}
