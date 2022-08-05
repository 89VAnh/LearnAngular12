import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  constructor(private HttpServerService: HttpServerService) {}

  ngOnInit(): void {
    this.HttpServerService.getComments().subscribe((data) => {
      console.log(data);
    });
    this.HttpServerService.getRandomUser(5).subscribe((data) => {
      console.log(data.results);
    });
  }
}
