import { Component, OnInit} from '@angular/core';
import {Wear} from '../wear.model';
import {WearService} from '../wear.service';

@Component({
  selector: 'app-wear-list',
  templateUrl: './wear-list.component.html',
  styleUrls: ['./wear-list.component.css']
})
export class WearListComponent implements OnInit {
  wear: Wear[];
  constructor(private wearService: WearService) { }

  ngOnInit(): void {
    this.wear = this.wearService.getWear();
  }
}
