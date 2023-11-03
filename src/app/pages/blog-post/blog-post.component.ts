import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JoinComponent } from 'src/app/components/join/join.component';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  standalone: true,
  imports:[JoinComponent,NgForOf,NgIf,RouterLink]
})
export class BlogPostComponent implements OnInit {
  post: Post[]=[]
  id!:string|null
  postId!:Post
    constructor(private service: DataService, private routh:ActivatedRoute){
    }
  ngOnInit(): void {
    this.routh.params.subscribe((data)=>{
      this.id = data['id'];
      this.service.GetJsonItem<Post>(`${environment.post.get}/${this.id}`).subscribe(date=>{
        this.postId= date;
      })
    })
    this.service.GetJsonItem<Post[]>(`${environment.post.get}?_start=13&_end=16`).subscribe(data=>{
      this.post =data;
    });
  }

}
