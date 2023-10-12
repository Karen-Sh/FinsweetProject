import { Component, OnInit } from '@angular/core';
import { JoinComponent } from '../join/join.component';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  standalone: true,
  imports:[JoinComponent,NgForOf]
})
export class BlogPostComponent implements OnInit {
  post: Post[]=[]
    constructor(private service: DataService){

    }
  ngOnInit(): void {
    this.service.GetJsonItem<Post[]>(`${environment.post.get}?_start=16&_end=19`).subscribe(data=>{
      this.post =data
    })
  }

}
