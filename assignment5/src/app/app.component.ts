import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag = true;
  count = [];

  toggleParagraph() {
    this.flag = !this.flag;
    this.count.push(this.count.length + 1);
    return this.flag;
    
  }

  getLength() {
    if(this.count.length > 4 ){
      return 'blue';
    }else{
      return 'red';
    }
  }
}
