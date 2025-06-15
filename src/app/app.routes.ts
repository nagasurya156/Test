import { Routes } from '@angular/router';
import { SampleCompComponent } from './components/sample-comp/sample-comp.component';
import { SignalsComponent } from './components/signals/signals.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/Home",
        pathMatch:"full",
    },
    {
        path:"Home",
        component: SignalsComponent,
    }
];
