import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.panel.Weeks
class extcalendar_weeksMetaData {
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
  selector: 'ext-' + extcalendar_weeksMetaData.XTYPE,
	inputs: extcalendar_weeksMetaData.INPUTNAMES,
	outputs: extcalendar_weeksMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_weeks)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_weeks extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_weeksMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_weeksMetaData);}
}
