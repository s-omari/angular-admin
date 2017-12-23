import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LayoutModule { }

export const LayoutComponents = [ 
  HeaderComponent,
  FooterComponent,
]
