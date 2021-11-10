import { Directive, OnInit } from '@angular/core';
import { AbstractControl, NgControl } from "@angular/forms";

@Directive({
  selector: '[dateValidation]'
})
export class DateValidationDirective implements OnInit {

  constructor(
    private ngControl: NgControl,
  ) {
  }

  ngOnInit() {
    this.ngControl.control?.addValidators((control: AbstractControl) => {
      const date = Date.parse(control.value);
      return isNaN(date) ? {dateValidator: true} : null;
    });
  }

}
