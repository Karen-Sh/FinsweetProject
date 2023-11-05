import { Component } from '@angular/core';
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
    RouterModule
  ]
})
export class AdminLayoutComponent {
  constructor(private router:Router){}
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
