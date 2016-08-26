import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsersListService {
  constructor(private http: Http){}
  getUsers() {
    return this.http.get(`/api/users`)
                    .map(user => {
                      try {
                        return user.json()
                      }
                      catch (err) {
                        return [];
                      }
                    })
  }
  getUsersByName(name) {
    return this.http.get(`/api/users?name=${name}`)
                    .map(user => {
                      try {
                        return user.json();
                      }
                      catch (err) {
                        console.log(err);
                      }
                    })
  }
}
