import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private router : Router){}

  left : string = '';
  right : string = '';
  operator : string;
  temp : string;
  total = 0;
  isOperator = false;

  addOperand(angka){
    
    if(!this.isOperator){
      this.left = this.left + angka.toString();
      return this.left
    }
    else if(this.isOperator){
      this.right = this.right + angka.toString();
      return this.right
    }
  }

  addOperator(input){
    if (!this.isOperator){
      this.operator = input;
      this.isOperator = true;
    }
    return this.operator
  }

  calculate(){
    if(this.operator== '+'){
      this.total = Number(this.left) + Number(this.right);
    }
    else if(this.operator== '-'){
      this.total = Number(this.left) - Number(this.right);
    }
    else if(this.operator== '*'){
      this.total = Number(this.left) * Number(this.right);
    }
    this.router.navigate(['/show', this.total])
  }
}
