import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
class ExtNgComponentMetaData {
	public static XTYPE: string = 'container';
	public static INPUTNAMES: string[] = ['selector','component','selectorParams'];
	public static OUTPUTS: any[] = [];
	public static OUTPUTNAMES: string[] = [];
}
@Component({
  selector: 'ext-ngcomponent',
	inputs: ExtNgComponentMetaData.INPUTNAMES.concat('config'),
	outputs: ExtNgComponentMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: extbase, useExisting: forwardRef(() => extngcomponent)}],
	template: '<template #dynamic></template>'
})
export class extngcomponent  extends extbase {
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef: QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef: ViewContainerRef;
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtNgComponentMetaData);
	}
	ngAfterContentInit() { this.AfterContentInit(this.extbaseRef); }
	ngOnInit() { this.OnInit(this.dynamicRef); }
}
