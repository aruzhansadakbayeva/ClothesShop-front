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
    new Wear('T-SHIRT “CANVAS” BLUE', '4700 ₽', 'https://pokras.shop/wp-content/uploads/2020/11/futbolka_golub_print.jpg', 'All models are oversize and unisex'),
    new Wear('KIMONO “WE ARE THE FUTURE”', '8000 ₽', 'https://pokras.shop/wp-content/uploads/2020/03/kimono_bez_platka-scaled.jpg', 'The first item our new collectoon, kimono made in one size with Asian style, but European cut: shortened sleeves, dense lightwegiht fabric, embroidery of the word “CULTURE” on the back, braided slings on the arm, zippers on pockets.'),
    new Wear('SAND HOODIE “SOZDAVAY"', '7000 ₽', 'https://pokras.shop/wp-content/uploads/2020/03/hudi_bezh_kolc-scaled.jpg', 'One of the personal favourites of Pokras Lampas. Hoodie “ Ç 0 3 Д Ā B Å Й “ (translates from Cyrillic as “create”) printed and reflected on both sides of the hoodie. Inside of the hood you will find hidden signature which say “New Visual Culture” in Cyrillic.\n' +
      '\n' +
      'Hoodie goes perfectly well with any clothes.\n' +
      'Cotton combined with polyester feels comfortably on the skin.\n' +
      'Composit: 80% cotton, 20% polyester\n' +
      'Print method: silk screen printing.\n' +
      'All items are unisex and oversize'),
    new Wear('БОМБЕР SORRY', '15000 ₽', 'https://pokras.shop/wp-content/uploads/2020/11/bomber-scaled.jpg', 'Бомбер «SORRY»\n' +
      'Первый бомбер в коллекции нашего бренда. В качестве наполнителя служит специальный утеплитель — Изософт, созданный Бельгийской компанией Libeltex.\n' +
      '⠀\n' +
      'На спине бомбера расположена каллиграфия со словом «SORRY», впервые показанная на нашем белом худи, а также вдоль всей спины написаны вариации этого слова, переведенные на большинство популярных языков мира, что делает этот айтем по-настоящему United world (Объединяющим мир).\n' +
      '⠀\n' +
      'Состав:\n' +
      '98% изософт 2% полиэстер'),
    new Wear('GREEN HOODIE “SOZDAVAY”', '7000 ₽', 'https://pokras.shop/wp-content/uploads/2020/03/hudi_chern_kolc_ZL-scaled.jpg', 'One of the personal favourites of Pokras Lampas. Hoodie “ Ç 0 3 Д Ā B Å Й “ (translates from Cyrillic as “create”) printed and reflected on both sides of the hoodie. Inside of the hood you will find hidden signature which say “New Visual Culture” in Cyrillic.\n' +
      '\n' +
      'Hoodie goes perfectly well with any clothes.\n' +
      'Cotton combined with polyester feels comfortably on the skin. This particular hoodies series have green fluorescent print which glows in the dark!\n' +
      'Composit: 80% cotton, 20% polyester\n' +
      'Print method: silk screen printing.\n' +
      'All items are unisex and oversize'),
    new Wear('T-SHIRT “MANIFESTO”', '4000 ₽', 'https://pokras.shop/wp-content/uploads/2020/03/manefest-scaled.jpg', 'The T-Shirt firstly released in commemoration of first large scale expo of Pokras Lampas art in Moscow in September 2017. T-Shirt have large graphic of calligraphy and manifesto of Pokras written in English and Cyrillic which states main ideas and goals of Pokras in art.\n' +
      'Composit: 92% cotton, 8% lycra\n' +
      'Print method: Silk Screen printing\n' +
      'All models are unisex and oversize'),
    new Wear('YELLOW HOODIE «SOZDAVAY»', '7000 ₽', 'https://pokras.shop/wp-content/uploads/2020/08/hudi_chern_kolc_ZhL-1.jpg', 'One of the personal favourites of Pokras Lampas. Hoodie “ Ç 0 3 Д Ā B Å Й “ (translates from Cyrillic as “create”) printed and reflected on both sides of the hoodie. Inside of the hood you will find hidden signature which say “New Visual Culture” in Cyrillic.\n' +
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

