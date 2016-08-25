import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UsersListService } from './users-list.service';

@Component({
  selector: 'users-list',
  template: require('./users-list.html')
})
export class UsersListComponent {
  users: any;
  user: any;
  searchName: any;
  constructor(private UsersListService: UsersListService,
              private router: Router) {}

  ngOnInit() {
    this.searchName = '';
    this.getUsers();
  }

  getUsers() {
    this.UsersListService.getUsers().subscribe((users: any) => {
      this.users = users;
      console.log(this.users);
    })
  }

  onSearch(name) {
    if (this.searchName === name) return;
    if (!name) {
      this.searchName = '';
      this.getUsers();
    } else {
      this.searchName = name;
      this.UsersListService.getUsersByName(name).subscribe((users: any) => {
        this.users = users;
      });
    }
  }
};
