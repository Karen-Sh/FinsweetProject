import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';
import { AuthorsComponent } from './authors/authors.component';
import { PostsComponent } from '../posts/posts.component';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  standalone: true,
  imports:[NgFor,AuthorsComponent,PostsComponent]
})
export class AuthorComponent implements OnInit {
  post:Post[]=[]
    constructor(public service: DataService){

    }
  ngOnInit(): void {
    this.service.GetJsonPost<Post[]>(`${environment.post.get}?_start=13&_end=15`).subscribe(date=>{
      this.post = date
    })
  }

  auther:Category[]=[
    { 
      id: 1,
      img: 'assets/img/close-up (2).png',
      title :'Hey there, I’m Andrew Jonhson and welcome to my Blog',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna 
             aliqua. Non blandit massa enim nec. Scelerisque viverra mauris 
             in aliquam sem. At risus viverra adipiscing at in tellus.`
    }
  ]
}
