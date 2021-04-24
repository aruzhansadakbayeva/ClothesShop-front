import {Accessory} from './accessory.model';
import {EventEmitter} from '@angular/core';

export class AccessoryService {
  accessorySelected = new EventEmitter<Accessory>();
  private accessories: Accessory[] = [
    new Accessory('CASE-CHARGER #14', '1500 ₽', 'https://pokras.shop/wp-content/uploads/2020/03/IMG_9769.jpg', 'Detailed and multi-layered print on the phone case from our brand will transform your phone in one of the masterpieces of Pokras Lampas!\n' +
      'The print is made by UV-print method with few layers, which creates 3d effect of the art on the case.\n' +
      '\n' +
      'Important! Don’t fold your case so you wont damage the the printed paint on the case.\n' +
      '\n' +
      'The case is made out of silicone.'),
    new Accessory( 'CASE PHONE #3', '1500 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/chehly0010.jpg', 'Detailed and multi-layered print on the phone case from our brand will transform your phone in one of the masterpieces of Pokras Lampas!\n' +
      'The print is made by UV-print method with few layers, which creates 3d effect of the art on the case.\n' +
      '\n' +
      'Important! Don’t fold your case so you wont damage the the printed paint on the case.\n' +
      '\n' +
      'The case is made out of silicone.'
    ),
    new Accessory('CASE-CHARGER #11', '1500 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/2-7.jpg', 'Detailed and multi-layered print on the phone case from our brand will transform your phone in one of the masterpieces of Pokras Lampas!\n' +
      'The print is made by UV-print method with few layers, which creates 3d effect of the art on the case.\n' +
      '\n' +
      'Important! Don’t fold your case so you wont damage the the printed paint on the case.\n' +
      '\n' +
      'The case is made out of silicone.'),
    new Accessory(
      'SCARF “WE ARE FUTURE”', '3500 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/sharf_makro1956.jpg', 'Long and warm scarf “WE ARE FUTURE” is perfect accessory for cold weather, big graphic print will emphasize wearer’s look and will help to deal with cold'
    ),
    new Accessory('Case-Charger #10', '2000 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/1-8.jpg', 'Detailed and multi-layered print on the phone case from our brand will transform your phone in one of the masterpieces of Pokras Lampas!\n' +
      'The print is made by UV-print method with few layers, which creates 3d effect of the art on the case.\n' +
      '\n' +
      'Important! Don’t fold your case so you wont damage the the printed paint on the case.\n' +
      '\n' +
      'The case is made out of silicone.'),
    new Accessory( 'BASEBALL CAP “FUTURE”', '2500 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/pokras_katalog_chehli1346.jpg', 'Baseball Cap “Future” – comfortable and stylish accessory from our brand, combine it with T-Shirt and belt from the same collection for total look.'),
    new Accessory( 'BELT “WE ARE FUTURE”', '3500 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/DSC07434-1-copy.jpg', 'Stylish and flexible belt “WE ARE THE FUTURE” made similar to many belts from Major Fashion Brands. Wear it with clothes from our collection, to finish the look.'),
    new Accessory('CASE PHONE #2', '1500 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/chehly0012.jpg', 'Detailed and multi-layered print on the phone case from our brand will transform your phone in one of the masterpieces of Pokras Lampas!\n' +
      'The print is made by UV-print method with few layers, which creates 3d effect of the art on the case.\n' +
      '\n' +
      'Important! Don’t fold your case so you wont damage the the printed paint on the case.\n' +
      '\n' +
      'The case is made out of silicone.')

  ];
  getAccessories() {
    return this.accessories.slice();
  }
  getAccessory(index: number) {
    return this.accessories[index];
  }
}

