import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AuthorsComponent } from './authors/authors.component';
import { PostsComponent } from '../posts/posts.component';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Authers } from 'src/app/models/authers';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  standalone: true,
  imports:[NgFor,AuthorsComponent,PostsComponent,RouterLink]
})
export class AuthorComponent implements OnInit {
  post:Post[]=[];
  id!:number|null;
  author!: Authers
    constructor(public service: DataService, private routhe:ActivatedRoute){
        this.id = this.routhe.snapshot.params['id']
    }
  ngOnInit(): void {
    this.service.GetJsonItem<Post[]>(`${environment.post.get}?_start=13&_end=15`).subscribe(date=>{
      this.post = date
    })
    this.service.GetJsonItem<Authers>(`${environment.authers.get}/${this.id}`).subscribe(data=>{
      this.author = data
      console.log(this.author);
      
    })
  }
}
