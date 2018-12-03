import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef) { }
  
 /*  isOpen: boolean = false;
  class: string = 'open';
  el: ElementRef = this.elementRef.nativeElement

  @HostListener('click') toggleMenu() {

    if (!this.isOpen) {
      this.elRender.addClass(this.el, this.class);
      this.isOpen = true
    } else {
      this.elRender.removeClass(this.el, this.class)
      this.isOpen = false
    }
  } */

  
  @HostBinding('class.open') isOpen: boolean = false

  @HostListener('click') toggleMenu() {
    this.isOpen = !this.isOpen
  }
}
