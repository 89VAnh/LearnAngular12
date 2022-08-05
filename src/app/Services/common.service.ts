import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  counter = 0;

  constructor() {}

  Factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    return n * this.Factorial(n - 1);
  }

  submitData(data: any): void {
    console.log(data, '-> server');
  }
}
