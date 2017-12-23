import { Component, OnInit } from '@angular/core';



import { MENU_ITEMS } from '../admin-menu';


@Component({
  selector: 'admin-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menu_items = MENU_ITEMS;

}
