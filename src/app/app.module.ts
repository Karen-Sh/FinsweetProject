import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { AuthorComponent } from './pages/author/author.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFountComponent } from './pages/page-not-fount/page-not-fount.component';
import { LayoutComponent } from './layout/layout.component';

let routhes: Routes=[
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomeComponent,
        title: 'Home'
      },
      {
        path: 'blog',
        component: BlogComponent,
        title: 'Blog'
      },
      {
        path: 'blogPost',
        component: BlogPostComponent,
        title: 'Blog post'
      },
      {
        path: 'aboutUs',
        component: AboutUsComponent,
        title: 'Abouth Us'
      },
      {
        path: 'category',
        component: CategoryComponent,
        title: 'Category'
      },
      {
        path: 'author',
        component: AuthorComponent,
        title: 'Author'
      },
      {
        path: 'contact',
        component:ContactComponent,
        title: 'Contact'
      },
      {
        path:'privacyPolicy',
        component: PrivacyPolicyComponent,
        title: 'Privacy Policy'
      },
    ]
  },
  {
    path: '**',
    component: PageNotFountComponent,
    title: 'Error'
  }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routhes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
