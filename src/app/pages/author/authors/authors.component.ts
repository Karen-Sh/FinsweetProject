import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  @Input('auther') auther!:Category
}