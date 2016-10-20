import { ElementRef, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { xbase } from './x.base';
export declare class xngcomponent extends xbase {
    extbaseRef: QueryList<ViewContainerRef>;
    dynamicRef: ViewContainerRef;
    constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
