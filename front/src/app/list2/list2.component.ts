import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../models/publications.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  constructor(private route: Router,private services:UserService) { }
  ps:Publication[]=[];
  fav:Publication[]=[];

  filterTerm!: string ;

  ngOnInit(): void {
    
    this.getloc()
  }

  addtofav(p : Publication)
  {   return this.services.addfav(p).subscribe
    (
      data => 
      {
        
        this.fav.push(p)
      }
      );
  }

  vider()
  {
    this.fav = []
  }
  supprimer(i:number)
  {
    this.fav.splice(i,1)
  }
  logout(){
    localStorage.removeItem('curentuser')
    this.route.navigate(['/l']);
  }
  getloc() {
    return this.services.getlocation().subscribe
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

}
