import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/tournament/standings/standings.html'
})
export class StandingsPage {

  this.standings = [
    { team: 'celtics', pos: 1 },
    { team: 'lakers', pos: 2 },
    { team: 'heat', pos: 3 }
  ];
}
