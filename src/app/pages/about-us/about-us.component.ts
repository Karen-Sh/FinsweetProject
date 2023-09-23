import { Component } from '@angular/core';
import { Authers } from 'src/app/models/authers';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
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
    {
      img: 'assets/img/man-in (3).png',
      title: 'Guy Hawkins',
      text: 'Content Writer @Company',
      img1: 'assets/img/Negative2.png',
      img2: 'assets/img/Negative.png',
      img3: 'assets/img/Negative3.png',
      img4: 'assets/img/Negative1.png'
    },
    {
      img: 'assets/img/woman-in (2).png',
      title: 'Eleanor Pena',
      text: 'Content Writer @Company',
      img1: 'assets/img/Negative2.png',
      img2: 'assets/img/Negative.png',
      img3: 'assets/img/Negative3.png',
      img4: 'assets/img/Negative1.png'
    },
    {
      img: 'assets/img/content (2).png',
      title: 'Robert Fox',
      text: 'Content Writer @Company',
      img1: 'assets/img/Negative2.png',
      img2: 'assets/img/Negative.png',
      img3: 'assets/img/Negative3.png',
      img4: 'assets/img/Negative1.png'
    },
    {
      img: 'assets/img/cheerful.png',
      title: 'Jacob Jones',
      text: 'Content Writer @Company',
      img1: 'assets/img/Negative2.png',
      img2: 'assets/img/Negative.png',
      img3: 'assets/img/Negative3.png',
      img4: 'assets/img/Negative1.png'
    }
  ]
}
