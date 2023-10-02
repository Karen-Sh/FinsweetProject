import { Component } from '@angular/core';
import { JoinComponent } from '../join/join.component';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  standalone: true,
  imports:[JoinComponent]
})
export class BlogPostComponent {

}
