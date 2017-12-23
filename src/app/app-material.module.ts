import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   MatToolbarModule,
   MatSidenavModule,
   MatButtonModule ,
   MatFormFieldModule,
   MatIconModule ,
   MatInputModule ,
   MatCardModule ,
   MatCheckboxModule,
   MatTableModule ,
   MatPaginatorModule ,
   MatSortModule ,
   MatSlideToggleModule ,
   MatListModule
  } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule ,
    MatButtonModule ,
    MatFormFieldModule, 
    MatIconModule ,
    MatInputModule ,
    MatCardModule ,
    MatCheckboxModule ,
    MatTableModule ,
    MatPaginatorModule ,
    MatSortModule ,
    MatSlideToggleModule ,
    MatListModule
    

  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule ,
    MatButtonModule ,
    MatFormFieldModule ,
    MatIconModule ,
    MatInputModule ,
    MatCardModule ,
    MatTableModule ,
    MatPaginatorModule ,
    MatSortModule ,
    MatSlideToggleModule ,
    MatListModule
    
  ]
})
export class AppMaterialModule { }