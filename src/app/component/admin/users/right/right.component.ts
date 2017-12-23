import { Component, OnInit , Input ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'users-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class UsersRightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()  user;
  @Output()  onCloseRight = new EventEmitter();


  closeRight() {
    this.onCloseRight.emit();
  }
}
