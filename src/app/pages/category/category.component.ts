import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsComponent } from '../posts/posts.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [NgFor,PostsComponent]
})
export class CategoryComponent  implements OnInit{
  Data: any=[]
  constructor(public service:DataService){

  }
  ngOnInit(): void {
    this.service.GetJsonCategory().subscribe(data=>{
      this.Data = data;
    })  
  }
}
