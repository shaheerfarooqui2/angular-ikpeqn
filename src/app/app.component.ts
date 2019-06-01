import { NgModule,Component,Injectable } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {platformBroser}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}

