import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { Publication } from './models/publications.model';
import { User } from './models/user.mode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient ,private route:Router) { 
    this.getuser()
  }
user! : User;

  register_url="http://localhost:3000/api/auth/signup";
  login_url="http://localhost:3000/api/auth/signin";
  updateprofile_url ="http://localhost:3000/api/auth/updateuser";
  addpub_url= "http://localhost:3000/api/pub/add";
  getachat_url= "http://localhost:3000/api/pub/getachat";
  getloc_url= "http://localhost:3000/api/pub/getloc";
  getfav_url= "http://localhost:3000/api/pub/getfav";
  addfav_url= "http://localhost:3000/api/pub/addfav";
  delfav_url= "http://localhost:3000/api/pub/remfav";
  mypub_url = "http://localhost:3000/api/pub/mypub";

  async getuser(){
    this.user = await JSON.parse(localStorage.getItem('curentuser')!);
  }

   registerUser(user: User){
     
    return this.http.post(this.register_url, user);
 
   }
 
  loginUser( user:User){
     //console.log(this.http.get(this.login_url));
     return this.http.post(this.login_url, user);
 
   //  return fetch(this.login_url,user).then(res=>res.json)
    
   }
 
 
   loggedIn() {
     return !!localStorage.getItem('token')    
   }
 
   get Token() {
     return localStorage.getItem('token')
   }
 
   logoutUser(){
 
     localStorage.removeItem('token');
     this.route.navigate([ '/home']);
      
   }


   updateprofile(user:User){
     return this.http.post(this.updateprofile_url, user);
   }

/// Publication


   uploadImage(file: File) {
    const formData = new FormData();

    formData.append('file', file);

    return this.http.post('http://localhost:3000/api/auth/uploadfile', formData);
  }

  addpub(pub: Publication) {
   // let param = new HttpHeaders().set("username",<string>HomeComponent.user.username);
    let param = new HttpHeaders().set("username",<string>this.user.username);

    return this.http.post(this.addpub_url, pub,{headers:param});

  }

  getachat(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.getachat_url);
  }

  getlocation(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.getloc_url);
  }
  getfav(): Observable<Publication[]> {
    let param = new HttpHeaders().set("username",<string>this.user.username);

    return this.http.get<Publication[]>(this.getfav_url,{headers:param});
  }
  addfav(pub: Publication){
    let param = new HttpHeaders().set("username",<string>this.user.username);

    return this.http.post(this.addfav_url,pub,{headers:param});
  }
  delfav(pub: Publication) {
    let param = new HttpHeaders().set("username",<string>this.user.username);

    return this.http.post(this.delfav_url,pub,{headers:param});
  }

  mypub(): Observable<Publication[]> {
    let param = new HttpHeaders().set("username",<string>this.user.username);

    return this.http.get<Publication[]>(this.mypub_url,{headers:param});
  }

}
