import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';
import { JoinComponent } from '../join/join.component';
import { ChooseACatagoryComponent } from '../choose-a-catagory/choose-a-catagory.component';
import { PostsComponent } from '../posts/posts.component';
import { NgFor } from '@angular/common';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [JoinComponent,ChooseACatagoryComponent,PostsComponent,NgFor,BlogHeaderComponent]
})
export class BlogComponent implements OnInit {
  blog:Post[]=[]
  Category:Category[]= []
  constructor(public service: DataService){

  }
  ngOnInit(): void {
    this.service.GetJsonPost<Post[]>(`${environment.post.get}?_start=8&_end=13`).subscribe(data=>{
      this.blog = data
    });
    this.service.GetJsonCategory<Category[]>(environment.category.get).subscribe(date=>{
      this.Category = date
    })
  }
}