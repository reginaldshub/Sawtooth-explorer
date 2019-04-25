import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  res: any;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.transactions().subscribe((res) => {
      if (res) {
        this.res = res.data;
      }
    })
  }

}
