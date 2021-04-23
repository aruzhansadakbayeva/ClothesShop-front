import { Component, OnInit } from '@angular/core';
import {Accessory} from './accessory.model';
import {AccessoryService} from './accessory.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css'],
  providers: [AccessoryService]
})
export class AccessoriesComponent implements OnInit {

  selectedAccessory: Accessory;
  constructor(private accessoryService: AccessoryService) { }

  ngOnInit(): void {
    this.accessoryService.accessorySelected
      .subscribe(
        (accessory: Accessory) => {
          this.selectedAccessory = accessory;
        }
      );
  }

}
