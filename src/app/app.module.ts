import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule}  from '@angular/common/http';

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
        path: 'blogPost',
        loadComponent: () =>import('./pages/blog-post/blog-post.component').then(m=>m.BlogPostComponent),
        title: 'Blog post'
      },
      {
        path: 'aboutUs',
        loadComponent: () =>import('./pages/about-us/about-us.component').then(m=>m.AboutUsComponent),
        title: 'Abouth Us'
      },
      {
        path: 'category/:id',
        loadComponent: () =>import('./pages/category/category.component').then(m=>m.CategoryComponent),
        title: 'Category'
      },
      {
        path: 'author/:id',
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
    RouterModule.forRoot(routhes, {initialNavigation: 'enabledBlocking'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
