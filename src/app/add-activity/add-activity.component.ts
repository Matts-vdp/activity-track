import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivitiesService } from '../activities.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    repeat: [1, Validators.min(1)],
    date: [formatDate(new Date(), "yyyy-MM-dd", "en"), Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private activitiesService: ActivitiesService,
    ) { }

  public color = '#adff2f';

  ngOnInit(): void {
  }
  onSubmit(){
    if (!this.form.valid) return;
    this.activitiesService.add(
      this.form.value.name, 
      this.form.value.repeat,
      new Date(this.form.value.date),
      this.color
      )
      this.form.reset({name:'', repeat:1, date:formatDate(new Date(), "yyyy-MM-dd", "en")});
  }
}
