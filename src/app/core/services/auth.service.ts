import { login } from './auth.urls';
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, switchMap, throwError } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private token = signal<string | null>(null);
    private user = signal<string | null>(null);
    private _authRoles = signal<string>('')
    private api: string = environment.apiUrl;

    private _router : Router = inject(Router);
    private _httpClient = inject(HttpClient);

    constructor() {}

    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    set refreshToken(refreshToken: string)
    {
        localStorage.setItem('refreshToken', refreshToken);
    }

    get refreshToken(): string
    {
        return localStorage.getItem('refreshToken') ?? '';
    }

    get authRolesInText() : string{
        return this._authRoles();
    }



    clearToken(): void {
        this.token.set(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }

    isLoggedIn(): boolean {
        return this.accessToken !== '';
    }

    signIn( user: string, rol: string , password : string ): Observable<any> {
        if ( this.accessToken !== '' )
        {
            return throwError( () => 'El usuario ya esta logueado');
        }

        return this._httpClient.post<any>(`${this.api}/${login}`, { user, rol , password })
        .pipe(
            catchError( (error) => {
                return throwError( () => error );
            }),
            switchMap( (response) => {
                console.log(response);
                // this.accessToken = response.accessToken;
                // this.refreshToken = response.refreshToken;
                // this._authRoles.set(response.roles);
                return of(response);
            })
        )
    }
}