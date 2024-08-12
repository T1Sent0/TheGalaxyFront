import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainFeatureComponent } from './main-feature.component';


const routes: Routes = [
    { path: '', component: MainFeatureComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
