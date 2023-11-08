import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnClass: any;
  @Input() size: any;
  @Input() iconClass: any;
  @Input() label: any;
  @Input() materialDS: string ='';
  @Input() loading = false;
  @Input() load = false;
  @Input() id: any;
  @Input() extend: boolean = false;
  @Input() disabled ?= false;

  @HostBinding('class') get HeadingClass() {
    return this.extend ? 'extend' : ''
  }

  constructor() {
    //vacio
  }

  ngOnInit() {
    //vacio
  }
}
