import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)// forma de que funcione seguro la llamada a posts
    // loadChildren: './pages/posts/posts.module#PostsModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
