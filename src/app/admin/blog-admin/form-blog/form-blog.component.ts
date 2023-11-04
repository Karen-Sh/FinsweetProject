import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit ,Pipe, PipeDecorator} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Post } from 'src/app/models/post';
import {MatSelectModule} from '@angular/material/select';
import { DataService } from 'src/app/service/data.service';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environment/environment';
import { Authers } from 'src/app/models/authers';
import { BlogAdminComponent } from '../blog-admin.component';
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
  action!:string;
  data!:string;
  dateN!:string;
  category:Category[]=[];
  authers: Authers[]=[];
  

    constructor(public dialog: MatDialogRef<FormBlogComponent>, @Inject(MAT_DIALOG_DATA)  public date: {
      action:string
      data:string;
      blogData:Post
      dateN:string
    },private fb:FormBuilder,private service:DataService ){
      this.action = this.date.action
    }
  ngOnInit(): void {
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(data=>{
      this.category =  data
    });
    this.service.GetJsonItem<Authers[]>(environment.authers.get).subscribe(data=>{
      this.authers =data
    });
  }

    form:FormGroup =this.fb.group({
      userName:    [this.date.action=='addit' ? this.date.blogData.userName :   '',[Validators.required]],
      userImg:     [this.date.action=='addit' ? this.date.blogData.userImg :    '',[Validators.required]],
      cotegory:    [this.date.action=='addit' ? this.date.blogData.cotegory :   '',[Validators.required]],
      categoryImg: [this.date.action=='addit' ? this.date.blogData.categoryImg :'',[Validators.required]],
      img:         [this.date.action=='addit' ? this.date.blogData.img :        '',[Validators.required]],
      post:        [this.date.action=='addit' ? this.date.blogData.post :       '',[Validators.required,Validators.minLength(3)]],
      title:       [this.date.action=='addit' ? this.date.blogData.title :      '',[Validators.required,Validators.minLength(3)]],
    })
    save(){
      const dateFull:Date = new Date()
      const mounth= dateFull.getMonth();
      let months = ''
      const month=['Jan', 'Feb','Mar','Apr', 'May', 'June', 'July','Aug' , 'Sep','Oct','Nov' ,'Dec']
      for (let i = 0; i < month.length; i++) {
        if (dateFull.getMonth()== i) {
          months+=month[i];       
        };
      };
      const year = dateFull.getFullYear();
      const day  = dateFull.getDate();
      const data = `${months} ${day}, ${year}`;
      
      this.dialog.close({
        data:   this.form.value,
        action: this.action,
        dateN:  data
        
      });    
      this.form.reset()
    }
}
