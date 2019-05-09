import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
  res: any;
  head: any;
  constructor(private service: ServiceService) { }

  headElements = ['publicKey', 'batchId', 'headerSignature'];


  ngOnInit() {
    this.service.batches().subscribe((res: any) => {

      console.log(res)
      if (res) {
        console.log(res)
        this.res = res.data;
        this.head = res.head;
      }
    })
  }

}
