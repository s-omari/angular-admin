import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { HeaderComponent } from './header/header.component';

import {UsersComponents} from './users/users.module';

import {UsersService} from './users/users.service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UsersService
  ]
})
export class AdminModule { }

export const AdminComponents = [ 
  AdminComponent,
  RightComponent ,
  LeftComponent ,
  HeaderComponent ,
  UsersComponents
]