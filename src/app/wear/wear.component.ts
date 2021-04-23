import { Component, OnInit } from '@angular/core';
import {Wear} from './wear.model';
import {WearService} from './wear.service';

@Component({
  selector: 'app-wear',
  templateUrl: './wear.component.html',
  styleUrls: ['./wear.component.css'],
  providers: [WearService]
})
export class WearComponent implements OnInit {

  selectedWear: Wear;
  constructor(private wearService: WearService) { }

  ngOnInit() {
    this.wearService.wearSelected
      .subscribe(
        (wear: Wear) => {
          this.selectedWear = wear;
        }
      );
  }

}
