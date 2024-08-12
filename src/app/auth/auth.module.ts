import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
    declarations: [ AuthComponent ],
    imports: [ CommonModule, FormsModule, AuthRoutingModule ],
    exports: [],
    providers: [ AuthService ],
})
export class AuthModule {}