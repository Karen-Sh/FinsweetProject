import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Authers } from 'src/app/models/authers';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  standalone: true,
  imports:[NgFor,AuthorsComponent,PostsComponent,RouterLink]
})
export class AuthorComponent implements OnInit {
  post:Post[]=[];
  name!:String|null;
  author: Authers[]=[]
    constructor(public service: DataService, private routhe:ActivatedRoute){
        this.name = this.routhe.snapshot.params['userName']
    }
  ngOnInit(): void {
    this.service.GetJsonItem<Authers[]>(`${environment.authers.get}`).subscribe(data=>{
      this.author = data.filter(user=>user.title==this.name)
      console.log(this.author);
      
    })
    this.service.GetJsonItem<Post[]>(`${environment.post.get}`).subscribe((date)=>{
      this.post = date.filter(post=>post.userName==this.name)
    })
  }
}
