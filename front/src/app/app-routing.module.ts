import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AfficherComponent } from './afficher/afficher.component';
import { DiposerComponent } from './diposer/diposer.component';
import { HomeComponent } from './home/home.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { ListfavComponent } from './listfav/listfav.component';
import { LoginComponent } from './login/login.component';
import { MypubComponent } from './mypub/mypub.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/l', pathMatch: 'full',
  }, 
  {path: 'home', component: HomeComponent},
  {path: 'l', component: LoginComponent},

  {path: 'listachat', component: List1Component},
  {path: 'diposer', component: DiposerComponent},
  {path: 'listfav', component: ListfavComponent},
  {path: 'listloc', component: List2Component},
  {path: 'update', component: UpdateprofileComponent},
  {path: 'aff', component: AfficherComponent},
  {path: 'mypub', component: MypubComponent},
  {path: 'about', component: AboutComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
