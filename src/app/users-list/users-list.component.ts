import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UsersListService } from './users-list.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'users-list',
  template: require('./users-list.html')
})
export class UsersListComponent {
  private users: User[];
  private user: User;
  public  searchName: string;
  private searchStream = new Subject<string>();
  constructor(private _usersListService: UsersListService,
              private router: Router) {}

  ngOnInit() {
    this.getUsers();
    this.searchStream
        .debounceTime(1000)
        .distinctUntilChanged()
        .switchMap((input:string) => {
          if(input){
            return this._usersListService.getUserByName(input)
          } else {
            return this._usersListService.getUsers()
          }
        })
        .subscribe(
          data => {
            this.users = data
          }
        );
  }

  getUsers() {
    this._usersListService.getUsers().subscribe((users: any) => {
      this.users = users;
    })
  }

  onSearchName(name: string) {
    this.searchStream
        .next(name);
  }
};
