import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor( private DataService: DataService) { }

  ngOnInit(): void {
    // creo un puntero desde mensajes hacia los datos del servicio
    this.mensajes = this.DataService.getPosts();
    // .subscribe( (posts: any[]) => {
    //  console.log(posts);
    //  this.mensajes = posts;
    // });
  }
  escuchaClick( id: number ): any{

    console.log('click en :', id);

  }
}
