import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

let routhes: Routes=[
  {
    path: '',
    // component: LayoutComponent,
    loadComponent: () =>import('./layout/layout.component').then(m=>m.LayoutComponent),
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        // component: HomeComponent,
        loadComponent: ()=>import('./pages/home/home.component').then(m=>m.HomeComponent),
        title: 'Home'
      },
      {
        path: 'blog',
        // component: BlogComponent,
        loadComponent: () =>import('./pages/blog/blog.component').then(m=>m.BlogComponent),
        title: 'Blog'
      },
      {
        path: 'blogPost',
        // component: BlogPostComponent,
        loadComponent: () =>import('./pages/blog-post/blog-post.component').then(m=>m.BlogPostComponent),
        title: 'Blog post'
      },
      {
        path: 'aboutUs',
        // component: AboutUsComponent,
        loadComponent: () =>import('./pages/about-us/about-us.component').then(m=>m.AboutUsComponent),
        title: 'Abouth Us'
      },
      {
        path: 'category',
        // component: CategoryComponent,
        loadComponent: () =>import('./pages/category/category.component').then(m=>m.CategoryComponent),
        title: 'Category'
      },
      {
        path: 'author',
        // component: AuthorComponent,
        loadComponent: () =>import('./pages/author/author.component').then(m=>m.AuthorComponent),
        title: 'Author'
      },
      {
        path: 'contact',
        // component:ContactComponent,
        loadComponent: () =>import('./pages/contact/contact.component').then(m=>m.ContactComponent),
        title: 'Contact'
      },
      {
        path:'privacyPolicy',
        // component: PrivacyPolicyComponent,
        loadComponent: () =>import('./pages/privacy-policy/privacy-policy.component').then(m=>m.PrivacyPolicyComponent),
        title: 'Privacy Policy'
      },
    ]
  },
  {
    path: '**',
    // component: PageNotFountComponent,
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
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
