import { Routes, RouterModule } from '@angular/router';
// import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

import { UsersListComponent } from './users-list';

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => require('es6-promise-loader!./+detail')('default')
  },
  { path: '**',    component: NoContent },
];
