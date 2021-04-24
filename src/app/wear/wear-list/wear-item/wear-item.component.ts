import { Component, OnInit, Input} from '@angular/core';
import { Wear} from '../../wear.model';

@Component({
  selector: 'app-wear-item',
  templateUrl: './wear-item.component.html',
  styleUrls: ['./wear-item.component.css']
})
export class WearItemComponent implements OnInit {
  @Input() wear: Wear;
  @Input() index: number;
  ngOnInit() {
  }

}
