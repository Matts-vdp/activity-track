import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-dash-item',
  templateUrl: './dash-item.component.html',
  styleUrls: ['./dash-item.component.css']
})
export class DashItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() activity!: Activity;
  @Output() clickEvent = new EventEmitter<number>();

  click(){
    this.clickEvent.emit(this.activity.id);
  }

  getColor() {
    if (this.activity.done) {
      return 'var(--items-done)';
    }
    return this.activity.color;
  }
}
