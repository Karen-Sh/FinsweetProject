import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { FormBlogComponent } from './form-blog/form-blog.component';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css'],
  standalone: true,
  imports: [MatIconModule,MatTableModule,FormBlogComponent,MatDialogModule]
})
export class BlogAdminComponent implements OnInit{
  post:Post[]=[]
  constructor(private service:DataService, public dialog: MatDialog){}
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
  openAddDialog(){
    const dialogRef = this.dialog.open(FormBlogComponent, {
      data:{
       action: "add"
       }
    });
    dialogRef.afterClosed().subscribe(res=>{
      if (res&&res.data) {
        const addPost=res.date; 
              
        if (res.action=="add") {
          dialogRef.componentInstance.form.patchValue({
            userName:    addPost.userName,
            userImg:     addPost.userImg,
            cotegory:    addPost.category,
            categoryImg: addPost.categoryImg,
            img:         addPost.img,
            post:        addPost.post,
            title:       addPost.title,
            data:        res.data.dateN
          });
          this.service.AddItem<Post>(`${environment.post.get}`, addPost).subscribe(()=>{
              this.itemDataGet();  
          })
        }
      }
    })
  }
  openAdditDialog( el:Post , id:number){
    const dialogRef = this.dialog.open(FormBlogComponent, {
      data:{
       action: "addit",
       blogData : {...el},
       dateN: ''
       }
    });
    dialogRef.afterClosed().subscribe(res=>{
      if (res&&res.data) {
        const additPost=res.data; 
              console.log(additPost);
              additPost['data'] = res.dateN
        if (res.action=="addit") {
          dialogRef.componentInstance.form.patchValue({
            userName:    additPost.userName,
            userImg:     additPost.userImg,
            cotegory:    additPost.category,
            categoryImg: additPost.categoryImg,
            img:         additPost.img,
            post:        additPost.post,
            title:       additPost.title,
          });

          this.service.AdditItem<Post>(`${environment.post.get}/${id}`, additPost).subscribe(()=>{
              this.itemDataGet();  
          })
        }
      }
    })
  }
}
