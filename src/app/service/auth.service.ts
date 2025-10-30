import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(unname: string, pword: string) {
    if (unname === 'Raghu' && pword === 'raghu') {
      return 200;
    } else {
      return 403;

    }
  }

  logout() {
    this.router.navigate(['login'])
  }
}
