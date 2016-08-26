import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserCreateService {
  constructor(private http: Http){}

  addUser(user: User) {
    return this.http.post(`/api/users/`, user)
                    .map(user => {
                      try {
                        return user.json();
                      }
                      catch (err) {
                        console.log(`this is error in user-create service ${err}`);
                      }
                    });
  }
}
