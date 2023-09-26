import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-cotegorypost',
  templateUrl: './cotegorypost.component.html',
  styleUrls: ['./cotegorypost.component.css']
})
export class CotegorypostComponent {
    @Input('post') post!:Post
}
