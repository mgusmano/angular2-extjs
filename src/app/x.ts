import { Component, OnInit, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { xbase } from './x.base';
class extMetaData {
	public static XTYPE: string = '';
	public static INPUTNAMES: string[] = ['xtype','fitToParent'];
	public static OUTPUTS: any[] = [ { name: 'click', parameters: 'control,record,eOpts' }];
	public static OUTPUTNAMES: string[] = ['click'];
}
@Component({
  selector: 'x' + extMetaData.XTYPE,
	inputs: extMetaData.INPUTNAMES.concat('config'),
	outputs: extMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: xbase, useExisting: forwardRef(() => x)}],
	template: '<template #dynamic></template>'
})
export class x extends xbase implements OnInit {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, extMetaData);
	}
	@ContentChildren(xbase,{read: ViewContainerRef}) extbaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read: ViewContainerRef}) dynamicRef: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.extbaseRef); }
	ngOnInit() { this.OnInit(this.dynamicRef); }
}
