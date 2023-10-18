import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Authers } from 'src/app/models/authers';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-auther-admin',
  templateUrl: './auther-admin.component.html',
  styleUrls: ['./auther-admin.component.css'],
  standalone: true,
  imports: [MatTableModule,MatIconModule,NgIf,
            MatDialogModule,MatFormFieldModule,
  ]
})
export class AutherAdminComponent implements OnInit{
  author:Authers[]=[];
  constructor(private service: DataService){}
  displayedColumns: string[] = [
    'position',
    'title', 
    'text',
    'img',
    'action'
  ];
  ngOnInit(): void {
    this.service.GetJsonItem<Authers[]>(environment.authers.get).subscribe(data=>{
      this.author= data
    })  
  }
  getitem(){
    this.service.GetJsonItem<Authers[]>(environment.authers.get).subscribe(data=>{
      this.author= data
    })
  }
  del(el:number){
    this.service.DeleteItem(`${environment.authers.get}/${el}`).subscribe(()=>{
      this.getitem();
    });  
  }
  
  addNewUser(){
    // let form = document.getElementsByName('div')[1]
    // form.style.display = 'block'
    // console.log(form);
    
    let user:Authers={
      "title": document.getElementsByTagName('input')[0].value,
      "text":  document.getElementsByTagName('textarea')[0].value,
      "img":   document.getElementsByTagName('input')[1].value,
      "img1":  "../../../assets/img/Negative2.png",
      "img2":  "../../../assets/img/Negative.png",
      "img3":  "../../../assets/img/Negative3.png",
      "img4":  "../../../assets/img/Negative1.png"

    }
    this.service.AddItem<Authers>(environment.authers.get , user).subscribe(()=>{
      this.getitem()
    })
  }
  additclick(el:number){

  }
  additUser(){}
}
