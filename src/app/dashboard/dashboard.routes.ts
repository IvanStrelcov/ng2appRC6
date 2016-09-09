import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NoContent }            from '../no-content';

import { DashboardComponent }   from './dashboard.component';
import { UsersListComponent }   from '../users-list';
import { UserProfileComponent } from '../user-profile';
import { UserCreateComponent }  from '../user-create';

const DashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'users', pathMatch: 'full'},
    { path: 'users', component: UsersListComponent },
    { path: 'users/:id', component: UserProfileComponent },
    { path: 'create', component: UserCreateComponent },
  ] },
  // { path: '**',    component: NoContent },
];
export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(DashboardRoutes);
