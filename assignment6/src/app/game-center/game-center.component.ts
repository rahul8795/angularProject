import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.css']
})
export class GameCenterComponent implements OnInit {
  @Output() intervalFire = new EventEmitter <number>();
  interval;
  number=0;
  constructor() { }

  ngOnInit() {
  }
  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFire.emit(this.number + 1);
      this.number++;
    },1000);
  }
  onGameStop(){
      clearInterval(this.interval);
  }
}
