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
    this.service.batches().subscribe((res:any) => {
      if (res) {
        // console.log(res)
        this.res = res.data;
        this.head = res.head;
        // for (let i = 0; i <= this.res.length; i++) {
        //   this.elements.push({ publicKey:  this.res[i].header.signer_public_key, batchId: res.head, headerSignature: this.res[i].header_signature });
        // }
      }
    })
  }

}
