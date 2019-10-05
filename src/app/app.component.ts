import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-info-panel></app-info-panel>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() pageId:number;
  title = 'InfoPanel';

  onChangeMenu($event){
    console.log("Evento intercettato " + event);
  }
}
