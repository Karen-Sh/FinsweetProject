import { Component, OnInit } from '@angular/core';
import { JoinComponent } from '../join/join.component';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  standalone: true,
  imports:[JoinComponent,NgForOf,NgIf]
})
export class BlogPostComponent implements OnInit {
  post: Post[]=[]
  id!:string|null
  postId!:Post
    constructor(private service: DataService, private routh:ActivatedRoute){
      this.id = this.routh.snapshot.params['id']
    }
  ngOnInit(): void {
    this.service.GetJsonItem<Post[]>(`${environment.post.get}?_start=16&_end=19`).subscribe(data=>{
      this.post =data;
    });
    this.service.GetJsonItem<Post>(`${environment.post.get}/${this.id}`).subscribe(date=>{
      this.postId= date;
    })
  }

}
