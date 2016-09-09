import { NgModule,
         ApplicationRef }         from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { RouterModule }           from '@angular/router';

import { DashboardRouting }       from './dashboard.routes';
import { HeaderComponent }        from '../header';
// import { NoContent }              from '../no-content';

import { UsersListModule }        from '../users-list';
import { UserProfileModule }      from '../user-profile';
import { UserCreateModule }       from '../user-create';
import { DashboardComponent }     from './dashboard.component.ts';
import { UsersListComponent }     from '../users-list';
@NgModule({
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersListModule,
    UserProfileModule,
    UserCreateModule,
    DashboardRouting
  ],
  declarations: [DashboardComponent, HeaderComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
