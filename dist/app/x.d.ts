import { OnInit, ElementRef, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { xbase } from './x.base';
export declare class x extends xbase implements OnInit {
    constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    extbaseRef: QueryList<xbase>;
    dynamicRef: ViewContainerRef;
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
