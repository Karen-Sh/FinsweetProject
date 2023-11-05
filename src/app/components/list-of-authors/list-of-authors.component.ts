import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authers } from 'src/app/models/authers';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-list-of-authors',
  templateUrl: './list-of-authors.component.html',
  styleUrls: ['./list-of-authors.component.css'],
  standalone: true,
  imports:[RouterModule,MatTooltipModule]
})
export class ListOfAuthorsComponent {
    @Input('item') item!:Authers
}
