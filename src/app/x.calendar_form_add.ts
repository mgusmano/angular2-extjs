import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.form.Add
class xcalendar_form_addMetaData {
	public static XTYPE: string = 'calendar-form-add';
	public static INPUTNAMES: string[] = [
		'defaultEndTime',
		'defaultStartTime',
		'event',
		'title',
		'view',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'cancel',parameters:'calendar-form-add'},
		{name:'drop',parameters:'calendar-form-add'},
		{name:'save',parameters:'calendar-form-add,context'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'cancel',
		'drop',
		'save',
		'ready'
];
}
@Component({
  selector: 'x-' + xcalendar_form_addMetaData.XTYPE,
	inputs: xcalendar_form_addMetaData.INPUTNAMES,
	outputs: xcalendar_form_addMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_form_add)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_form_add extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_form_addMetaData);
	}
	@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_form_addMetaData);}
}
