import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';
import { JoinComponent } from '../join/join.component';
import { ChooseACatagoryComponent } from '../choose-a-catagory/choose-a-catagory.component';
import { PostsComponent } from '../posts/posts.component';
import { NgFor } from '@angular/common';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [JoinComponent,ChooseACatagoryComponent,PostsComponent,NgFor,BlogHeaderComponent]
})
export class BlogComponent implements OnInit {
  Blog:any=[]
  Categorys:any= []
  constructor(public service: DataService){

  }
  ngOnInit(): void {
    this.service.GetJsonBlog().subscribe(data=>{
      this.Blog = data
    });
    this.service.GetJsonCategori().subscribe(date=>{
      this.Categorys = date
    })
  }
}