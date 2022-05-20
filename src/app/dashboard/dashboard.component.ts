import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activities: Activity[] = [];

  constructor(
    private activitiesService: ActivitiesService
  ) { }

  ngOnInit(): void {
    this.getActivities();
  }
  getActivities():void {
    this.activities = this.activitiesService.getCurrentActivities();
  }
  setDone(id: number) {
    this.activitiesService.toggleDone(id);
  }
}
