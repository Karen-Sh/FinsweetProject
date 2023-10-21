import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Category } from 'src/app/models/category';
import { CategoryAdminComponent } from '../category-admin/category-admin.component';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css'],
  standalone: true,
  imports:[MatDialogModule,NgIf,
           MatFormFieldModule, MatInputModule, 
           FormsModule, MatButtonModule,
           MatFormFieldModule,ReactiveFormsModule,MatIconModule,CategoryAdminComponent
          ],
})
export class FormCategoryComponent {
  action!:string
  constructor(public dialog: MatDialogRef<FormCategoryComponent> , @Inject(MAT_DIALOG_DATA)  public data: {
    action:string
    categoryData:Category
  },private fb:FormBuilder){
    this.action = data.action
  }
    form:FormGroup = this.fb.group({
      category: [this.data.action == 'addit' ? this.data.categoryData.category : '',[Validators.required,Validators.minLength(3)]],
      text:     [this.data.action == 'addit' ? this.data.categoryData.text :     '', [Validators.required,Validators.minLength(3)]],
      img:      [this.data.action == 'addit' ? this.data.categoryData.img :      '', [Validators.required]],
  })
  save(){
    this.dialog.close({
      data:this.form.value,
      action: this.action
    })
    this.form.reset()
  }
}
