import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Authers } from 'src/app/models/authers';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormAurherComponent } from '../form-aurher/form-aurher.component';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-auther-admin',
  templateUrl: './auther-admin.component.html',
  styleUrls: ['./auther-admin.component.css'],
  standalone: true,
  imports: [MatTableModule,MatIconModule,NgIf,
            MatDialogModule,
  ]
})
export class AutherAdminComponent implements OnInit{
  author:Authers[]=[];
  forms!:boolean
  constructor(private service: DataService, public dialog:MatDialog){}
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
      if (confirm("Do you really want to delete?")) {
        this.getitem();
      }
    });  
  }
  openAddDialog(){
    const dialogRef = this.dialog.open(FormAurherComponent, {
    
    });
  }
  openDialog(el:Authers,id:number): void {
    const dialogRef = this.dialog.open(FormAurherComponent, {
    data:{
      autherData:{...el},
      action: "addit"
    }
    }); 
    dialogRef.afterClosed().subscribe(res=>{
      if (res&&res.data) {
        const additAuther=res.data; 
        console.log(res.data);
              
        if (res.action=="addit") {
          dialogRef.componentInstance.form.patchValue({
            title: additAuther.title,
            text: additAuther.text,
            img: additAuther.img
            
          });
          this.service.AdditItem<Authers>(`${environment.authers.get}/${id}`, additAuther).subscribe(()=>{
              this.getitem();  
          })
        }
      }
    })
  }
}
  // addNewUser(){
  //   let user:Authers={
  //     "title": document.getElementsByTagName('input')[0].value,
  //     "text":  document.getElementsByTagName('textarea')[0].value,
  //     "img":   document.getElementsByTagName('input')[1].value,
  //     "img1":  "../../../assets/img/Negative2.png",
  //     "img2":  "../../../assets/img/Negative.png",
  //     "img3":  "../../../assets/img/Negative3.png",
  //     "img4":  "../../../assets/img/Negative1.png"

  //   }
  //   this.service.AddItem<Authers>(environment.authers.get , user).subscribe(()=>{
  //     this.getitem()
  //   })
  // }
  // user!:Authers;
  // additUser(){
  //   this.service.GetJsonItem<Authers>(`${environment.authers.get}`).subscribe(data=>{
  //     this.user= data
  //     document.getElementsByTagName('input')[0].value=    this.user.title;
  //     document.getElementsByTagName('textarea')[0].value= this.user.text;
  //     document.getElementsByTagName('input')[1].value=    this.user.img;
  //   })
  //   let user:Authers={
  //     "title": document.getElementsByTagName('input')[0].value,
  //     "text":  document.getElementsByTagName('textarea')[0].value,
  //     "img":   document.getElementsByTagName('input')[1].value,
  //     "img1":  "../../../assets/img/Negative2.png",
  //     "img2":  "../../../assets/img/Negative.png",
  //     "img3":  "../../../assets/img/Negative3.png",
  //     "img4":  "../../../assets/img/Negative1.png"
  //   }
  //   this.service.AdditItem<Authers>(`${environment.authers.get}`,user).subscribe(()=>{
  //     this.getitem();
  //   })

