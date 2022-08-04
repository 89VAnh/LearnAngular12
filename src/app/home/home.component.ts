import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities = [
    { name: 'Chon thanh pho', distincts: [] },
    { name: 'Hung Yen', distincts: ['Yen My', 'Lieu Xa'] },
    { name: 'Hanoi', distincts: ['Hanoi', 'Ha Noi', 'Cau Giay'] },
    { name: 'Da Nang', distincts: ['Da Nang', 'Dai Nang'] },
  ];
  distincts: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  changeCity(e: any) {
    const city = e.target.value;
    this.distincts =
      this.cities.find(({ name }) => name === city)?.distincts || [];
  }
}
