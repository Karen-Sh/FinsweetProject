import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Authers } from 'src/app/models/authers';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-auther-admin',
  templateUrl: './auther-admin.component.html',
  styleUrls: ['./auther-admin.component.css'],
  standalone: true,
  imports: [MatTableModule,MatIconModule]
})
export class AutherAdminComponent implements OnInit{
  author:Authers[]=[]
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
  
}
