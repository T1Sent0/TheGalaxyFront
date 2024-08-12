import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeatureComponent } from './main-feature.component';
import { FeatureRoutingModule } from './main-feature.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ MainFeatureComponent ],
    imports: [ CommonModule, FeatureRoutingModule, FormsModule ],
    exports: [],
    providers: [],
})
export class MainFeatureModule {}