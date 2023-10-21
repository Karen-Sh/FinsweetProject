import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css'],
  standalone: true,
  imports: [MatIconModule,MatTableModule]
})
export class BlogAdminComponent implements OnInit{
  post:Post[]=[]
  constructor(private service:DataService){}
  displayedColumns: string[] = [
    'position',
    'userImg',
    'userName',
    'cotegory',
    'categoryImg' ,
    'img',
    'post',
    'title',
    'action'
  ];
  ngOnInit(): void {
    this.service.GetJsonItem<Post[]>(environment.post.get).subscribe(data=>{
      this.post = data
    })
  }
  itemDataGet(){
    this.service.GetJsonItem<Post[]>(environment.post.get).subscribe(data=>{
      this.post = data
    })
  }
  del(id:number){
    this.service.DeleteItem(`${environment.post.get}/${id}`).subscribe(()=>{
      this.itemDataGet();
    })
  }
  openAddDialog(){}
  openAdditDialog( el:Post , id:number){}
}
