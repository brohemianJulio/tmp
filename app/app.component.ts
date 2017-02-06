import { Component, OnInit } from '@angular/core';

import { TransactionsService } from './services/transactions.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [TransactionsService],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(
    private transactionsService: TransactionsService,
  ) { }

  ngOnInit() {

  }

}
