import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.chart.CartesianChart
class xcartesianMetaData {
	public static XTYPE: string = 'cartesian';
	public static INPUTNAMES: string[] = [
		'animation',
		'axes',
		'background',
		'colors',
		'engine',
		'flipXY',
		'gradients',
		'highlightItem',
		'innerPadding',
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
		{name:'beforerefresh',parameters:'cartesian'},
		{name:'bodyresize',parameters:'size'},
		{name:'itemclick',parameters:'chart,item,event'},
		{name:'itemdblclick',parameters:'chart,item,event'},
		{name:'itemmousedown',parameters:'chart,item,event'},
		{name:'itemmousemove',parameters:'chart,item,event'},
		{name:'itemmouseout',parameters:'chart,item,event'},
		{name:'itemmouseover',parameters:'chart,item,event'},
		{name:'itemmouseup',parameters:'chart,item,event'},
		{name:'itemtap',parameters:'chart,item,event'},
		{name:'redraw',parameters:'cartesian'},
		{name:'refresh',parameters:'cartesian'},
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
  selector: 'x-' + xcartesianMetaData.XTYPE,
	inputs: xcartesianMetaData.INPUTNAMES,
	outputs: xcartesianMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xcartesian)}],
	template: '<template #dynamic></template>'
})
export class xcartesian extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xcartesianMetaData);
	}
	@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xcartesianMetaData);}
}
