import { Component, OnInit ,Output , EventEmitter } from '@angular/core';

//import { AuthGuard } from '../../../shared/security/auth.guard';
@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
   // private guard:AuthGuard
  ) { }

  ngOnInit() {
  }

  @Output() private onCloseLeft = new EventEmitter();
  @Output() private onToggleLeft = new EventEmitter();
  

  toggleLeft() {
    this.onToggleLeft.emit();
  }

    closeLeft() {
      this.onCloseLeft.emit();
    }

    //user :any;
    user = { name: 'Nick Jones', picture: 'assets/images/nick.png' };
  
    userMenu = [{ title: 'Profile' }, { title: 'Log out' }];


    // checkboxChanged(canActivate) {
    //   // Update guard when checkbox checked.
    //   this.guard.setCanActivate(canActivate);
    // }
}
