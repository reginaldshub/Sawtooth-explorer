import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  res: any;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.blocks().subscribe((res) => {
      if (res) {
        console.log(res);
        this.res = res;
      }
    })
  }
}