import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoContent }            from './no-content';

import { DataResolver }         from './app.resolver';

import { UsersListComponent }   from './users-list';
import { UserProfileComponent } from './user-profile';
import { UserCreateComponent }  from './user-create';
import { LoginComponent }       from './login';
import { RegisterComponent }    from './register';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module.ts#DashboardModule'},
  // { path: 'users', component: UsersListComponent },
  // { path: 'users/:id', component: UserProfileComponent },
  // { path: 'create', component: UserCreateComponent },
  // { path: 'about', component: About },
  // {
  //   path: 'detail', loadChildren: () => require('es6-promise-loader!./+detail')('default')
  // },
  { path: '**', component: NoContent },
];

const appRoutes: Routes = [
  ...ROUTES
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


