import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private readonly httpclient: HttpClient) {

    }

    public post<TRequest, TResponse>(url: string, model: TRequest): Observable<TResponse> {
        let body = JSON.stringify(model);
        return this.httpclient.post<TResponse>(environment.apiUrl + url, body, { headers: this.getCommonHeaders() });
    }

    public get<TResponse>(url: string): Observable<TResponse> {
        return this.httpclient.get<TResponse>(environment.apiUrl + url, { headers: this.getCommonHeaders() });
    }

    private getCommonHeaders(): HttpHeaders {
        let headers = new HttpHeaders()
                .append('X-Requested-With', 'XMLHttpRequest')
                .append('Access-Control-Allow-Origin', '*')
                .append('Cache-control', 'no-cache')
                .append('Cache-control', 'no-store')
                .append('Expires', '0')
                .append('Pragma', 'no-cache')
                .append('Content-Type', 'application/json');

                return headers;
    }
}