import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-choose-a-catagory',
  templateUrl: './choose-a-catagory.component.html',
  styleUrls: ['./choose-a-catagory.component.css'], 
  standalone: true,
  imports:[]
})

export class ChooseACatagoryComponent {
  @Input('item') item!: Category
}
