import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../models/publications.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mypub',
  templateUrl: './mypub.component.html',
  styleUrls: ['./mypub.component.css']
})
export class MypubComponent implements OnInit {

  constructor(private route: Router,private services:UserService) { }
  ps:Publication[]=[];
  fav:Publication[]=[];

  filterTerm!: string ;

  ngOnInit(): void {
    
    this.getachat()
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

 async afficher(p:Publication){
    await this.convertpub(p);
    console.log(p)
    this.route.navigate(['/aff']);

    
  }

  convertpub(p:Publication)
  {
  localStorage.setItem('id',<string>p.id );
  localStorage.setItem('contenu',<string>p.contenu );
  localStorage.setItem('prix',<string>p.prix );
  localStorage.setItem('filename',<string>p.filename );
  localStorage.setItem('adresse',<string>p.adresse );

  }

  vider()
  {
    this.fav = []
  }
  supprimer(i:number)
  {
    this.fav.splice(i,1)
  }
 
  getachat() {
    return this.services.mypub().subscribe
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


  logout(){
    localStorage.removeItem('curentuser')
    this.route.navigate(['/l']);
  }

}
