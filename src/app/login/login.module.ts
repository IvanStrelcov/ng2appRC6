import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             RouterModule],
  declarations: [ LoginComponent ],
  providers: [],
  exports: [ LoginComponent ]
})
export class LoginModule {}
