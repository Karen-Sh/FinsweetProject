import { Component, Input } from '@angular/core';
import { Authers } from 'src/app/models/authers';

@Component({
  selector: 'app-list-of-authors',
  templateUrl: './list-of-authors.component.html',
  styleUrls: ['./list-of-authors.component.css']
})
export class ListOfAuthorsComponent {
    @Input('item') item!:Authers
}
