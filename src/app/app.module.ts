import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AxControlComponent } from './ax-control/ax-control.component';
import { FormsModule } from "@angular/forms";
import { DateValidationDirective } from './date-validation.directive';
import { ValidationComponent } from './validation/validation.component';
import { RequiredDirective } from './required.directive';

@NgModule({
  declarations: [
    AppComponent,
    AxControlComponent,
    DateValidationDirective,
    ValidationComponent,
    RequiredDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
