import { Component, OnInit , Output , EventEmitter , ViewChild } from '@angular/core';
//import { LocalDataSource } from 'ng2-smart-table';
import {UsersService} from './users.service';

//import { MatDrawer} from '@angular/material/sidenav';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  data: any;
  isUserSelected: boolean;
  selectedUserData: any;
  constructor(private service: UsersService) {
 //   const data = this.service.getData();
   // this.source.load(data);
    this.data = this.service.getData();
   }

  @ViewChild('right') RightSidenav ;


   ngOnInit() {
  }
  
  
  onItemSelect(selected) {
   this.isUserSelected = true; 
   this.selectedUserData = selected ;
   this.RightSidenav.open();
  }

  closeUserRight(){
    this.isUserSelected = false; 
    this.selectedUserData = '' ;
    this.RightSidenav.close()
  }


  

}

