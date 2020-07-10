import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';

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
  ,
  {
    path: 'projects', component: ProjectsComponent
  }
  ,
  {
    path: 'contacts', component: ContactsComponent
  }
  ,
  {
    path: 'artworks', component: GalleryComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
