import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  authers:Post[]=[
    { 
      id: 1,
      class:'authers',
      img: 'assets/img/stained.png',
      cotegory:'BUSINESS',
      title :'Font sizes in UI design: The complete guide to follow',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    { 
      id: 2,
      class:'authers',
      img: 'assets/img/main-in.png',
      cotegory:'ECONOMY',
      title :'How to build rapport with your web design clients',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]
  auther:Category[]=[
    { 
      id: 1,
      img: 'assets/img/close-up (2).png',
      title :'Hey there, I’m Andrew Jonhson and welcome to my Blog',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna 
             aliqua. Non blandit massa enim nec. Scelerisque viverra mauris 
             in aliquam sem. At risus viverra adipiscing at in tellus.`
    }
  ]
}
