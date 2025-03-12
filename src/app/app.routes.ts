import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    {
        path: "resource",
        component: ListComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
