import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser() {
    return {
      name: "Shlomo Artzi",
      coins: 100,
      transfers: []
    }
  }
}
