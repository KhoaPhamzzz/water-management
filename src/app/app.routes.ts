import { Routes } from '@angular/router';
import { LoginComponent } from 'app/pages/login/login.component';
import { LayoutComponent } from 'app/pages/layout/layout.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard'; 

export const routes: Routes = [
    {
        path: '', redirectTo:'login', pathMatch: 'full',
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'layout',
        component:LayoutComponent, 
        canActivate: [AuthGuard],  // Protect the entire layout
        children: [
            {
                path: 'dashboard',
                component:DashboardComponent
            }
        ]
    }
];

