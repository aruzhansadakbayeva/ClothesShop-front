import {Wear} from './wear.model';
import {EventEmitter} from '@angular/core';

export class WearService {
  wearSelected = new EventEmitter<Wear>();
  private wear: Wear[] = [
    new Wear('BLACK HOODIE «SOZDAVAY»', '7000 ₽', 'https://pokras.shop/wp-content/uploads/2019/08/hudi_chern_kolc_B-scaled.jpg', 'One of the personal favourites of Pokras Lampas. Hoodie “ Ç 0 3 Д Ā B Å Й “ (translates from Cyrillic as “create”) printed and reflected on both sides of the hoodie. Inside of the hood you will find hidden signature which say “New Visual Culture” in Cyrillic.\n' +
      '\n' +
      'Hoodie goes perfectly well with any clothes.\n' +
      'Cotton combined with polyester feels comfortably on the skin.\n' +
      'Composit: 80% cotton, 20% polyester\n' +
      'Print method: silk screen printing.\n' +
      'All items are unisex and oversize'),
    new Wear('SAND COLOR HOODIE “SOZDAVAY"', '7000 ₽', 'https://pokras.shop/wp-content/uploads/2020/03/hudi_bezh_kolc-scaled.jpg', 'One of the personal favourites of Pokras Lampas. Hoodie “ Ç 0 3 Д Ā B Å Й “ (translates from Cyrillic as “create”) printed and reflected on both sides of the hoodie. Inside of the hood you will find hidden signature which say “New Visual Culture” in Cyrillic.\n' +
      '\n' +
      'Hoodie goes perfectly well with any clothes.\n' +
      'Cotton combined with polyester feels comfortably on the skin.\n' +
      'Composit: 80% cotton, 20% polyester\n' +
      'Print method: silk screen printing.\n' +
      'All items are unisex and oversize'),
    new Wear('GREEN HOODIE “SOZDAVAY”', '7000 ₽', 'https://pokras.shop/wp-content/uploads/2020/03/hudi_chern_kolc_ZL-scaled.jpg', 'One of the personal favourites of Pokras Lampas. Hoodie “ Ç 0 3 Д Ā B Å Й “ (translates from Cyrillic as “create”) printed and reflected on both sides of the hoodie. Inside of the hood you will find hidden signature which say “New Visual Culture” in Cyrillic.\n' +
      '\n' +
      'Hoodie goes perfectly well with any clothes.\n' +
      'Cotton combined with polyester feels comfortably on the skin. This particular hoodies series have green fluorescent print which glows in the dark!\n' +
      'Composit: 80% cotton, 20% polyester\n' +
      'Print method: silk screen printing.\n' +
      'All items are unisex and oversize'),
    new Wear('HOODIE IN YELLOW «SOZDAVAY»', '7000 ₽', 'https://pokras.shop/wp-content/uploads/2020/08/hudi_chern_kolc_ZhL-1.jpg', 'One of the personal favourites of Pokras Lampas. Hoodie “ Ç 0 3 Д Ā B Å Й “ (translates from Cyrillic as “create”) printed and reflected on both sides of the hoodie. Inside of the hood you will find hidden signature which say “New Visual Culture” in Cyrillic.\n' +
      '\n' +
      'Hoodie goes perfectly well with any clothes.\n' +
      'Cotton combined with polyester feels comfortably on the skin.\n' +
      'Composit: 80% cotton, 20% polyester\n' +
      'Print method: silk screen printing.\n' +
      'All items are unisex and oversize'),
    new Wear('T-SHIRT “SOZDAVAY”', '4500 ₽', 'https://pokras.shop/wp-content/uploads/2020/03/sozdavai-scaled.jpg', 'Classic black color, stylish and bright calligraphy as print will help you to stand out with this T-shirt.\n' +
      'Composit: 92% cotton, 8% lycra\n' +
      'Print method: silk screen printing\n' +
      'All models are unisex and oversize'),
  ];

  getWear() {
    return this.wear.slice();
  }

  getWearr(index: number) {
    return this.wear[index];
  }
}

