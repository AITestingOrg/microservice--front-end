import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

    edgeServiceUrl = `http://localhost:8080/api/userservice/auth/oauth/token`;

    constructor(private _router: Router, private _http: HttpClient) {}

    obtainAccessToken(loginData) {
        console.log('obtaining access token');
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa('front-end:front-end')
        });

        console.log(loginData);

        const params = new HttpParams()
            .set('grant_type', 'password')
            .set('scope', 'webclient')
            .set('username', loginData.username)
            .set('password', loginData.password);

        const requestOptions = {
            headers,
            withCredentials: true,
        };

        console.log(params.toString());

        this._http.post(
            this.edgeServiceUrl,
            params.toString(),
            requestOptions,
        ).subscribe();
            // data => this.saveToken((data as any).access_token),
            // err => {
            //     alert('Invalid credientals');
            //     console.warn(`Failed to communicated with the user service. Err: ${JSON.stringify(err)}`);
            // });
    }

    saveToken(token) {
        localStorage.setItem('accessToken', token);
        console.log(token);
    }

    checkCredentials() {
        const token = localStorage.getItem('accessToken');
        if (token != null) {
            this._router.navigate(['/dashboard']);
        }
    }

    logout() {
        localStorage.clear();
        this._router.navigate(['/login']);
    }

}
