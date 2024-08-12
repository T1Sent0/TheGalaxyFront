import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/users/user.model';
import { AuthService } from '../shared/services/auth/auth.service';
import { UserService } from '../shared/services/users/user.service';

@Component({
    selector: 'main-feature',
    templateUrl: './main-feature.component.html',
    styleUrls: ['./main-feature.component.scss']
})
export class MainFeatureComponent implements OnInit {

    public searchText: string;
    public userList!: User[]; 

    constructor(private readonly userService: UserService, 
        private readonly authService: AuthService,
        private readonly router: Router) {
        this.searchText = '';

        this.getUserList();
    }

    public ngOnInit(): void { }

    public getUserList(): void {
        this.userService.getUserLsit().subscribe(users => {
           this.userList = users;
        });
    }

    public searchUser(): void {

    }

    public logout(): void {
        this.authService.logout();
        this.router.navigate(['auth']);
    }

    public editUser(user: User): void {
        user.isEdit = true;
    }

    public saveUser(user: User): void {
        user.isEdit = false;

        this.userService.updateUser(user).subscribe()
    }
}
