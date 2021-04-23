import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { Accessory} from '../../accessory.model';
import {AccessoryService} from '../../accessory.service';

@Component({
  selector: 'app-accessory-item',
  templateUrl: './accessory-item.component.html',
  styleUrls: ['./accessory-item.component.css']
})
export class AccessoryItemComponent implements OnInit {

  @Input() accessory: Accessory;
  constructor(private accessoryService: AccessoryService) { }

  ngOnInit(): void {
  }
  onSelected() {
    this.accessoryService.accessorySelected.emit(this.accessory);
  }
}
