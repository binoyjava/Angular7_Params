import { Component, OnInit } from '@angular/core';
import { DealerService } from "src/app/dealer.service";
import { ActivatedRoute } from "@angular/router";
import { Dealer } from "src/app/dealer";

@Component({
  selector: 'app-dealer-detail',
  templateUrl: './dealer-detail.component.html',
  styleUrls: ['./dealer-detail.component.css']
})
export class DealerDetailComponent implements OnInit {
  dealer : Dealer;
  dealerId : string;
  private sub: any;
  constructor(private dealerService: DealerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.dealerId =  params['id'];
      // this.dealerService.getDealers().forEach(element => {
      //   if(this.dealerId == element.pacode){
      //     this.dealer = element;
      //   }
      // });
      // this.dealer = this.dealerService.getDealers().filter(function(tmpDealer) {
      //   return tmpDealer.pacode == this.dealerId;
      // })
    });
  }
  ngOnDestroy() {    
    this.sub.unsubscribe();
  }

}
