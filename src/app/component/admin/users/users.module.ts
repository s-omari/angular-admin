
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





import { UsersRightComponent } from './right/right.component';
import {DataTableComponent} from './data-table/data-table.component';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    
  ]
})
export class UsersModule { }

export const UsersComponents = [ 
  UsersRightComponent,
  DataTableComponent ,
  UsersTableComponent
]