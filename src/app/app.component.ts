import { Component, OnInit } from '@angular/core';
import { ExampleService, IExample } from './example.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

}
