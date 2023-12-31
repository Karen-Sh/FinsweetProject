import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authers } from 'src/app/models/authers';
import { NgFor } from '@angular/common';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { JoinComponent } from 'src/app/components/join/join.component';
import { ListOfAuthorsComponent } from 'src/app/components/list-of-authors/list-of-authors.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [RouterModule,JoinComponent,ListOfAuthorsComponent,NgFor]
})
export class AboutUsComponent implements OnInit {
  authers:any=[]
    constructor(public service :DataService){

    }
  ngOnInit(): void {
    this.service.GetJsonItem<Authers[]>(`${environment.authers.get}`).subscribe(date=>{
      this.authers = date
    })
  }
}
