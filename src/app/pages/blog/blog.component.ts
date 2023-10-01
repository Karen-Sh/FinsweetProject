import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  category:Category[]=[
    { 
     id: 1,
     img:'assets/img/Icon (3).png',
     title: 'Business',
     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
   },
   { 
     id: 2,
     img:'assets/img/shuttle (1).png',
     title: 'Startup',
     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
   },
   { 
     id: 3,
     img:'assets/img/economy (1).png',
     title: 'Economy',
     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
   },
   { 
     id: 4,
     img:'assets/img/cyborg (1).png',
     title: 'Technology',
     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
   }
  ];
  post:Post[]=[
    { 
      id: 1,
      class:'glog',
      img: 'assets/img/two.png',
      cotegory:'Startup',
      title :'Design tips for designers that cover everything you need',
      post: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
   },
   { 
    id: 2,
    class:'glog',
    img: 'assets/img/photo-of.png',
    cotegory:'BUSINESS',
    title :'How to build rapport with your web design clients',
    post: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    { 
      id: 3,
      class:'glog',
      img: 'assets/img/photo-of1.png',
      cotegory:'Startup',
      title :'Logo design trends to avoid in 2022',
      post: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    { 
      id: 4,
      class:'glog',
      img: 'assets/img/photo-of2.png',
      cotegory:'TECHNOLOGY',
      title :'8 Figma design systems you can download for free today',
      post: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    { 
      id: 5,
      class:'glog',
      img: 'assets/img/two.png',
      cotegory:'ECONOMY',
      title :'Font sizes in UI design: The complete guide to follow',
      post: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    }
  ]
}
