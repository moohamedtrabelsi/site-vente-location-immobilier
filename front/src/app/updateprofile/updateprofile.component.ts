import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { User } from '../models/user.mode';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
user!:User;
userForm2!: FormGroup;
testpsw!:boolean;

  constructor(private route: Router, private services: UserService) { }

  ngOnInit(): void {

    this.testpsw = false;

    this.userForm2 = new FormGroup({
      //email : new FormControl( '',Validators.required && Validators.email),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),


    });
this.getuser() ;

//console.log("cur  :  "+this.user.password)

  }

 async update(){
  let uname = this.userForm2.get('username')?.value
  let tstpassword = this.userForm2.get('password')?.value
  let tstpassword2 = this.userForm2.get('password2')?.value
  let firstname = this.userForm2.get('firstname')?.value
  let lastname = this.userForm2.get('lastname')?.value
  let email = this.userForm2.get('email')?.value
  if(email == "")
  {
    email = this.user.email
  }
  if(firstname == "")
  {
    firstname = this.user.firstname
  }
  if(lastname == "")
  {
    lastname = this.user.lastname
  }
  if(tstpassword == "")
  {
    tstpassword = this.user.password
    tstpassword2 = this.user.password

  }
 
/*
  if (uname === "") {
    this.test = true
  }
  if (uname === "") {
    this.testpassword = true
  }
  let u
*/    
if(tstpassword == tstpassword2){
  this.user.password = tstpassword;
  this.user.email = email;
  this.user.firstname = firstname;
  this.user.lastname = lastname;
    await this.services.updateprofile(this.user).subscribe(
      async res => {

        localStorage.setItem('curentuser', JSON.stringify(res));
this.route.navigate(['/home']);


      }
    );}
else
{ 
  this.testpsw = true;
  
  }

  }
  async getuser(){
    this.user = await JSON.parse(localStorage.getItem('curentuser')!);
    console.log("cur  :  "+this.user.username)
    console.log("cur  :  "+this.user.username)

  }


  logout(){
    localStorage.removeItem('curentuser')
    this.route.navigate(['/l']);
  }

}
