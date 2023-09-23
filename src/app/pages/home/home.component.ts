import { Component } from '@angular/core';
import { Authers } from 'src/app/models/authers';
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
  authers:Authers[]=[
    {
        img: 'assets/img/man-in.png',
        title: 'Floyd Miles',
        text: 'Content Writer @Company',
        img1: 'assets/img/Negative2.png',
        img2: 'assets/img/Negative.png',
        img3: 'assets/img/Negative3.png',
        img4: 'assets/img/Negative1.png'
    },
    {
      img: 'assets/img/woman-in.png',
      title: 'Dianne Russell',
      text: 'Content Writer @Company',
      img1: 'assets/img/Negative2.png',
      img2: 'assets/img/Negative.png',
      img3: 'assets/img/Negative3.png',
      img4: 'assets/img/Negative1.png'
    },
    {
      img: 'assets/img/fashion.png',
      title: 'Jenny Wilson',
      text: 'Content Writer @Company',
      img1: 'assets/img/Negative2.png',
      img2: 'assets/img/Negative.png',
      img3: 'assets/img/Negative3.png',
      img4: 'assets/img/Negative1.png'
    },
    {
      img: 'assets/img/content.png',
      title: 'Leslie Alexander',
      text: 'Content Writer @Company',
      img1: 'assets/img/Negative2.png',
      img2: 'assets/img/Negative.png',
      img3: 'assets/img/Negative3.png',
      img4: 'assets/img/Negative1.png'
    },
  ]
}
