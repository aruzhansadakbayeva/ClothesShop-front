import {Component, OnInit} from '@angular/core';
import {Accessory} from '../accessory.model';
import {AccessoryService} from '../accessory.service';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrls: ['./accessory-list.component.css']
})
export class AccessoryListComponent implements OnInit {
  accessories: Accessory[];
  constructor(private accessoryService: AccessoryService) { }

  ngOnInit(): void {
    this.accessories = this.accessoryService.getAccessories();
  }
}
