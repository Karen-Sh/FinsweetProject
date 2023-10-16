import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { CategoryAdminComponent } from '../category-admin/category-admin.component';
import { AutherAdminComponent } from '../auther-admin/auther-admin.component';
import { BlogAdminComponent } from '../blog-admin/blog-admin.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  standalone: true,
  imports: [LoginComponent,DashbordComponent,CategoryAdminComponent,AutherAdminComponent,BlogAdminComponent,RouterOutlet]
})
export class AdminLayoutComponent {

}
