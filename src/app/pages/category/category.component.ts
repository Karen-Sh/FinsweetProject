import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  imports: [NgFor,PostsComponent,NgIf,RouterModule,NgClass]
})
export class CategoryComponent  implements OnInit{
  post: Post[]=[];
  clickCategory:Category[]=[]
  categorys!:string;
  cotegory!:Category;
  catPost: Post[]=[];
  constructor(public service:DataService, private routhe: ActivatedRoute){ 
  }
  ngOnInit(): void {
    this.routhe.params.subscribe(par=>{
      this.categorys= par['category'].toLowerCase();

      this.service.GetJsonItem<Post[]>(`${environment.post.get}`).subscribe(data=>{
        this.post = data.filter(post=>post.cotegory.toLowerCase()===this.categorys);
      }) 
    }) 
    this.service.GetJsonItem<Category>(`${environment.category.get}?category=${this.categorys}`).subscribe(date=>{
      this.cotegory= date;
    })
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(data => {
      this.clickCategory =data;
    })
  }
  isActive(active:string):boolean{
    return active==this.categorys;
  }
  categoryGet(){
    // this.service.GetJsonItem<Post[]>(`${environment.post.get}`).subscribe(data=>{
    //   this.catPost = data.filter(post=>
    //     this.clickCategory.forEach(par=>post.cotegory== par.category))
    //   console.log(data.filter(post=>this.clickCategory.some(par=>post.cotegory== par.category)));     
    // }) 
  }
}
