import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[] = [];

  constructor(
    private activitiesService: ActivitiesService
  ) { }

  ngOnInit(): void {
    this.getActivities();
  }
  getActivities():void {
    this.activities = this.activitiesService.getActivities();
  }

}
