import { Component, OnInit, Input } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  template: require('./user-profile.html')
})
export class UserProfileComponent implements OnInit{
  @Input()
  user: User;
  sub: any;
  remove: any;
  constructor(private UserProfileService: UserProfileService,
              private route: ActivatedRoute,
              private router: Router){}
  ngOnInit(){
    this.getUser();
  }

  ngOnDestroy(){
    if (this.sub) this.sub.unsubscribe();
    if (this.remove) this.remove.unsubscribe();
  }

  getUser(){
    this.sub = this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.UserProfileService
          .getUser(id)
          .subscribe(user => {
            this.user = user;
          });
        });
  }

  onRemove(){
    this.remove = this.UserProfileService.removeUser(this.user.id).subscribe(res => {
      this.router.navigate(['/users']);
    })
  }
};
