import { Routes } from '@angular/router';
import { SampleCompComponent } from './components/sample-comp/sample-comp.component';
import { SignalsComponent } from './components/signals/signals.component';
import { NewComp1Component } from './components/new-comp1/new-comp1.component';
import { NewComp2Component } from './components/new-comp2/new-comp2.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/Home",
        pathMatch:"full",
    },
    {
        path:"Home",
        component: SignalsComponent,
    },
     {
        path:"signal",
        component: NewComp1Component,
    },
    {
        path:"crud",
        component: NewComp2Component,
    }
];
