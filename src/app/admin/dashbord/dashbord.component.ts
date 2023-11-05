import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { Post } from 'src/app/models/post';
import { Category } from 'src/app/models/category';
import { Authers } from 'src/app/models/authers';
import { ContactUs } from 'src/app/models/contactUs';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  standalone: true,
  imports : [MatIconModule,RouterModule,]
})
export class DashbordComponent implements OnInit {
  post!:number
  category!:number
  auther!:number
  contact!:number
   constructor(private service:DataService){}
  ngOnInit(): void {
    this.service.GetJsonItem<Post[]>(environment.post.get).subscribe(post=>{
      this.post =post.length;
    });
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(cat=>{
      this.category =cat.length 
    });
    this.service.GetJsonItem<Authers[]>(environment.authers.get).subscribe(auther=>{
      this.auther =auther.length

    })
    this.service.GetJsonItem<ContactUs[]>(environment.contactUs.get).subscribe(con=>{
      this.contact =con.length
    })
  }
}
