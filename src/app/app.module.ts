import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


///
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './component/login2/login2.component';



//MATERIAL
import {AppMaterialModule} from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";



//App Layout module
import { LayoutModule , LayoutComponents} from './component/layout/layout.module';
//security
//import {AuthGuard} from './shared/security/auth.guard';

// NEW REDUX
import { metaReducer } from "./shared/store/index";
import {StoreModule} from "@ngrx/store";
//import {StoreDevtoolsModule} from "@ngrx/store-devtools";


import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { AdminModule , AdminComponents} from "./component/admin/admin.module";



//routing module
import { AppRoutingModule , routingComponents} from "./app.routing.module";
import { RouterModule, Routes } from '@angular/router';



// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/s-omari/angular5-admin.git
// git push -u origin master



@NgModule({
  declarations: [
    AppComponent ,
    routingComponents,
    LayoutComponents,
    AdminComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,

    FlexLayoutModule,

    LayoutModule ,

    Ng2SmartTableModule,
    AppRoutingModule ,
    AdminModule ,
    FormsModule, ReactiveFormsModule,
    //material modules
    AppMaterialModule,
    BrowserAnimationsModule,

    // store modules
   // StoreModule.forRoot(metaReducer),



    

 
    
  ],
  providers: [

  
    AuthGuard,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
