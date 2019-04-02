import { Component, AfterViewInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
// import $ from 'jquery';
declare let $: any;

@Component({
  selector: 'ngx-attribute-portlet',
  templateUrl: './attribute-portlet.component.html',
  styleUrls: ['./attribute-portlet.component.css']
})
export class AttributePortletComponent implements AfterViewInit {
  @Input()
  attributes: IAttribute[];
  @Output()
  onChange: EventEmitter<IAttribute[]> = new EventEmitter<IAttribute[]>();

  constructor() { }

  onClick = $event => {
    this.onChange.emit([]);
  }

  ngAfterViewInit(): void {
    const self = this;
    $(".sortable").sortable({
      placeholder: "ui-state-highlight",
      connectWith: ".connectedSortable",
      tolerance: "pointer",
      remove(event, ui) {
        // event.stopPropagation();
        const removeIndex = self.attributes.findIndex(a => a.Id === ui.item[0].value.Id);
        self.attributes.splice(removeIndex, 1);
        self.onChange.emit(self.attributes);
      },
      receive(event, ui) {
        const attribue = ui.item[0].value;
        self.attributes.push(attribue);
        self.onChange.emit(self.attributes);
      }
    }).disableSelection();
  }

  isDefined = $obj => $obj !== undefined && $obj !== null;

}

export interface IPortlet {
  Id?: any;
  Attributes?: IAttribute[];
}

export interface IAttribute {
  Id?: string;
  Name?: string;
  Label?: string;
  Code?: string;
  Type?: string;
  Class?: string;
}
