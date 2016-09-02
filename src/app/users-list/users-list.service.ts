import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class UsersListService {
  constructor(private http: Http,
              private router: Router){}
  getUsers() {
    return this.http.get(`/api/users`)
                    .map(user => user.json())
                    .catch(error => {
                      this.router.navigate(['/**']);
                      return Observable.throw(new Error(error))
                    })
  }
  getUserByName(name) {
    return this.http.get(`/api/users/search?name=${name}`)
                    .map(user => user.json())
                    .catch(error => {
                      return Observable.throw(new Error(error))
                    })
  }
}
