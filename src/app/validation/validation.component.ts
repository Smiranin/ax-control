import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {

  @Input() when!: string;

  constructor(
    private el: ElementRef
  ) {
  }

  hide(): void {
    this.el.nativeElement.style.display = 'none'
  }

  show(): void {
    this.el.nativeElement.style.display = 'block'
  }

}
