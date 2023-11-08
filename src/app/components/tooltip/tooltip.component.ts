import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: {'class': 'tool-comp'}
})
export class TooltipComponent {
  @Input() titulo: any;
  @Input() texto: any;
  @Input() isRelative = true;
  
  constructor() {
    //vacio
  }

  ngOnInit() {
    //vacio
  }

}
