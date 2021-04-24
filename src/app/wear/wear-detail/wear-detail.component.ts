import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import {Wear} from '../wear.model';
import {WearService} from '../wear.service';

@Component({
  selector: 'app-wear-detail',
  templateUrl: './wear-detail.component.html',
  styleUrls: ['./wear-detail.component.css']
})
export class WearDetailComponent implements OnInit {
  wear: Wear;
  id: number;
  constructor(private wearService: WearService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.wear = this.wearService.getWearr(this.id);
        }
      );
  }

}
