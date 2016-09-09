import { Component }       from '@angular/core';
import { Observable }      from 'rxjs';
import { Subject }         from 'rxjs/Subject';
import { Router }          from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'register',
  template: require('./register.template.html')
})

export class RegisterComponent {
  public  user: User;
  public  accept: boolean;
  private stream: any;
  private searchEmail = new Subject<string>();
  constructor(private Router: Router,
              private _registerService: RegisterService){}
  ngOnInit() {
    this.user = {
      user_name: '',
      user_email: '',
      user_password: ''
    };
    this.accept = false;
    this.searchEmail
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap((email:string) => {
          if(email){
            return this._registerService.checkEmail(email)
          }
        })
        .subscribe(data => {
          console.log(data);
        });
  }

  onSubmit() {
    this.stream = this._registerService.checkEmail(this.user.user_email)
                                       .subscribe(res => res)

  }

  onCheckEmail(email: string){
    this.searchEmail.next(email);
  }
}

