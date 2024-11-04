import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import FontAwesomeModule
import { IconDefinition, faTachometerAlt, faCogs, faUser, faPalette } from '@fortawesome/free-solid-svg-icons'; // Import your icons
import { navItems } from './nav-items'; // Adjust the path if necessary

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule], // Use FontAwesomeModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // To handle custom elements if necessary
})
export class SideNavComponent {
  public navItems = navItems;

  // Define your FontAwesome icons
  private iconMap: { [key: string]: IconDefinition } = {
    faTachometerAlt: faTachometerAlt,
    faCogs: faCogs,
    faUser: faUser,
    faPalette: faPalette
  };

  getIcon(iconName: string): IconDefinition {
    // Return the icon from the map or a default icon (faUser in this case)
    return this.iconMap[iconName] || faUser;
  }
}
