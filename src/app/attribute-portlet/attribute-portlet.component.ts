import { Component, OnInit, AfterViewInit } from '@angular/core';
// import $ from 'jquery';
// import 'jquery-ui/ui/widgets/sortable.js';
declare let $: any;

@Component({
  selector: 'ngx-attribute-portlet',
  templateUrl: './attribute-portlet.component.html',
  styleUrls: ['./attribute-portlet.component.css']
})
export class AttributePortletComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(function () {
      $("#sortable").sortable({
        placeholder: "ui-state-highlight"
      });
      $("#sortable").disableSelection();
    });
  }

}