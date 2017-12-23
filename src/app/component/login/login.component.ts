import { Component, OnInit } from '@angular/core';

import {FormControl, FormBuilder, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rForm: FormGroup;
  

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }


    loginUser(e) {
      var email = e.elements[0].value;
      var password = e.elements[1].value;

      console.log(email , password);
      //console.log('dwfd');
    }

}

