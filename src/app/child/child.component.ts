import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() name: string = '';
  @Output() callParent: EventEmitter<any> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.callParent.emit(this.name);
  }

  getMoney(amount: number): void {
    console.log(this.name + ' get ' + amount + ' dollars ');
  }
}
