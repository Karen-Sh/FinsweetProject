import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-choose-a-catagory',
  templateUrl: './choose-a-catagory.component.html',
  styleUrls: ['./choose-a-catagory.component.css'], 
  standalone: true,
  imports:[MatTooltipModule]
})

export class ChooseACatagoryComponent {
  @Input('item') item!: Category
}
