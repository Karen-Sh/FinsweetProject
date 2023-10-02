import { Component } from '@angular/core';
import { FooterComponent } from '../header-footer/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from '../header-footer/header-nav/header-nav.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports:[FooterComponent,RouterModule,HeaderNavComponent]
})
export class LayoutComponent {

}
