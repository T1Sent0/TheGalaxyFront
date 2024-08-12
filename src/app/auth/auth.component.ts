import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from '../shared/models/auth/auth.model';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    public authModel: AuthModel;

    constructor(private readonly authService: AuthService, private readonly router: Router) {
        this.authModel = new AuthModel();
    }

    public ngOnInit(): void { }

    public login(): void {
        this.authService.authUser(this.authModel).subscribe(() => {
            this.router.navigate(['main-feature']);
        });
    }
}
