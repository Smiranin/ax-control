import { Directive, OnInit } from '@angular/core';
import { AbstractControl, NgControl } from "@angular/forms";

@Directive({
  selector: '[required]'
})
export class RequiredDirective implements OnInit {

  constructor(
    private ngControl: NgControl,
  ) {
  }

  ngOnInit() {
    this.ngControl.control?.addValidators((control: AbstractControl) => {
      const isEmpty = !control.value;
      return isEmpty ? {required: true} : null;
    });
  }

}
