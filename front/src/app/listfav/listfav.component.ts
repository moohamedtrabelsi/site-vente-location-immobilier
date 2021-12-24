import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List1Component } from '../list1/list1.component';
import { Publication } from '../models/publications.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listfav',
  templateUrl: './listfav.component.html',
  styleUrls: ['./listfav.component.css']
})
export class ListfavComponent implements OnInit {
  filterTerm!: string ;
  ps:Publication[]=[];


  constructor(private route: Router,private services:UserService) { }

  ngOnInit(): void {
 this.getfav();

  }


  logout(){
    localStorage.removeItem('curentuser')
    this.route.navigate(['/l']);
  }
  
  getfav() {
    return this.services.getfav().subscribe
    (
      data => 
      {
        for (const d of (data as any)) {
         var pub = new Publication();
         pub.contenu=d.contenu;
         pub.adresse=d.adresse;
         pub.prix=d.prix;
         pub.id = d._id;
         pub.filename='http://localhost:3000/api/image/'+ d.filename + '' ;
          this.ps.push(pub);
         /* this.listJson.push(
             d.name
          );*/
        }
        console.log(this.ps);
      });
  
  }

  remfav(p:Publication) {
    return this.services.delfav(p).subscribe
    (
      data => 
      {   const i = this.ps.indexOf(p);
          this.ps.splice(i,1)
        }
      );
  
  }

}
