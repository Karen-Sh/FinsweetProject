import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Post } from 'src/app/models/post';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { FormBlogComponent } from '../form-blog/form-blog.component';
import { MatDialogModule } from '@angular/material/dialog';

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

  }
  openAdditDialog( el:Post , id:number){
    const dialogRef = this.dialog.open(FormBlogComponent, {
      data:{
       action: "addit",
       blogData : {...el}
       }
    });
    dialogRef.afterClosed().subscribe(res=>{
      if (res&&res.data) {
        const additPost=res.data; 
              
        if (res.action=="addit") {
          dialogRef.componentInstance.form.patchValue({
            name:    additPost.userName,
            img:     additPost.userImg,
            select:  additPost.category,
            selImg:  additPost.categoryImg,
            imgPost: additPost.img,
            post:    additPost.post,
            title:   additPost.title,
            
          });
          this.service.AdditItem<Post>(`${environment.post.get}/${id}`, additPost).subscribe(()=>{
              this.itemDataGet();  
          })
        }
      }
    })
  }
}
