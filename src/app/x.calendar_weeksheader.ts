import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.header.Weeks
class xcalendar_weeksheaderMetaData {
	public static XTYPE: string = 'calendar-weeksheader';
	public static INPUTNAMES: string[] = [
		'cellCls',
		'compact',
		'compactOptions',
		'format',
		'value',
		'visibleDays',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
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
  selector: 'x-' + xcalendar_weeksheaderMetaData.XTYPE,
	inputs: xcalendar_weeksheaderMetaData.INPUTNAMES,
	outputs: xcalendar_weeksheaderMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar_weeksheader)}],
	template: '<template #dynamic></template>'
})
export class xcalendar_weeksheader extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendar_weeksheaderMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendar_weeksheaderMetaData);}
}
