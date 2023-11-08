import { Component, Input } from '@angular/core';

export type Size = 's' | 'm';
@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() titleTool: any;
  @Input() textTool: any;
  @Input() load = false;
  @Input() size?: Size;

}
