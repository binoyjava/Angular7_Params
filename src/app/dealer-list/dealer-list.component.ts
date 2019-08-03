import { Component, OnInit } from '@angular/core';
import { DealerService } from "src/app/dealer.service";

@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.css']
})
export class DealerListComponent implements OnInit {
  public dealers = [];
  constructor(public dealerService:DealerService) { }

  ngOnInit() {
    this.dealers = this.dealerService.getDealers();
  }

}
