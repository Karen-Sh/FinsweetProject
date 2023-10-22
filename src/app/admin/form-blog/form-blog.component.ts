import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Post } from 'src/app/models/post';
import { BlogAdminComponent } from '../blog-admin/blog-admin.component';
import {MatSelectModule} from '@angular/material/select';
import { DataService } from 'src/app/service/data.service';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environment/environment';
@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.css'],
  standalone:true,
  imports:[MatDialogModule,NgIf,MatFormFieldModule,
           MatInputModule, FormsModule, MatButtonModule,
           ReactiveFormsModule,MatIconModule,
           BlogAdminComponent,MatSelectModule,NgFor
   ],
})
export class FormBlogComponent implements OnInit {
  action!:string
  category:Category[]=[]
    constructor(public dialog: MatDialogRef<FormBlogComponent>, @Inject(MAT_DIALOG_DATA)  public data: {
      action:string
      blogData:Post
    },private fb:FormBuilder,private service:DataService ){
      this.action = this.data.action
    }
  ngOnInit(): void {
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(date=>{
      this.category =  date
    })
  }

    form:FormGroup =this.fb.group({
      userName:    [this.data.action=='addit' ? this.data.blogData.userName :   '',[Validators.required,Validators.minLength(3)]],
      userImg:     [this.data.action=='addit' ? this.data.blogData.userImg :    '',[Validators.required]],
      cotegory:    [this.data.action=='addit' ? this.data.blogData.cotegory :   '',[Validators.required]],
      categoryImg: [this.data.action=='addit' ? this.data.blogData.categoryImg :'',[Validators.required]],
      img:         [this.data.action=='addit' ? this.data.blogData.img :        '',[Validators.required]],
      post:        [this.data.action=='addit' ? this.data.blogData.post :       '',[Validators.required,Validators.minLength(3)]],
      title:       [this.data.action=='addit' ? this.data.blogData.title :      '',[Validators.required,Validators.minLength(3)]],
    })
    save(){
      this.dialog.close({
        data:   this.form.value,
        action: this.action
      })
      this.form.reset()
    }
}
