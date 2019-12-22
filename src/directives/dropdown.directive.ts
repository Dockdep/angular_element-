import {Directive, ElementRef, HostListener, Input, HostBinding} from '@angular/core';
import * as _ from 'lodash';
import { AutocompleteComponent } from 'angular-ng-autocomplete';

@Directive({
    selector: '[appDropdown]',
    host: {
        '(document:click)': 'outClick($event)',
      }
})
export class DropdownDirective {

    private isOpen = false;
    private elementClassVal: string[] = [];

    @Input('appDropdown') element: HTMLElement;

    @Input('dynamicElement') dynamicElement: AutocompleteComponent;

    @Input('class')
    @HostBinding('class')
    get elementClass(): string {
        return this.elementClassVal.join(' ');
    }
    set elementClass(val: string) {
        this.elementClassVal = val.split(' ');
    }



    constructor(private elementRef: ElementRef) {

    }

    private toogleBlock() {
        if (this.isOpen) {
            _.remove(this.elementClassVal, (c) => {
                return c === 'active';
            });
            this.isOpen = !this.isOpen;
            this.element.style.display = 'none';
        } else {
            this.elementClassVal.push('active');
            this.isOpen = !this.isOpen;
            this.element.style.display = 'block';
        }
    }

    private closeBlock() {
        if (this.isOpen ) {
            _.remove(this.elementClassVal, (c) => {
                return c === 'active';
            });
            this.isOpen = !this.isOpen;
            this.element.style.display = 'none';
        }
    }

    outClick(event) {
        console.log(this.dynamicElement.elementRef.nativeElement);
        if (!this.elementRef.nativeElement.contains(event.target)
        && !this.element.contains(event.target)
        && !this.dynamicElement.elementRef.nativeElement.contains(event.target)) {
            this.closeBlock();
        }
    }

    @HostListener('click') onClick() {
        this.toogleBlock();
    }
}
