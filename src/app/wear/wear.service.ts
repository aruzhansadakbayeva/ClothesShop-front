import {Wear} from './wear.model';
import {EventEmitter} from '@angular/core';

export class WearService {
  wearSelected = new EventEmitter<Wear>();
  private wear: Wear[] = [
    new Wear('Hoody', '7000 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/hudi_chern_kolc_B-scaled.jpg' )
  ];

  getWear() {
    return this.wear.slice();
  }

  getWearr(index: number) {
    return this.wear[index];
  }
}
