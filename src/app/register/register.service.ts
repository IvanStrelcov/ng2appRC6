import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class RegisterService {
  constructor(private http: Http,
              private router: Router){}
  postAccaunt() {
    return this.http.post(`${API}/register`)
                    .map(user => user.json())
                    .catch(error => {
                      this.router.navigate(['/**']);
                      return Observable.throw(new Error(error))
                    })
  }

  checkEmail(email) {
    return this.http.get(`${API}/check&email=${email}`)
                    .map(user => user.json())
                    .catch(error => {
                      return Observable.throw(new Error(error))
                    })
  }
}
