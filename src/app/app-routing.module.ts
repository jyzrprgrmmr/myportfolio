import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  {
    path: '' , component: WelcomeComponent, pathMatch: 'full'
  }
  ,
  {
    path: 'home' , redirectTo: ''
  }
  ,
  {
    path: 'about', component: AboutmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
