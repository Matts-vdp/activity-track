import { EventEmitter, Injectable } from '@angular/core';
import { Activity, daysBetween } from './activity';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


@Injectable({
  providedIn: 'root'
})


export class ActivitiesService {

  loadEvent = new EventEmitter();
  constructor() {
    this.readFile()
    let max = 0;
    this.activities.forEach(a => {
      if (a.id > max) max = a.id;
    });
    this.maxid = max + 1
  }
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
    { id: 1, name: "Activity1", done: true, repeat: 2, startDate: new Date("2022-03-14"), color: 'lightblue' },
    { id: 2, name: "Activity2", done: true, repeat: 3, startDate: new Date("2022-05-20"), color: 'lightcoral' },
  ];
  private maxid = 3;

  getActivities(): Activity[] {
    return this.activities;
  }

  toggleDone(id: number): void {
    let act = this.activities.find(a => a.id == id)
    if (act != null) {
      act.done = !act.done;
      if (act.done)
        act.lastDate = new Date();
      else
        act.lastDate = null;
      this.writeFile();
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
    this.writeFile();
  }

  delete(id: number) {
    let i = this.activities.findIndex(a => a.id == id);
    this.activities.splice(i, 1);
    this.writeFile();
  }

  resetDone() {
    let action = false;
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    this.activities.forEach(a => {
      if (a.lastDate == null) {
        if (a.done) action = true;
        a.done = false;
        return
      }
      if (daysBetween(today, a.lastDate) != 0) {
        if (a.done) action = true;
        a.done = false;
      }
    });
    if (action) this.writeFile();
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

  async writeFile() {
    let data = JSON.stringify(this.activities);
    await Filesystem.writeFile({
      path: 'activities.json',
      data: data,
      directory: Directory.Data,
      encoding: Encoding.UTF8,
    });
  }
  async readFile() {
    const contents = await Filesystem.readFile({
      path: 'activities.json',
      directory: Directory.Data,
      encoding: Encoding.UTF8,
    }).then(v => {
      if (v.data != '') {
        this.activities = JSON.parse(v.data);
        this.activities.forEach(a => {
          a.startDate = new Date(a.startDate);
          if (a.lastDate != null)
            a.lastDate = new Date(a.lastDate);
        })
        this.loadEvent.emit();
      }
  });
};
}
