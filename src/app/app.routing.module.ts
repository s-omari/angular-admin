import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './component/admin/admin.component';
import { UsersComponent } from './component/admin/users/users.component';
import { ReportsComponent } from './component/admin/reports/reports.component';
import { LoginComponent as login2Component} from './component/login2/login2.component';
import { LoginComponent } from './component/login/login.component';

//import {AuthGuard} from './shared/security/auth.guard';

import { AuthGuard } from './_guards/index';


// UI for Auth
// import {
//   NbAuthComponent,
//   NbLoginComponent,
//   NbRegisterComponent,
//   NbLogoutComponent,
//   NbRequestPasswordComponent,
//   NbResetPasswordComponent,
// } from '@nebular/auth';


// Routes
const appRoutes: Routes = [


  { path: '' , redirectTo: 'AdminComponent', pathMatch: 'full'  },  
  { path: 'admin' , component: AdminComponent ,

 // canActivate: [AuthGuard],
  children: [
      {
          path: 'users',
          component: UsersComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
    },

  ]
} ,

{ path:'login' , component: login2Component},


]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [
  AdminComponent,
  UsersComponent ,
  LoginComponent ,
  login2Component ,
  ReportsComponent

]