import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
class ExtNgComponentMetaData {
	public static XTYPE: string = 'container';
	public static INPUTNAMES: string[] = ['selector','component','selectorParams'];
	public static OUTPUTS: any[] = [];
	public static OUTPUTNAMES: string[] = [];
}
@Component({
  selector: 'x-ngcomponent',
	inputs: ExtNgComponentMetaData.INPUTNAMES.concat('config'),
	outputs: ExtNgComponentMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: xbase, useExisting: forwardRef(() => xngcomponent)}],
	template: '<template #dynamic></template>'
})
export class xngcomponent  extends xbase {
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef: QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef: ViewContainerRef;
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtNgComponentMetaData);
	}
	ngAfterContentInit() { this.AfterContentInit(this.extbaseRef); }
	ngOnInit() { this.OnInit(this.dynamicRef); }
}
