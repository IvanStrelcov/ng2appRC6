import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: require('./header.html')
})
export class HeaderComponent {
  ngOnInit() {
    console.log('header init');
  }
};
