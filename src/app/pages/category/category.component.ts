import { NgFor, NgIf } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsComponent } from '../posts/posts.component';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [NgFor,PostsComponent,NgIf,RouterModule]
})
export class CategoryComponent  implements OnInit{
  post: Post[]=[];
  clickCategory:Category[]=[]
  categorys!:string;
  cotegory!:Category;
  constructor(public service:DataService, private routhe: ActivatedRoute){
    this.categorys = this.routhe.snapshot.params['categoty'].toLowerCase()
  }
  ngOnInit(): void {
    this.service.GetJsonItem<Post[]>(`${environment.post.get}`).subscribe(data=>{
      this.post = data.filter(post=>post.cotegory.toLowerCase()===this.categorys);
    })  
    this.service.GetJsonItem<Category>(`${environment.category.get}?categoty=${this.categorys}`).subscribe(date=>{
      this.cotegory= date;
    })
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(data => {
      this.clickCategory =data;
    })
  }
}
