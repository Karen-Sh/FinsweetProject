import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { CategoryAdminComponent } from '../category-admin/category-admin.component';
import { AutherAdminComponent } from '../auther-admin/auther-admin.component';
import { BlogAdminComponent } from '../blog-admin/blog-admin.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';
import { Users } from 'src/app/models/users';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  standalone: true,
  imports: [
    LoginComponent,DashbordComponent,
    CategoryAdminComponent,AutherAdminComponent,
    BlogAdminComponent,RouterOutlet,
    RouterLink,MatDividerModule,
    MatButtonModule,MatToolbarModule,
    MatSidenavModule,MatIconModule,
    RouterModule,NgIf
  ]
})
export class AdminLayoutComponent implements OnInit {
  data:string|null = localStorage.getItem('email');
  users= JSON.parse(`${this.data}`).valueOf();
  id:number= this.users.user.id
  admin!:Users
  constructor(private router:Router,private service: DataService){}
  ngOnInit(): void {
    this.service.GetJsonItem<Users>(`${environment.user.get}/${this.id}`).subscribe(data=>{
      this.admin =data      
    })
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
