import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../models/publications.model';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
p= new Publication
  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log(this.p)
this.convertpub(this.p)
  }
  async convertpub(p:Publication){
    this.p!.contenu = await localStorage.getItem('contenu')!
    this.p!.filename = await localStorage.getItem('filename')!
    this.p!.adresse = await localStorage.getItem('adresse')!
    this.p!.prix = await localStorage.getItem('prix')!
  }


  logout(){
    localStorage.removeItem('curentuser')
    this.route.navigate(['/l']);
  }
}
