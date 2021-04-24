import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { Accessory} from '../../accessory.model';

@Component({
  selector: 'app-accessory-item',
  templateUrl: './accessory-item.component.html',
  styleUrls: ['./accessory-item.component.css']
})
export class AccessoryItemComponent implements OnInit {
  @Input() accessory: Accessory;
  @Input() index: number;
  ngOnInit() {
  }

}
