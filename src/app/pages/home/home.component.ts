import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
  ]
}
