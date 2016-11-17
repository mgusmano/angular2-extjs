import { ElementRef, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { xbase } from './x.base';
export declare class xhiddenfield extends xbase {
    constructor(eRef: ElementRef, resolver: ComponentFactoryResolver, vcRef: ViewContainerRef);
    extbaseRef: QueryList<xbase>;
    dynamicRef: ViewContainerRef;
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
