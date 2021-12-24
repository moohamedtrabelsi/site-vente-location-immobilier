import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { User } from '../models/user.mode';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private services: UserService) { }
  user!: User;
  userForm!: FormGroup;
  userForm2!: FormGroup;
  test!: Boolean
  testpassword!: Boolean
  testlogin!: Boolean
  username!: FormControl;
  password!: FormControl;
  ngOnInit(): void {

if(localStorage.getItem('curentuser')){
  this.route.navigate(['/home']);
}

    //  this.service = new UserService(new HttpClient(),this.route)
    this.username = new FormControl()
    this.password = new FormControl()
    this.user = new User()
    this.test = false
    this.testpassword = false
    this.testlogin = false
    this.userForm = new FormGroup({
      //email : new FormControl( '',Validators.required && Validators.email),
      password: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),

    });
    this.userForm2 = new FormGroup({
      //email : new FormControl( '',Validators.required && Validators.email),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),

    });
    console.log("welcome")

  }
  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities 
  user_register() {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login() {
    this.userlogin = true;
    this.userregister = false;

  }
  async login() {

    let uname = this.userForm.get('username')?.value
    if (uname === "") {
      this.test = true
    }
    let tstpassword = this.userForm.get('password')?.value
    if (tstpassword === "") {
      this.testpassword = true
    }
    let u
    this.user.username = uname;
    this.user.password = tstpassword;
    this.user.email = "test"
    await this.services.loginUser(this.user).subscribe(
      async res => {
        localStorage.setItem('curentuser', JSON.stringify(res));

        this.user = await JSON.parse(JSON.stringify(res))

        if ((this.user.password)) {
          HomeComponent.user = this.user;
          console.log(this.user.password)
          this.route.navigate(['/home']);
        }
        
        else {
          console.log("non valide")
          this.testlogin = true
        }

      }
    );


  }

  async signup() {

    let uname = this.userForm2.get('username')?.value
    let tstpassword = this.userForm2.get('password')?.value
    let firstname = this.userForm2.get('firstname')?.value
    let lastname = this.userForm2.get('lastname')?.value
    let email = this.userForm2.get('email')?.value
/*
    if (uname === "") {
      this.test = true
    }
    if (uname === "") {
      this.testpassword = true
    }
    let u
*/    
    this.user.username = uname;
    this.user.password = tstpassword;
    this.user.email = email;
    this.user.firstname = firstname;
    this.user.lastname = lastname;
    await this.services.registerUser(this.user).subscribe(
      async res => {

        console.log(this.user)
        this.user_login()

      }
    );
  }

}
