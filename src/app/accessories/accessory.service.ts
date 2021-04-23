import {Accessory} from './accessory.model';
import {EventEmitter} from '@angular/core';

export class AccessoryService {
  accessorySelected = new EventEmitter<Accessory>();
  private accessories: Accessory[] = [
    new Accessory('Hoody', '7000 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/hudi_chern_kolc_B-scaled.jpg')
  ];
  getAccessories() {
    return this.accessories.slice();
  }
}

