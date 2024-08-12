import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../models/users/user.model';
import { DataService } from '../data.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private readonly dataService: DataService) {

    }

    public getUserLsit(): Observable<User[]> {
        return this.dataService.get<User[]>('api/User/GetUsers').pipe(
            map(users => users.map(x => new User(x)))
        );
    }

    public updateUser(user: User): Observable<void> {
        return this.dataService.post('api/User/UpdateUser', user);
    }
}