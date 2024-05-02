import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        title: "Dashboard",
        component: DashboardComponent
    },
    {
        path: 'categories',
        title: "Categories",
        component: CategoriesComponent
    }
];
