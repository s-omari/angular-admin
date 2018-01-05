import { Component, OnInit , Input} from '@angular/core';



import { MENU_ITEMS } from '../admin-menu';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';


@Component({
  selector: 'admin-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'] 
})
export class LeftComponent implements OnInit {

      
  @Input()  shrinkLeft;
 
  constructor(  ) { }
  
  ngOnInit() {
  }

 


  menu_items = MENU_ITEMS;

}
