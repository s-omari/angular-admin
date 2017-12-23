import { Component, OnInit , ViewChild} from '@angular/core';
import { MENU_ITEMS } from './admin-menu';

import {
  NbMenuItem,
  NbMenuService,
} from '@nebular/theme';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  item : any;
  constructor() { }


  @ViewChild('left') LeftSidenav ;


  ngOnInit() {
  }

  menu_items = MENU_ITEMS;



  toggleAdminLeft() {
    this.LeftSidenav.toggle()
  }
  closeAdminLeft() {
    this.LeftSidenav.close()
  }

	//when an item is selected from data table
	onItemSelect(selected) {
		console.log('selected ID: '+selected.id);
		//this.index = index;
    this.item = selected;
    console.log(selected);


	setTimeout(() => {

				
		// this.store.dispatch(new admin.SelectItemIdAction(selected.id));		
		// this.store.dispatch(new layout.OpenRightSidenavAction);
		// this.store.dispatch(new layout.CollapseRightSidenavAction);
		// this.store.dispatch(new layout.SetRightContentAction('itemPreview'))

	})

	//	console.log('index set to ' + this.index);
	}
}
