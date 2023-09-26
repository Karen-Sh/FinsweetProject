import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  post:Post[]=[
    { 
      id: 1,
      img: 'assets/img/two.png',
      cotegory:'BUSINESS',
      title :'Top 6 free website mockup tools 2022',
      post: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
   },
   { 
    id: 2,
    img: 'assets/img/two.png',
    cotegory:'BUSINESS',
    title :'Step-by-step guide to choosing great font pairs',
    post: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    { 
      id: 3,
      img: 'assets/img/two.png',
      cotegory:'BUSINESS',
      title :'Ten free foogle fonts that you should use',
      post: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    { 
      id: 4,
      img: 'assets/img/two.png',
      cotegory:'BUSINESS',
      title :'What did I learn from doing 50+ design sprints?',
      post: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
  ]
}
