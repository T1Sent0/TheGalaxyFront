import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, ReplaySubject } from 'rxjs';
import { AuthResult } from '../../models/auth-result';
import { AuthModel } from '../../models/auth/auth.model';
import { DataService } from '../data.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private readonly dataService: DataService) {}

    public authUser(authModel: AuthModel): Observable<void> {
        return this.dataService.post<AuthModel, AuthResult>('api/Auth/Authentificate', authModel).pipe(
            map(token => {
                // в рамках тестовго примера допускаю хранение access token
                // в локальном хранилище. На практик луше этого не делать и хранить
                // access в памяти
                localStorage.setItem('userToken', token.accessToken);
            })
        );
    }

    public logout(): void {
        localStorage.removeItem('userToken');
    }
}