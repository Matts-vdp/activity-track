import { Injectable } from '@angular/core';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService {

  constructor() { }
  private activities: Activity[] = [
    {"id": 0, "name": "Activity0", "done": false},
    {"id": 1, "name": "Activity1", "done": true},
    {"id": 2, "name": "Activity2", "done": false},

  ] 

  getActivities(): Activity[]{
    return this.activities;
  }
}
