import { Component, OnInit, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { extbase } from './ext.base';
class extMetaData {
	public static XTYPE: string = '';
	public static INPUTNAMES: string[] = ['xtype','fit'];
	public static OUTPUTS: any[] = [ { name: 'click', parameters: 'control,record,eOpts' }];
	public static OUTPUTNAMES: string[] = ['click'];
}
@Component({
  selector: 'ext' + extMetaData.XTYPE,
	inputs: extMetaData.INPUTNAMES.concat('config'),
	outputs: extMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => ext)}],
	template: '<template #dynamic></template>'
})
export class ext extends extbase implements OnInit {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, extMetaData);
	}
	@ContentChildren(extbase,{read: ViewContainerRef}) extbaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read: ViewContainerRef}) dynamicRef: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.extbaseRef); }
	ngOnInit() { this.OnInit(this.dynamicRef); }
}
