import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactUs } from 'src/app/models/contactUs';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports:[NgIf,MatIconModule,MatButtonModule,MatTableModule,MatTooltipModule]
})
export class ContactUsComponent implements OnInit {
  contact:ContactUs[]=[];
  displayedColumns: string[] = [
    'position',
    'fullName',
    'email',
    'sel',
    'message',
    'action'
  ];
    constructor(private service:DataService){ }
  ngOnInit(): void {
    this.getItem()
  }
  getItem(){
    this.service.GetJsonItem<ContactUs[]>(environment.contactUs.get).subscribe(data=>{
      this.contact = data
    })
  }
  del(id:number){
   if (confirm('Do you really want to delete')) {
     this.service.DeleteItem(`${environment.contactUs.get}/${id}`).subscribe(()=>{
       this.getItem()
     })
   }
  }
}
