import { Injectable } from '@angular/core';
import { Activity, daysBetween } from './activity';

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
      lastDate: new Date("2022-05-20"),
      color: 'lightgreen'
    },
    { id: 1, name: "Activity1", done: true, repeat: 2, startDate: new Date("2022-03-14"), color: 'lightblue'},
    { id: 2, name: "Activity2", done: true, repeat: 3, startDate: new Date("2022-05-20"), color: 'lightcoral' },
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
  }
  add(name: string, repeat: number, date: Date, color: string) {
    let act: Activity = {
      id: this.maxid,
      name: name,
      repeat: repeat,
      startDate: date,
      done: false,
      color: color,
    };
    this.activities.push(act);
    this.maxid++;
  }

  delete(id: number) {
    let i = this.activities.findIndex(a => a.id == id);
    console.log(id, i)
    this.activities.splice(i,1);
  }

  resetDone() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    this.activities.forEach(a => {
      if (a.lastDate == null) {
        a.done = false;
        return
      }
      if (daysBetween(today, a.lastDate) != 0)
        a.done = false;
    });
  }

  getCurrentActivities() {
    this.resetDone();
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let curAct = this.activities.filter(a => {
      let days = daysBetween(today, a.startDate);
      return !(days % a.repeat);
    });
    return curAct;
  }
}
