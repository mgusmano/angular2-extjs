import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.form.Add
class extcalendar_form_addMetaData {
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
  selector: 'ext-' + extcalendar_form_addMetaData.XTYPE,
	inputs: extcalendar_form_addMetaData.INPUTNAMES,
	outputs: extcalendar_form_addMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_form_add)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_form_add extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_form_addMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_form_addMetaData);}
}
