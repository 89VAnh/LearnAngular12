import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor() {}
  @ViewChild('child1') child1: ChildComponent | undefined;
  @ViewChild('child2') child2: ChildComponent | undefined;

  ngOnInit(): void {}

  calledParent(name: string): void {
    console.log(name);
  }
  sendMoney(): void {
    this.child1?.getMoney(5);
    this.child2?.getMoney(10);
  }
}
