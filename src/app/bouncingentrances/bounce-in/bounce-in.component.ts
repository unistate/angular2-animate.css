import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { bounceIn } from '../../animations/bounce-in.animation';

@Component({
  selector: 'ng2animate-bounce-in',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-in.component.html',
  animations: [ bounceIn ]
})
export class BounceInComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
