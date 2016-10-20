import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.form.Edit
class xcalendar_form_editMetaData {
	public static XTYPE: string = 'calendar-form-edit';
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
		{name:'cancel',parameters:'calendar-form-edit'},
		{name:'drop',parameters:'calendar-form-edit'},
		{name:'save',parameters:'calendar-form-edit,context'},
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
  selector: 'x-' + xcalendar_form_editMetaData.XTYPE,
	inputs: xcalendar_form_editMetaData.INPUTNAMES,
	outputs: xcalendar_form_editMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_form_edit)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_form_edit extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_form_editMetaData);
	}
	@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_form_editMetaData);}
}
