import { Component, Inject, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Authers } from 'src/app/models/authers';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import {MatIconModule} from '@angular/material/icon';
import { DialogFormsComponent } from '../dialog-forms/dialog-forms.component';
import { MatDialog, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';


export interface DialogData{
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-auther-admin',
  templateUrl: './auther-admin.component.html',
  styleUrls: ['./auther-admin.component.css'],
  standalone: true,
  imports: [MatTableModule,MatIconModule,NgIf,
            DialogFormsComponent,MatDialogModule
  ]
})
export class AutherAdminComponent implements OnInit{
  author:Authers[]=[];
  name!: string;
  constructor(private service: DataService,private dialog:MatDialog){}
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
  openDialog() {
    this.dialog.open(DialogFormsComponent, {
      width: '600px',
      height: '500px',
      
      // data: {
      //   animal: 'panda',
      // },
    });
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
  
  put(){

  };
}
