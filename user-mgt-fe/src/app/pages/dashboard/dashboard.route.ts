import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { UserManagement } from '../user-management/user-management';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'user-mgt',
    component: UserManagement,
  },
];
