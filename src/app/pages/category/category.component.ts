import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Category } from 'src/app/models/category';
import { PostsComponent } from 'src/app/components/posts/posts.component';

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
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(data => {
      this.clickCategory =data;
    })
  }
  isActive(active:string):boolean{
    return active==this.categorys;
  }

}
