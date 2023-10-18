import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {FormsModule, NgModel} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AutherAdminComponent, DialogData } from '../auther-admin/auther-admin.component';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { Authers } from 'src/app/models/authers';


@Component({
  selector: 'app-dialog-forms',
  templateUrl: './dialog-forms.component.html',
  styleUrls: ['./dialog-forms.component.css'],
  standalone:true,
  imports:[MatDialogModule, AutherAdminComponent,
           MatFormFieldModule, MatInputModule, 
           FormsModule, MatButtonModule, NgIf,
           MatIconModule
          ]
})
export class DialogFormsComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private service:DataService){}
  author:Authers[]=[];
  getitem(){
    this.service.GetJsonItem<Authers[]>(environment.authers.get).subscribe(data=>{
      this.author= data
    })
  }
  form:HTMLCollection = document.getElementsByTagName('mat-form-field')
  addNewUser(){
    let user:Authers={
      "title":document.getElementsByTagName('input')[0].value,
      "text":document.getElementsByTagName('textarea')[0].value,
      "img":document.getElementsByTagName('input')[1].value,
      "img1":  "../../../assets/img/Negative2.png",
      "img2":  "../../../assets/img/Negative.png",
      "img3":  "../../../assets/img/Negative3.png",
      "img4":  "../../../assets/img/Negative1.png"

    }
    
    this.service.AddItem<Authers>(environment.authers.get , user).subscribe(()=>{
  
      this.getitem()
    })
  }
}
