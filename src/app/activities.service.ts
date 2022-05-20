import { Injectable } from '@angular/core';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService {

  constructor() { }
  private activities: Activity[] = [
    { 
      id: 0, 
      name: "Activity0", 
      done: false, 
      repeat: 1, 
      startDate: new Date("2022-05-1"),
      lastDate: new Date("2022-05-20")
    },
    { id: 1, name: "Activity1", done: true, repeat: 2, startDate: new Date("2022-03-14") },
    { id: 2, name: "Activity2", done: true, repeat: 3, startDate: new Date("2022-05-20") },
  ];
  private maxid = 3;

  getActivities(): Activity[] {
    return this.activities;
  }

  toggleDone(id: number): void {
    let act = this.activities.find(a => a.id == id)
    if (act != null){
      act.done = !act.done;
      if (act.done)
        act.lastDate = new Date();
      else
        act.lastDate = null;
    }
    console.log(act)
  }
  add(name: string, repeat: number, date: Date) {
    let act: Activity = {
      id: this.maxid,
      name: name,
      repeat: repeat,
      startDate: date,
      done: false
    };
    this.activities.push(act);
    this.maxid++;
  }

  resetDone() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    this.activities.forEach(a => {
      if (a.lastDate == null) {
        a.done = false;
        return
      }
      if (this.daysBetween(today, a.lastDate) != 0)
        a.done = false;
    });
  }

  getCurrentActivities() {
    this.resetDone();
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let curAct = this.activities.filter(a => {
      let days = this.daysBetween(today, a.startDate);
      return !(days % a.repeat);
    });
    return curAct;
  }

  daysBetween(now: Date, other: Date) {
    let diff = now.getTime() - other.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
}
