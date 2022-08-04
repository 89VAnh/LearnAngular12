import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'VAnh';
  public age: number = 18;
  public fruits = [
    { name: 'Apple', price: 10 },
    { name: 'Orange', price: 20 },
    { name: 'Banana', price: 30 },
    { name: 'Pear', price: 40 },
  ];

  constructor() {}

  ngOnInit(): void {}

  public resetName(): void {
    this.name = '';
  }
}
