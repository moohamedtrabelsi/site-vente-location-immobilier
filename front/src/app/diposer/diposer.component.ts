import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { List1Component } from '../list1/list1.component';
import { Publication } from '../models/publications.model';
import { UserService } from '../user.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-diposer',
  templateUrl: './diposer.component.html',
  styleUrls: ['./diposer.component.css']
})


export class DiposerComponent implements OnInit {

  constructor(private route: Router,private services:UserService) {  }
  diposerForm!: FormGroup;
  selectedFile!: ImageSnippet;
  filled!:Boolean

  test!:Boolean
  testimg!:Boolean
  publication!:Publication
  ngOnInit(): void {

    this.filled=false;
this.publication = new Publication()
    this.diposerForm = new FormGroup({
      type : new FormControl( '',Validators.required ),
      adresse : new FormControl( '',Validators.required ),
      contenu : new FormControl( '',Validators.required ),
      prix : new FormControl( '',Validators.required ),
    });

  }

  async diposer(){
    if(this.filled == true){
      Object.assign(this.publication , this.diposerForm.value);
     await this.services.addpub(this.publication).subscribe(
        res=>{
          console.log("contenu :"+this.publication.contenu)
          console.log("type :"+this.publication.type)
          this.route.navigate(['/listachat']);
     //   List1Component.pub.filename = "http://localhost:3000/api/image/"+this.selectedFile.src
        }
      );
      this.filled =false;
    
      //this.route.navigate(['dashboard']);
      }
      else{
console.log("not filled)")
      }
    
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    this.filled = true;
    
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.services.uploadImage(this.selectedFile.file).subscribe(
       /* (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        }*/
       res=>{ this.onSuccess();}
        ),
        ()=>{this.onError}
    });

    reader.readAsDataURL(file);
  }
}
