import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconModule } from '@coreui/icons-angular'; // Corrected import
import { navItems } from './nav-items'; // Adjust the path if necessary

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IconModule], // Use IconModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // To handle custom elements like c-icon
})
export class SideNavComponent {
  public navItems = navItems;
}
