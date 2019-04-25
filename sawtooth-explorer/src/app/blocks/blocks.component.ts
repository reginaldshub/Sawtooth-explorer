import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  res: Object;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.blocks().subscribe((res) => {
      if (res) {
        this.res = JSON.stringify(res);
      }
    })
  }

}
