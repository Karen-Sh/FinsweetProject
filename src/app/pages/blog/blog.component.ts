import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { RouterLink } from '@angular/router';
import { JoinComponent } from 'src/app/components/join/join.component';
import { ChooseACatagoryComponent } from 'src/app/components/choose-a-catagory/choose-a-catagory.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { BlogHeaderComponent } from 'src/app/components/blog-header/blog-header.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [JoinComponent,ChooseACatagoryComponent,PostsComponent,NgFor,BlogHeaderComponent,RouterLink,NgIf]
})
export class BlogComponent implements OnInit {
  blog:Post[]=[];
  Category:Category[]= [];
  pagesNumber:number=1;
  constructor(public service: DataService){

  }
  ngOnInit(): void {
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(date=>{
      this.Category = date
    })
    this.reset()
  }
  reset(){
    this.service.GetJsonItem<Post[]>(`${environment.post.get}?_page=${this.pagesNumber}&_limit=4`).subscribe(data=>{
      this.blog = data;
    });
  }
  item(){
    
  }
  prev(){
    if (this.pagesNumber > 1) {
      this.pagesNumber--;
      this.reset()
    }
  }
  next(){
    this.pagesNumber++;
    this.reset()
  }
}