import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: any = [];
  @Input() tiTable: any;
  @Input() tabFocus:number = 0;
  @Input() extend: boolean = false;

  @Output() tabSelected = new EventEmitter<any>();

  constructor() {
    //vacio
  }

  ngOnInit() {
    console.log('index')
  }

  tabsIndexFocuss(index: number){
    this.tabFocus = index;
    this.tabSelected.emit(this.tabs[index]);
  }
}
