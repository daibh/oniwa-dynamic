import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'ngx-attribute-form',
  templateUrl: './attribute-form.component.html',
  styleUrls: ['./attribute-form.component.css']
})
export class AttributeFormComponent implements OnInit, AfterViewInit {

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