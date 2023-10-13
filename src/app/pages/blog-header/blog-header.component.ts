import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class BlogHeaderComponent implements OnInit {
  post!:Post;
    constructor(private service: DataService){}
  ngOnInit(): void {
    this.service.GetJsonItem<Post>(`${environment.post.get}/20`).subscribe(data=>{
      this.post =  data
    })
  }
}
