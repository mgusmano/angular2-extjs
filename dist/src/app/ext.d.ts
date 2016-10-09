import { OnInit, ElementRef, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { extbase } from './ext.base';
export declare class ext extends extbase implements OnInit {
    constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    extbaseRef: QueryList<ViewContainerRef>;
    dynamicRef: ViewContainerRef;
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
