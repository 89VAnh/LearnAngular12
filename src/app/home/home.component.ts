import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'VAnh';
  public age: number = 18;

  constructor() {}

  ngOnInit(): void {}

  public resetName(): void {
    this.name = '';
  }
}
