import { AfterViewInit, Component, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';
import { ValidationComponent } from "../validation/validation.component";
import { NgModel } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'ax-control',
  templateUrl: './ax-control.component.html',
  styleUrls: ['./ax-control.component.scss']
})
export class AxControlComponent implements AfterViewInit {

  @Input() title = 'Default Title';

  @ContentChild(NgModel)
  ngModelInstance: NgModel | undefined;

  @ContentChildren(ValidationComponent)
  private validationList: QueryList<ValidationComponent> | undefined;

  showResetIcon = false;

  ngAfterViewInit(): void {
    this.ngModelInstance?.valueChanges
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
      )
      .subscribe(_ => this.initValidation());

  }

  private initValidation(): void {
    let isAlreadyHasError = false;
    this.validationList?.forEach(item => {
      // Show only one error at the same time
      if (isAlreadyHasError) {
        item.hide();
        return;
      }
      if (this.ngModelInstance?.hasError(item.when)) {
        isAlreadyHasError = true;
        item.show();
      } else {
        item.hide();
      }
    })
  }

  resetField(): void {
    this.ngModelInstance?.reset('');
  }

  onFocusIn(): void {
    this.showResetIcon = true;
  }

  onFocusOut(): void {
    this.showResetIcon = false;
  }

}
