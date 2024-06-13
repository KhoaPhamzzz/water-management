import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [RouterModule], // Include RouterModule here
})
export class LayoutComponent {
  // Component logic here
}
