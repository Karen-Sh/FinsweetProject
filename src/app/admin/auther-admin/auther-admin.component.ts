import { Component, OnInit } from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import { Authers } from 'src/app/models/authers';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { MatIconModule} from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
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
  };
  openAddDialog(){
    const dialogRef = this.dialog.open(FormAurherComponent, {
      data:{
        action: 'add'
      }
    });
    dialogRef.afterClosed().subscribe(res=>{
      if (res && res.data) {
        const addAuther=res.data;             
        if (res.action=="add") {
          dialogRef.componentInstance.form.patchValue({
            title: addAuther.title,
            text: addAuther.text,
            img: addAuther.img
            
          });
          this.service.AddItem<Authers>(`${environment.authers.get}`, addAuther).subscribe(()=>{
              this.getitem();  
          })
        }
      }
    })

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