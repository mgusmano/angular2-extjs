import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.chart.SpaceFillingChart
class xspacefillingMetaData {
	public static XTYPE: string = 'spacefilling';
	public static INPUTNAMES: string[] = [
		'animation',
		'axes',
		'background',
		'colors',
		'engine',
		'gradients',
		'highlightItem',
		'insetPadding',
		'interactions',
		'legend',
		'mainRect',
		'resizeHandler',
		'series',
		'sprites',
		'store',
		'style',
		'theme',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforerefresh',parameters:'spacefilling'},
		{name:'bodyresize',parameters:'size'},
		{name:'itemclick',parameters:'chart,item,event'},
		{name:'itemdblclick',parameters:'chart,item,event'},
		{name:'itemmousedown',parameters:'chart,item,event'},
		{name:'itemmousemove',parameters:'chart,item,event'},
		{name:'itemmouseout',parameters:'chart,item,event'},
		{name:'itemmouseover',parameters:'chart,item,event'},
		{name:'itemmouseup',parameters:'chart,item,event'},
		{name:'itemtap',parameters:'chart,item,event'},
		{name:'redraw',parameters:'spacefilling'},
		{name:'refresh',parameters:'spacefilling'},
		{name:'spriteclick',parameters:'sprite,event'},
		{name:'spritedblclick',parameters:'sprite,event'},
		{name:'spritemousedown',parameters:'sprite,event'},
		{name:'spritemousemove',parameters:'sprite,event'},
		{name:'spritemouseout',parameters:'sprite,event'},
		{name:'spritemouseover',parameters:'sprite,event'},
		{name:'spritemouseup',parameters:'sprite,event'},
		{name:'spritetap',parameters:'sprite,event'},
		{name:'storechange',parameters:'chart,newStore,oldStore'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforerefresh',
		'bodyresize',
		'itemclick',
		'itemdblclick',
		'itemmousedown',
		'itemmousemove',
		'itemmouseout',
		'itemmouseover',
		'itemmouseup',
		'itemtap',
		'redraw',
		'refresh',
		'spriteclick',
		'spritedblclick',
		'spritemousedown',
		'spritemousemove',
		'spritemouseout',
		'spritemouseover',
		'spritemouseup',
		'spritetap',
		'storechange',
		'ready'
];
}
@Component({
  selector: 'x-' + xspacefillingMetaData.XTYPE,
	inputs: xspacefillingMetaData.INPUTNAMES,
	outputs: xspacefillingMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xspacefilling)}],
	template: '<template #dynamic></template>'
})
export class xspacefilling extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xspacefillingMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xspacefillingMetaData);}
}
