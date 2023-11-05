import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Subscribe } from 'src/app/models/subscribe';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
  standalone: true,
  imports:[MatTableModule,MatIconModule]
})
export class SubscribeComponent implements OnInit {
  sub:Subscribe[]=[]
  lengt!:number
  displayedColumns: string[] = [
    'position',
    'email',
    'action'
  ];
  constructor(private service: DataService){}
  ngOnInit(): void {
    this.get()
  }
  get(){
    this.service.GetJsonItem<Subscribe[]>(environment.sub.get).subscribe(data=>{
      this.sub =data;
      this.lengt = this.sub.length
    })
  }
  del(id:number){
     if (confirm('Do you really want to delete')) {
      this.service.DeleteItem(`${environment.sub.get}/${id}`).subscribe(()=>{
       this.get()
      })
     }
  }

}
