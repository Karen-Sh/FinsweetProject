import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { DataService } from 'src/app/service/data.service';
import { Authers } from 'src/app/models/authers';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import {  RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Users } from 'src/app/models/users';
import { FormRegisterComponent } from './form-register/form-register.component';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  standalone: true,
  imports:[
    MatInputModule, MatButtonModule,
    RouterLink, MatIconModule,
    MatDialogModule,MatTableModule,
    NgIf,MatTooltipModule
  ]
})
export class UserRegistrationComponent  implements OnInit{
  users:Users[] = []
  action!:string
  el!:Users
  num!:number
  // dataAdmin!:Users
  displayedColumns: string[] = [
    'position',
    'title',
    'text', 
    'img',
    'email',
    'action'
  ];
  constructor(private service:DataService,private http:HttpClient,public dialog:MatDialog){
  }
  ngOnInit(): void {
    this.get()
  }
  get(){
    this.service.GetJsonItem<Users[]>(environment.user.get).subscribe(data=>{
      this.users = data
      this.num =data.length
    })
  }
  del(id:number){
      if (confirm('Do you really want to delete')) {
    this.service.DeleteItem(`${environment.user.get}/${id}`).subscribe(()=>{
          this.get()
        })
      }
  }
  openAddDialog(){
    const dialogRef = this.dialog.open(FormRegisterComponent, {
      data:{
       action: "add"
       }
    });
    dialogRef.afterClosed().subscribe(res=>{
      if (res&&res.data) {
        const addAdmin=res.data; 
        // console.log(res);
        addAdmin['defImg'] = '../../../assets/img/png-clipart.png';          
        if (res.action == "add") {
          let us = {
            title: addAdmin.title,
            text: addAdmin.text,
            img: addAdmin.img,
            email: addAdmin.email,
            password: addAdmin.password,
            defImg: addAdmin.defImg
          }
          console.log(us);
          
          this.http.post(environment.register.get , us).subscribe(()=>{
              this.get();
              alert('Your category has been successfully saved');  
          })
        }
      }
    })
  }
  openAdditDialog( el:Users , id:number){
    const dialogRef = this.dialog.open(FormRegisterComponent, {
      data:{
       action: "edit",
       dataAdmin:{...el}
       }
    });
    dialogRef.afterClosed().subscribe(res=>{
      if (res&&res.data) {
        const editAdmin=res.data; 
        editAdmin['defImg'] = '../../../assets/img/png-clipart.png';          
        if (res.action == "edit") {
          let us:Users = {
            title: editAdmin.title,
            text: editAdmin.text,
            img: editAdmin.img,
            email: editAdmin.email,
            password: editAdmin.password,
            defImg: editAdmin.defImg
          }
          console.log(us);
          
          this.service.AdditItem<Users>(`${environment.user.get}/${id}` , us).subscribe(()=>{
              this.get();
              alert('Your category has been successfully saved');  
          })
        }
      }
    })
  }
}
