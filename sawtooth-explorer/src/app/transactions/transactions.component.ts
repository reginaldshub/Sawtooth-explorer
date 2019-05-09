import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  res: any;

  constructor(private service: ServiceService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.service.transactions().subscribe((res: any) => {
      if (res) {
        this.res = res.data;
      }
    })
  }
}