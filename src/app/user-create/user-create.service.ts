import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class UserCreateService {
  constructor(private http: Http,
              private router: Router){}

  addUser(user: User) {
    return this.http.post(`${API}/users/`, user)
                    .map(user => user.json())
                    .catch(error => {
                      this.router.navigate(['/**']);
                      return Observable.throw(error.json())
                    })
  }
}
