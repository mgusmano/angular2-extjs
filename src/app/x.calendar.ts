import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.calendar.panel.Panel
class xcalendarMetaData {
	public static XTYPE: string = 'calendar';
	public static INPUTNAMES: string[] = [
		'calendarList',
		'calendarList',
		'compact',
		'compactOptions',
		'createButtonPosition',
		'dateTitle',
		'defaultView',
		'nextButton',
		'nextButton',
		'sideBar',
		'store',
		'switcher',
		'switcherPosition',
		'timezoneOffset',
		'titleBar',
		'todayButton',
		'value',
		'views',
		'platformConfig',
		'responsiveConfig',
		'fittoparent',
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
  selector: 'x-' + xcalendarMetaData.XTYPE,
	inputs: xcalendarMetaData.INPUTNAMES,
	outputs: xcalendarMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcalendar)}],
	template: '<template #dynamic></template>'
})
export class xcalendar extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcalendarMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcalendarMetaData);}
}
