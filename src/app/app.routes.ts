import { Routes } from '@angular/router';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'sing-in', component: SignInComponent },

    {
        path: '',
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./modules/home/dashboard/dashboard.component').then(m => m.DashboardComponent)

            },


            { path: '**', redirectTo: 'dashboard' }
        ]
    }
];
