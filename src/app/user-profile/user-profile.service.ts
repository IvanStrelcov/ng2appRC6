import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserProfileService {
  constructor(private http: Http){}

  getUser(id) {
    return this.http.get(`/api/users/${id}`)
                    .map(user => {
                      try {
                        return user.json();
                      }
                      catch (err){
                        console.log(err);
                      }
                    });
  }

  removeUser(id) {
    return this.http.delete(`/api/users/${id}`)
                    .map(res => {
                      try {
                        return res.json();
                      }
                      catch (err){
                        console.log(err);
                      }
                    });
  }
}
