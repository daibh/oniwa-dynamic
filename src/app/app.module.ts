import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxHelloComponent } from './hello/hello.component';
import { ExampleService } from './example.service';
import { AttributePortletComponent } from './attribute-portlet/attribute-portlet.component';
import { AttributeFormComponent } from './attribute-form/attribute-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NgxHelloComponent, AttributePortletComponent, AttributeFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ExampleService]
})
export class AppModule { }
