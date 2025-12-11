import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private token = signal<string | null>(null);
    constructor() {}
    setToken(token: string): void {
        this.token.set(token);
    }

    getToken(): string | null {
        return this.token();
    }

    clearToken(): void {
        this.token.set(null);
    }

    isLoggedIn(): boolean {
        return this.token() !== null;
    }
}