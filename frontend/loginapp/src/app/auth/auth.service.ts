import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
    
    isJwtInLocalStorage(): boolean {
        try {
          const jwt = localStorage.getItem("jwt");
          return jwt !== null && jwt !== undefined;
        } catch (error) {
          // Handle any potential errors (e.g., if localStorage is disabled)
          console.error("Error checking for 'jwt' in localStorage:", error);
          return false; // Return false in case of an error
        }
      }
      
    isAuthenticated() {
        return this.isJwtInLocalStorage();
          
    }
}