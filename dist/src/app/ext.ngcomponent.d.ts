import { ElementRef, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { extbase } from './ext.base';
export declare class extngcomponent extends extbase {
    extbaseRef: QueryList<ViewContainerRef>;
    dynamicRef: ViewContainerRef;
    constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
