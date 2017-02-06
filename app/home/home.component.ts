import {Component, OnInit} from '@angular/core';

import { TransactionsService } from '../services/transactions.service';

@Component({
    selector: 'home',
      providers: [TransactionsService],
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent implements OnInit {
  //variable declartions
  data: any;
  mega: any;
  power: any;
  error: any;
  powerTakeHome: any;
  megaTakeHome: any;

  constructor(
    private transactionsService: TransactionsService,
  ) { }


  ngOnInit() {
          this.transactionsService.getData()
      .subscribe(
      data => {
        this.data = data;
        this.powerTakeHome = data.power.lump * .604;
        this.megaTakeHome = data.mega.lump * .604;
      },
      error => { this.error = error; }
      );   
  }



}