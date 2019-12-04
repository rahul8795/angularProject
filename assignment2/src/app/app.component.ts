import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerName = 'Appolo';
  ServerPID = 12;
  ServerStatus = 'Offline';
  ServerFlag = false;
  buttonState = true;

constructor( ) {
    setTimeout(()=>{
      this.buttonState = false;
    },2500);
}

  toggleServerStatus (){
    this.ServerFlag = !this.ServerFlag;
    if(this.ServerFlag === true){
      this.ServerStatus = 'online';
    }else{
      this.ServerStatus = 'ofline';
    }
    return this.ServerStatus;
  }
}
