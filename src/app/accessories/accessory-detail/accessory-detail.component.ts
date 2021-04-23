import { Component, OnInit, Input} from '@angular/core';
import {Accessory} from '../accessory.model';

@Component({
  selector: 'app-accessory-detail',
  templateUrl: './accessory-detail.component.html',
  styleUrls: ['./accessory-detail.component.css']
})
export class AccessoryDetailComponent implements OnInit {
  @Input() accessory: Accessory;
  constructor() { }

  ngOnInit(): void {
  }

}
