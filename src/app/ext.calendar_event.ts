import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.Event
class extcalendar_eventMetaData {
	public static XTYPE: string = 'calendar-event';
	public static INPUTNAMES: string[] = [
		'defaultTitle',
		'endDate',
		'mode',
		'model',
		'palette',
		'resize',
		'startDate',
		'timeFormat',
		'title',
		'touchAction',
		'view',
		'fit',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'ready'
];
}
@Component({
  selector: 'ext-' + extcalendar_eventMetaData.XTYPE,
	inputs: extcalendar_eventMetaData.INPUTNAMES,
	outputs: extcalendar_eventMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_event)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_event extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_eventMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_eventMetaData);}
}
