import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.mode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router) { }
static user : User;

  ngOnInit(): void {
    console.log("home  : "+HomeComponent.user.username)
  }

  logout(){
    localStorage.removeItem('curentuser')
    this.route.navigate(['/l']);
  }

}
