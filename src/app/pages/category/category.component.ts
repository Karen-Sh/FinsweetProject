import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsComponent } from '../posts/posts.component';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [NgFor,PostsComponent]
})
export class CategoryComponent  implements OnInit{
  post: Post[]=[]
  constructor(public service:DataService){

  }
  ngOnInit(): void {
    this.service.GetJsonPost<Post[]>(`${environment.post.get}?_start=4&_end=8`).subscribe(data=>{
      this.post = data;
    })  
  }
}
