import { Injectable } from '@angular/core';
import { Dealer } from "src/app/dealer";

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor() { }

  public getDealers():Dealer[]{
    return [{"pacode":"00001", "name":"Dealer1", "address": "address1", "numberOfCars":10, "date":"11/05/1980"},
            {"pacode":"00002", "name":"Dealer2", "address": "address2", "numberOfCars":20, "date":"11/05/1980"},
            {"pacode":"00003", "name":"Dealer3", "address": "address3", "numberOfCars":30, "date":"11/05/1980"}];
  }
}
