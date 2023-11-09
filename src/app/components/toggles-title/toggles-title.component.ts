import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface listType {
  title: string;
}

@Component({
  selector: 'ui-toggles-title',
  templateUrl: './toggles-title.component.html',
  styleUrls: ['./toggles-title.component.scss']
})

export class TogglesTitleComponent {
  @Output() accionBtn : EventEmitter<any> = new EventEmitter();
  @Input() listado: listType[] = [];
  focus =  0;

  constructor() { }

  ngOnInit() {}

  accion(valor:any, i:any){
    this.focus = i;
    this.accionBtn.emit(valor)
  }
}
