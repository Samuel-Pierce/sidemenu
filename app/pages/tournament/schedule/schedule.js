import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/tournament/schedule/schedule.html'
})

export class SchedulePage {
  this.filters = [
    { title: 'Day', value: ''},
    { title: 'Division', value: ''},
    { title: 'Pool', value: '',},
    { title: 'Grade', value: ''},
    { title: 'Gender', value: ''},
  ];
} // export class
