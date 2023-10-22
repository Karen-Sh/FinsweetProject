import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { Post } from 'src/app/models/post';
import { Category } from 'src/app/models/category';
import { Authers } from 'src/app/models/authers';
import { ContactUs } from 'src/app/models/contactUs';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  standalone: true,
  imports : [MatIconModule,RouterLink]
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
      console.log(this.post);
    });
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(cat=>{
      this.category =cat.length
      console.log(this.category);  
    });
    this.service.GetJsonItem<Authers[]>(environment.authers.get).subscribe(auther=>{
      this.auther =auther.length
      console.log(this.auther);  
    })
    this.service.GetJsonItem<ContactUs[]>(environment.contactUs.get).subscribe(con=>{
      this.contact =con.length
      console.log(this.contact);  
    })
  }
}
