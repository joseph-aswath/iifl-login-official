import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormvalidatorComponent } from './formvalidator/formvalidator.component';
import { ViewDataBaseComponent } from './view-data-base/view-data-base.component';

@NgModule({
  declarations: [
    AppComponent,
    FormvalidatorComponent,
    ViewDataBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
