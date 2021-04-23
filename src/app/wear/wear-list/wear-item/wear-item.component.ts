import { Component, OnInit, Input} from '@angular/core';
import { Wear} from '../../wear.model';
import {WearService} from '../../wear.service';

@Component({
  selector: 'app-wear-item',
  templateUrl: './wear-item.component.html',
  styleUrls: ['./wear-item.component.css']
})
export class WearItemComponent implements OnInit {
  @Input() wear: Wear;
  constructor(private wearService: WearService) { }

  ngOnInit() {
  }
  onSelected() {
    this.wearService.wearSelected.emit(this.wear);
  }
}
