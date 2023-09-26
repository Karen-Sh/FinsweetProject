import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-footer/header-nav/header-nav.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/join/join.component';
import { HeaderComponent } from './pages/header/header.component';
import { ListOfAuthorsComponent } from './pages/list-of-authors/list-of-authors.component';
import { ChooseACatagoryComponent } from './pages/choose-a-catagory/choose-a-catagory.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogHeaderComponent } from './pages/blog-header/blog-header.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { AuthorComponent } from './pages/author/author.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFountComponent } from './pages/page-not-fount/page-not-fount.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './pages/posts/posts.component';
import { CotegorypostComponent } from './pages/cotegorypost/cotegorypost.component';

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
        component: ContactComponent,
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
    HeaderNavComponent,
    FooterComponent,
    HomeComponent,
    JoinComponent,
    HeaderComponent,
    ListOfAuthorsComponent,
    ChooseACatagoryComponent,
    BlogComponent,
    BlogHeaderComponent,
    BlogPostComponent,
    AboutUsComponent,
    CategoryComponent,
    AuthorComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    PageNotFountComponent,
    LayoutComponent,
    PostsComponent,
    CotegorypostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routhes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
