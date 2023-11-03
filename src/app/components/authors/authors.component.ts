import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Authers } from 'src/app/models/authers';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  standalone: true,
  imports:[NgIf, RouterLink]
})
export class AuthorsComponent {
  @Input('auther') auther!:Authers
}
