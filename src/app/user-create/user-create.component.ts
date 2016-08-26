import { Component, OnInit, Input } from '@angular/core';
import { UserCreateService } from './user-create.service';
import { Router } from '@angular/router';

import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';

@Component({
  selector: 'user-create',
  template: require('./user-create.html'),
  styles: [`
    .my-drop-zone { border: dotted 3px lightgray; }
    .nv-file-over { border: dotted 3px red; }
    .another-file-over-class { border: dotted 3px green; }`]
})

export class UserCreateComponent {
  @Input()
  currentStep: number;
  accept: boolean;
  user: any;
  sub: any;
  uploadFile: any;
  data: any;
  subRem: any;
  options: Object = {
    url: 'https://api.cloudinary.com/v1_1/dv5qpskjz/image/upload?upload_preset=wmsfdgiq'
  };
  constructor(private UserCreateService: UserCreateService,
              private Router: Router){}

  ngOnInit() {
    this.user = {
      image: '',
      position: '',
      name: '',
      company_adress: '',
      company: '',
      phone: '',
      adress: {
        home_number: '',
        street: '',
        apartment: '',
        city: '',
        code: '',
      }
    };
    this.currentStep = 1;
    this.accept = false;
  }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  goNext() {
    this.currentStep++;
  }

  goPrevious() {
    this.currentStep--;
  }

  onSubmit() {
    if(!this.accept) return;
    this.sub = this.UserCreateService.addUser(this.user).subscribe((res) => {
      this.Router.navigate(['users']);
    });
  }

  handleUpload(data) {
    this.data = data;
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
      this.user.image = this.uploadFile.url;
    }
  }
}
