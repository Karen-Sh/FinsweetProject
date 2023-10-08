import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authers } from 'src/app/models/authers';
import { HeaderComponent } from '../header/header.component';
import { ListOfAuthorsComponent } from '../list-of-authors/list-of-authors.component';
import { JoinComponent } from '../join/join.component';
import { ChooseACatagoryComponent } from '../choose-a-catagory/choose-a-catagory.component';
import { DataService } from 'src/app/service/data.service';
import { Category } from 'src/app/models/category';
import { PostsComponent } from '../posts/posts.component';
import { environment } from 'src/environment/environment';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterModule,NgFor,HeaderComponent,ListOfAuthorsComponent,JoinComponent,ChooseACatagoryComponent,PostsComponent]
})
export class HomeComponent implements OnInit{
  categorys: Category[] = [];
  authers:Authers[]=[];
  post: Post[]=[];
  singlPost: Post[]=[];
  constructor(private service: DataService){
    
  }
  ngOnInit(): void {
    this.service.GetJsonCategory<Category[]>(environment.category.get).subscribe((data)=>{
      this.categorys = data;
    });
    this.service.GetJsonHomeAuthers<Authers[]>(`${environment.authers.get}?_end=4`).subscribe(date=>{
      this.authers = date
    })
    this.service.GetJsonPost<Post[]>(`${environment.post.get}?_and=30`).subscribe(post=>{
        this.post= post
    })
    this.service.GetJsonPost<Post[]>(`${environment.post.get}?_start=15&_end=16`).subscribe(post=>{
      this.singlPost= post
  })
  }
}