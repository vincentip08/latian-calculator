import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Router, RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';

const ROUTES: Routes = [
  {path : 'show/:total', component: ShowComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ] ,
  declarations: [ AppComponent, HelloComponent, CalculatorComponent, ShowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
