import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private _httpClient: HttpClient) { }
  getUsers() {
    return this._httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
