import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports:[RouterModule,NgIf]
})
export class HeaderComponent implements OnInit{
  post!:Post;
  constructor(private service: DataService){}
  ngOnInit(): void {
    this.service.GetJsonItem<Post>(`${environment.post.get}/17`).subscribe(data=>{
      this.post =data;
    })
  }

}
