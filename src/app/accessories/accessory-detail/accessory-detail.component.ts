import { Component, OnInit, Input} from '@angular/core';
import {Accessory} from '../accessory.model';
import {AccessoryService} from '../accessory.service';

import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-accessory-detail',
  templateUrl: './accessory-detail.component.html',
  styleUrls: ['./accessory-detail.component.css']
})
export class AccessoryDetailComponent implements OnInit {
  accessory: Accessory;
  id: number;

  constructor(private accessoryService: AccessoryService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.accessory = this.accessoryService.getAccessory(this.id);
        }
      );
  }
}
