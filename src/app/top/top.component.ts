import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

@Output() changeMenu:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSelectItem(itemiId:number){
    this.changeMenu.emit(itemiId);
    console.log("On select item " + itemiId);
  }
}
