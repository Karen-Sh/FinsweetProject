import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
  standalone: true,
  imports:[ReactiveFormsModule,MatDialogModule,NgIf,
    MatFormFieldModule, MatInputModule, 
    FormsModule, MatButtonModule,
    MatFormFieldModule,ReactiveFormsModule,MatIconModule]
})
export class FormRegisterComponent {
  action!:string
  constructor(public dialog: MatDialogRef<FormRegisterComponent> , @Inject(MAT_DIALOG_DATA)  public data: {
    action:string
    dataAdmin:Users
  
  },private fb: FormBuilder){
    this.action = data.action
  }
      form:FormGroup = this.fb.group({
        title:    [this.data.action=='edit'? this.data.dataAdmin.title: '' ,[Validators.required,Validators.minLength(3)]],
        text:     [this.data.action=='edit'? this.data.dataAdmin.text:'',[Validators.required,Validators.minLength(3)]],
        img:      [this.data.action=='edit'? this.data.dataAdmin.img:'',[Validators.required]],
        email:    [this.data.action=='edit'? this.data.dataAdmin.email:'',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: [this.data.action=='edit'? this.data.dataAdmin.password:'',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      })
  save(){
    this.dialog.close({
      data:this.form.value,
      action: this.action
    })
    this.form.reset()
  }
}
