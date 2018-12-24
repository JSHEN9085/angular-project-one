import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false; //attach to the CSS class

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
