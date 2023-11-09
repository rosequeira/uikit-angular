import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  @Input () category:any;
  @Input () classTags:any;
  @Input () title:any;

}
