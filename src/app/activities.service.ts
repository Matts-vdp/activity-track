import { Injectable } from '@angular/core';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService {

  constructor() { }
  private activities: Activity[] = [
    {"id": 0, "name": "Activity0", "done": false, "repeat": 1, "lastDate": new Date(Date.now())},
    {"id": 1, "name": "Activity1", "done": true, "repeat": 2, "lastDate": new Date(Date.now())},
    {"id": 2, "name": "Activity2", "done": false, "repeat": 3, "lastDate": new Date(Date.now())},

  ] 

  getActivities(): Activity[]{
    return this.activities;
  }

  toggleDone(id: number): void {
    let act = this.activities.find(a => a.id == id)
    if (act != null)
      act.done = !act.done;
  }
}
