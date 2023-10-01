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
      class:'category',
      img: 'assets/img/two.png',
      cotegory:'BUSINESS',
      title :'Top 6 free website mockup tools 2022',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
   },
   { 
    id: 2,
    class:'category',
    img: 'assets/img/two.png',
    cotegory:'BUSINESS',
    title :'Step-by-step guide to choosing great font pairs',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
    },
    { 
      id: 3,
      class:'category',
      img: 'assets/img/two.png',
      cotegory:'BUSINESS',
      title :'Ten free foogle fonts that you should use',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
    },
    { 
      id: 4,
      class:'category',
      img: 'assets/img/two.png',
      cotegory:'BUSINESS',
      title :'What did I learn from doing 50+ design sprints?',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
    },
  ]
}
