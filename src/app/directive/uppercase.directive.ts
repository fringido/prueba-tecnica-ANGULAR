import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appUppercase]',
  standalone: true
})
export class UppercaseDirective {

  constructor(private ngControl : NgControl) { }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value

    const uppercaseValue = value.toUpperCase()

    inputElement.value = uppercaseValue

    this.ngControl.control?.setValue(uppercaseValue, {emiteEvent:false})
  }
}
