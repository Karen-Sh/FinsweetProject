import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  standalone: true,
  imports: [NgSwitch, NgSwitchCase]
})
export class PostsComponent {
  @Input('post') post!: Post
  @Input('type') type!: string;
}
