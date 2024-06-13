import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router along with ActivatedRoute

@Component({
  selector: 'app-dashboard',
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
    this.route.queryParams.subscribe(params => {
      this.userType = params['user'] || 'user'; // Set userType based on URL parameter
    });
  }

  logout() {
    localStorage.removeItem('isAuthenticated');  // Clear authentication flag
    this.router.navigate(['/login']);  // Redirect to login page
  }
  
}
