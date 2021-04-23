import { Component, OnInit, Input } from '@angular/core';
import {Wear} from '../wear.model';

@Component({
  selector: 'app-wear-detail',
  templateUrl: './wear-detail.component.html',
  styleUrls: ['./wear-detail.component.css']
})
export class WearDetailComponent implements OnInit {
  @Input() wear: Wear;
  constructor() { }

  ngOnInit(): void {
  }

}
