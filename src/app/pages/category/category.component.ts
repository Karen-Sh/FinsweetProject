import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsComponent } from '../posts/posts.component';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [NgFor,PostsComponent]
})
export class CategoryComponent  implements OnInit{
  post: Post[]=[];
  id!:number|null
  cotegory!:Category
  constructor(public service:DataService, private routhe: ActivatedRoute){
    this.id = this.routhe.snapshot.params['id']
  }
  ngOnInit(): void {
    this.service.GetJsonItem<Post[]>(`${environment.post.get}?_start=4&_end=8`).subscribe(data=>{
      this.post = data;
    })  
    this.service.GetJsonItem<Category>(`${environment.category.get}/${this.id}`).subscribe(date=>{
      this.cotegory= date
    })
  }
}
