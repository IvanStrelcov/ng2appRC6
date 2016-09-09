import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// import template from './user.html';

@Component({
  selector: 'user',
  template: require('./user.html')
})
export class UserComponent implements OnInit{
  @Input()
  user: User;
  constructor(private router: Router){}
  ngOnInit(){
  }

  gotoDetail(user) {
    this.router.navigate(['dashboard/users', this.user.user_id]);
  }
};
