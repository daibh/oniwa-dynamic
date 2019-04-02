import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ExampleService, IExample } from './example.service';
import { IAttribute, IPortlet } from './attribute-portlet/attribute-portlet.component';
import { IAttributeForm } from './attribute-form/attribute-form.component';

declare let $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  name = 'Angular';
  attributes: IAttribute[];
  attributeForm: IAttributeForm[];
  storeAttributes: IAttribute[];
  storeAttributeForm: IAttributeForm[];


  constructor(
    private exampleService: ExampleService
  ) { }

  ngOnInit() {
    this.attributeForm = [{
      id: 0,
      attributes: []
    }];
    this.exampleService.getAttributes().subscribe(attributes => {
      this.attributes = attributes;
    });
  }

  onPortletChange($event) {
    console.log('onPortletChange', $event);
    this.storeAttributes = $event;
  }

  onFormChange($event) {
    console.log('onFormChange', $event);
    this.storeAttributeForm = $event;
  }

  ngAfterViewInit(): void {
    // $(function () {
    //   $(".sortable").sortable({
    //     placeholder: "ui-state-highlight",
    //     connectWith: ".connectedSortable"
    //   });
    //   $(".sortable").disableSelection();
    // });
  }

}
