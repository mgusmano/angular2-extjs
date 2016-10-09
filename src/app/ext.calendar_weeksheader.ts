import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.calendar.header.Weeks
class extcalendar_weeksheaderMetaData {
	public static XTYPE: string = 'calendar-weeksheader';
	public static INPUTNAMES: string[] = [
		'cellCls',
		'compact',
		'compactOptions',
		'format',
		'value',
		'visibleDays',
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
  selector: 'ext-' + extcalendar_weeksheaderMetaData.XTYPE,
	inputs: extcalendar_weeksheaderMetaData.INPUTNAMES,
	outputs: extcalendar_weeksheaderMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extcalendar_weeksheader)}],
	template: '<template #dynamic></template>'
})
export class extcalendar_weeksheader extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extcalendar_weeksheaderMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extcalendar_weeksheaderMetaData);}
}
