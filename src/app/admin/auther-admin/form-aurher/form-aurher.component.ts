import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Authers } from 'src/app/models/authers';
import { AutherAdminComponent } from '../auther-admin.component';

@Component({
  selector: 'app-form-aurher',
  templateUrl: './form-aurher.component.html',
  styleUrls: ['./form-aurher.component.css'],
  standalone: true,
  imports:[MatDialogModule,NgIf,
           MatFormFieldModule, MatInputModule, 
           FormsModule, MatButtonModule,ReactiveFormsModule,
           MatFormFieldModule,ReactiveFormsModule,MatIconModule,AutherAdminComponent
          ],
})
export class FormAurherComponent {
  action!:string
  titleValue!:string
  textValue!:string
  imgValue!:string
  constructor(public dialog: MatDialogRef<FormAurherComponent> , @Inject(MAT_DIALOG_DATA)  public data: {
    action:string
    autherData:Authers
  },private fb:FormBuilder) {
    
      this.action = data.action
  }
  form:FormGroup =this.fb.group({
    title: [this.data.action=='addit' ? this.data.autherData.title : '',[Validators.required,Validators.minLength(3)]],
    text:  [this.data.action=='addit' ? this.data.autherData.text :  '',[Validators.required,Validators.minLength(3)]],
    img:   [this.data.action=='addit' ? this.data.autherData.img :   '',[Validators.required]],
  })
  save(){
    this.dialog.close({
      data:this.form.value,
      action: this.action
    })
    this.form.reset()
  }
}
