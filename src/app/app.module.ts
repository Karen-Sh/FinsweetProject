import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { loginGuard } from './guard/login.guard';
import { adminGuard } from './guard/admin.guard';
let routhes: Routes=[
  {
    path: '',
    loadComponent: () =>import('./layout/layout.component').then(m=>m.LayoutComponent),
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadComponent: ()=>import('./pages/home/home.component').then(m=>m.HomeComponent),
        title: 'Home'
      },
      {
        path: 'blog',
        loadComponent: () =>import('./pages/blog/blog.component').then(m=>m.BlogComponent),
        title: 'Blog'
      },
      {
        path: 'blogPost/:id',
        loadComponent: () =>import('./pages/blog-post/blog-post.component').then(m=>m.BlogPostComponent),
        title: 'Blog post'
      },
      {
        path: 'aboutUs',
        loadComponent: () =>import('./pages/about-us/about-us.component').then(m=>m.AboutUsComponent),
        title: 'Abouth Us'
      },
      {
        path: 'category/:category',
        loadComponent: () =>import('./pages/category/category.component').then(m=>m.CategoryComponent),
        title: 'Category'
      },
      {
        path: 'author/:userName',
        loadComponent: () =>import('./pages/author/author.component').then(m=>m.AuthorComponent),
        title: 'Author'
      },
      {
        path: 'contact',
        loadComponent: () =>import('./pages/contact/contact.component').then(m=>m.ContactComponent),
        title: 'Contact'
      },
      {
        path:'privacyPolicy',
        loadComponent: () =>import('./pages/privacy-policy/privacy-policy.component').then(m=>m.PrivacyPolicyComponent),
        title: 'Privacy Policy'
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./admin/login/login.component').then(m => m.LoginComponent),
    title: "Login",
    canActivate:[loginGuard]
  },
  {
    path: 'admin',
    loadComponent: () =>import('./admin/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivateChild:[adminGuard],
    children:[
      {
        path: '',
        loadComponent: () => import('./admin/dashbord/dashbord.component').then(m => m.DashbordComponent),
        title: "Dashboard"
      },
      {
        path: 'auther',
        loadComponent: () => import('./admin/auther-admin/auther-admin.component').then(m => m.AutherAdminComponent),
        title: "AutherAdmin"
      },
      {
        path: 'blog',
        loadComponent: () => import('./admin/blog-admin/blog-admin.component').then(m => m.BlogAdminComponent),
        title: "BlogAdmin"
      },
      {
        path: 'cotegory',
        loadComponent: () => import('./admin/category-admin/category-admin.component').then(m => m.CategoryAdminComponent),
        title: "CotegoryAdmin"
      },
      {
        path: 'register',
        loadComponent: () => import('./admin/user-registration/user-registration.component').then(m => m.UserRegistrationComponent),
        title: "Registration"
      },
      {
        path: 'contactUs',
        loadComponent: () => import('./admin/contact-us/contact-us.component').then(m => m.ContactUsComponent),
        title: "ContactUs Admin"
      }
    ]
  },
  {
    path: '**',
    loadComponent: () =>import('./pages/page-not-fount/page-not-fount.component').then(m=>m.PageNotFountComponent),
    title: 'Error'
  }
]
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routhes , {initialNavigation: 'enabledBlocking', scrollPositionRestoration:'top'}),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
