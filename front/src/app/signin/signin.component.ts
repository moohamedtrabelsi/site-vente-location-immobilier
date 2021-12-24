import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../models/user.mode';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private service: UserService ,private route: Router) { }
  user: User = new User;
  username = new FormControl()
  password = new FormControl()
  profilejson: string = "null";

  ngOnInit(): void {
  //  this.user = new User();
  }

  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities 
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
    this.route.navigate(['/home']);
    console.log(this.username.value)

  }
 /* async loginUser() {
    Object.assign(this.user, this.userForm.value);
    this.service.loginUser(this.user).subscribe(
      res => {
        this.profilejson = JSON.stringify(res),
          localStorage.setItem('curentuser', this.profilejson);

        console.log(this.user.username)

       // console.log(this.user.email)
        this.route.navigate(['/home']);


      }
    )

    }
*/
}
