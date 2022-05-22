import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { Activity, nextDay } from '../activity';

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
    this.activitiesService.loadEvent.subscribe(res => { 
      this.getActivities();
    })
  }
  getActivities():void {
    this.activities = this.activitiesService.getActivities();
  }
  nextDate(activity: Activity) {
    return nextDay(activity);
  }
  delete(id: number) {
    this.activitiesService.delete(id);
  }
}
