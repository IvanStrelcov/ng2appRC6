import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { RouterModule }      from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterService }   from './register.service';
@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             RouterModule],
  declarations: [ RegisterComponent ],
  providers: [ RegisterService ],
  exports: [ RegisterComponent ]
})
export class RegisterModule {}