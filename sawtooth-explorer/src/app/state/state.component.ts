import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  res: Object;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.state().subscribe((res:any) => {
      if (res) {
        console.log(res)
        this.res = res.data;
      }
    })
  }

}
