import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ExampleService, IExample } from './example.service';

declare let $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  name = 'Angular';
  examples: IExample[];

  constructor(
    private exampleService: ExampleService
  ) { }

  ngOnInit() {
    this.exampleService.getExamples().subscribe(examples => {
      this.examples = examples;
    });
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
