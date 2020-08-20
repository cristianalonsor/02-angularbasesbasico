import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';


const routes: Routes = [
  {
    path: '', // debe ir vacio porque es ruta hija, llamo todo cuando es necesario
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule { }
