import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { List1Component } from './list1/list1.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListfavComponent } from './listfav/listfav.component';
import { DiposerComponent } from './diposer/diposer.component';
import { List2Component } from './list2/list2.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { AfficherComponent } from './afficher/afficher.component';
import { MypubComponent } from './mypub/mypub.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    LoginComponent,
    List1Component,
    List2Component,
    ListfavComponent,
    DiposerComponent,
    UpdateprofileComponent,
    AfficherComponent,
    MypubComponent,
    AboutComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
