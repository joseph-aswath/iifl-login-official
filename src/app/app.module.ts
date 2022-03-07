import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { ViewDataBaseComponent } from './view-data-base/view-data-base.component';
import {RouterModule} from '@angular/router';
import { PostNumberService } from './service/post-number.service';


@NgModule({
  declarations: [
    AppComponent,
    ViewDataBaseComponent,
    ComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'/component'},
      {path:'view-data-base',component:ViewDataBaseComponent},
      {path:'component',component:ComponentComponent}
    ])
  ],
  providers: [PostNumberService,ComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
