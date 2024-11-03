import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true, // Mark as standalone
  imports: [CommonModule, RouterModule], // Import necessary modules here
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  handleLinkClick(linkName: string) {
    console.log(`${linkName} link clicked`);
    // No redirect logic here, just logging for now
  }
}

