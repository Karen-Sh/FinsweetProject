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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterModule,NgFor,HeaderComponent,ListOfAuthorsComponent,JoinComponent,ChooseACatagoryComponent,PostsComponent]
})
export class HomeComponent implements OnInit{
  categorys: any = [];
  Authers:any=[];
  Post: any=[];
  constructor(private service: DataService){
    
  }
  ngOnInit(): void {
    this.service.GetJsonCategori().subscribe(data=>{
      this.categorys= data;
    });
    this.service.GetJsonHomeAuth().subscribe(date=>{
      this.Authers = date
    })
    this.service.GetJsonHomePost().subscribe(post=>{
        this.Post= post
    })
  }
}