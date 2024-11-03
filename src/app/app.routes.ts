import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'layout',
        component: LayoutComponent,
        canActivate: [AuthGuard], // Protects the layout and its children
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'overview',
                component: DashboardComponent // Or another component if separate
            },
            {
                path: 'settings',
                component: DashboardComponent // Or another component if separate
            },
            {
                path: 'profile',
                component: DashboardComponent // Or another component if separate
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
