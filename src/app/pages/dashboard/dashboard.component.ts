import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SideNavComponent], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userType: string = 'user'; // Default to 'user'

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit() {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      console.log('Redirecting to login from DashboardComponent');
      this.router.navigate(['/login']);
      return;
    }

    // Get the userType from the query parameters or from localStorage
    this.route.queryParams.subscribe(params => {
      this.userType = params['user'] || localStorage.getItem('userType') || 'user';
      console.log(`User Type: ${this.userType}`); // Debugging output
    });
  }

  logout() {
    console.log('Logout function called');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType'); // Clear userType from localStorage
    this.router.navigate(['/login']);
  }
}
