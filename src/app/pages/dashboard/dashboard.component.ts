import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; // Import RouterModule with Router and ActivatedRoute
import { SideNavComponent } from './side-nav/side-nav.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SideNavComponent], // Import SideNavComponent and RouterModule directly
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userType: string = 'user'; // Default to 'user'

  constructor(
    private route: ActivatedRoute,
    private router: Router  // Inject Router here
  ) {}

  ngOnInit() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
        console.log('Redirecting to login from DashboardComponent');
        this.router.navigate(['/login']); // Ensure this logic is not incorrectly triggered
    }
}

  logout() {
    console.log('Logout function called');
    localStorage.removeItem('isAuthenticated'); // Clear authentication flag
    this.router.navigate(['/login']); // Redirect to login page
  }
}
