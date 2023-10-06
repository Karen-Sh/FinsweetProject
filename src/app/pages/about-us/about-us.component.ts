import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authers } from 'src/app/models/authers';
import { JoinComponent } from '../join/join.component';
import { ListOfAuthorsComponent } from '../list-of-authors/list-of-authors.component';
import { NgFor } from '@angular/common';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [RouterModule,JoinComponent,ListOfAuthorsComponent,NgFor]
})
export class AboutUsComponent implements OnInit {
  Aut:any=[]
    constructor(public service :DataService){

    }
  ngOnInit(): void {
    this.service.GetJsonHomeAuthers().subscribe(data=>{
      this.Aut = data
    })
  }
}
