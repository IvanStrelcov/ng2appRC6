import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class UserProfileService {
  constructor(private http: Http,
              private router: Router){}

  getUser(id) {
    return this.http.get(`/api/users/${id}`)
                    .map(user => user.json())
                    .catch(error => {
                      this.router.navigate(['/**']);
                      return Observable.throw(error.json())
                    })
  }

  removeUser(id) {
    return this.http.delete(`/api/users/${id}`)
                    .map(user => user.json())
                    .catch(error => {
                      this.router.navigate(['/**']);
                      return Observable.throw(error.json())
                    })
  }
}
