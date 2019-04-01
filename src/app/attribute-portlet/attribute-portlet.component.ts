import { Component, OnInit, AfterViewInit } from '@angular/core';
// import $ from 'jquery';
declare let $: any;

@Component({
  selector: 'ngx-attribute-portlet',
  templateUrl: './attribute-portlet.component.html',
  styleUrls: ['./attribute-portlet.component.css']
})
export class AttributePortletComponent implements OnInit, AfterViewInit {
  
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    $(function () {
      $(".sortable").sortable({
        placeholder: "ui-state-highlight",
        connectWith: ".connectedSortable",
        tolerance: "pointer"
      });
      $(".sortable").disableSelection();
    });
  }

}
