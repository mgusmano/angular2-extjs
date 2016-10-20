import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.draw.Container
class xdrawMetaData {
	public static XTYPE: string = 'draw';
	public static INPUTNAMES: string[] = [
		'engine',
		'gradients',
		'resizeHandler',
		'sprites',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'bodyresize',parameters:'size'},
		{name:'spriteclick',parameters:'sprite,event'},
		{name:'spritedblclick',parameters:'sprite,event'},
		{name:'spritemousedown',parameters:'sprite,event'},
		{name:'spritemousemove',parameters:'sprite,event'},
		{name:'spritemouseout',parameters:'sprite,event'},
		{name:'spritemouseover',parameters:'sprite,event'},
		{name:'spritemouseup',parameters:'sprite,event'},
		{name:'spritetap',parameters:'sprite,event'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'bodyresize',
		'spriteclick',
		'spritedblclick',
		'spritemousedown',
		'spritemousemove',
		'spritemouseout',
		'spritemouseover',
		'spritemouseup',
		'spritetap',
		'ready'
];
}
@Component({
  selector: 'x-' + xdrawMetaData.XTYPE,
	inputs: xdrawMetaData.INPUTNAMES,
	outputs: xdrawMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xdraw)}],
	template: '<template #dynamic></template>'
})
export class xdraw extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xdrawMetaData);
	}
	@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xdrawMetaData);}
}
