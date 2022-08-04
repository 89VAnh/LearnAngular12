import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  counter = 0;
  counterFactorial = 0;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterFactorial = this.common.Factorial(this.counter);
    this.common.counter++;
  }
}
