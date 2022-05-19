import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash-item',
  templateUrl: './dash-item.component.html',
  styleUrls: ['./dash-item.component.css']
})
export class DashItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() name!: string;
  @Input() id!: number;
  @Input() done!: boolean;

}
