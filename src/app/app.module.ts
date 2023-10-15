import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AutherAdminComponent } from './admin/auther-admin/auther-admin.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { BlogAdminComponent } from './admin/blog-admin/blog-admin.component';

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
      {
        path:'login',
        loadComponent: () =>import('./admin/login/login.component').then(m=>m.LoginComponent),
        title: 'Login'
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
    AdminLayoutComponent,
    AutherAdminComponent,
    CategoryAdminComponent,
    BlogAdminComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routhes, {initialNavigation: 'enabledBlocking'}),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
