import { Component, EventEmitter, AfterViewInit, Input, Output } from '@angular/core';
import { IAttribute } from '../attribute-portlet/attribute-portlet.component';

declare let $: any;

@Component({
  selector: 'ngx-attribute-form',
  templateUrl: './attribute-form.component.html',
  styleUrls: ['./attribute-form.component.css']
})
export class AttributeFormComponent implements AfterViewInit {
  @Input()
  attributeForm: IAttributeForm[];
  @Output()
  onChange: EventEmitter<IAttributeForm[]> = new EventEmitter<IAttributeForm[]>();

  constructor() { }

  ngAfterViewInit(): void {
    const self = this;
    $(function () {
      $(".sortable0").sortable({
        placeholder: "ui-state-highlight",
        connectWith: ".connectedSortable",
        tolerance: "pointer",
        remove(event, ui) {
          // event.stopPropagation();
          const removeIndex = self.attributeForm[0].attributes.findIndex(a => a.Id === ui.item[0].value.Id);
          self.attributeForm[0].attributes.splice(removeIndex, 1);
          self.onChange.emit(self.attributeForm);
        },
        receive(event, ui) {
          const attribue = ui.item[0].value;
          self.attributeForm[0].attributes.push(attribue);
          self.onChange.emit(self.attributeForm);
        }
      }).disableSelection();
    });
  }

}

export interface IAttributeForm {
  id?: any;
  attributes: IAttribute[];
}