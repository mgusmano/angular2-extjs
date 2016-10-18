import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.panel.Month
class extcalendar_monthMetaData {
	public static XTYPE: string = 'calendar-month';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'value',
		'view',
		'visibleWeeks',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-month,context'},
		{name:'eventadd',parameters:'calendar-month,context'},
		{name:'eventedit',parameters:'calendar-month,context'},
		{name:'eventdrop',parameters:'calendar-month,context'},
		{name:'eventtap',parameters:'calendar-month,context'},
		{name:'validateeventadd',parameters:'calendar-month,context'},
		{name:'validateeventedit',parameters:'calendar-month,context'},
		{name:'validateeventdrop',parameters:'calendar-month,context'},
		{name:'valuechange',parameters:'calendar-month,context'},
		{name:'beforeeventadd',parameters:'calendar-month,context'},
		{name:'beforeeventdragstart',parameters:'calendar-month,context'},
		{name:'eventdrop',parameters:'calendar-month,context'},
		{name:'validateeventdrop',parameters:'calendar-month,context'},
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
  selector: 'ext-' + extcalendar_monthMetaData.XTYPE,
	inputs: extcalendar_monthMetaData.INPUTNAMES,
	outputs: extcalendar_monthMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_month)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_month extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_monthMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_monthMetaData);}
}
