import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() show ? = true;
  @Input() showClose ? = true;
  @Input() materialDS:any;
  @Input() state:any;
  @Input() size:any;


  constructor() { 
    //vacio
  }

  ngOnInit() {
    this.show = true;
  }

  ocultar() {
    this.show = false;
  }
}
