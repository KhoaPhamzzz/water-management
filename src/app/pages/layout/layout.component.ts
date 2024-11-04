import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component'; 



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [RouterModule,SideNavComponent,HeaderComponent, FooterComponent], // Include RouterModule here
})
export class LayoutComponent {
  // Component logic here
}
