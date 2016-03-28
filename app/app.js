import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

// main tournament pages
import {SchedulePage} from './pages/tournament/schedule/schedule';
import {StandingsPage} from './pages/tournament/standings/standings';
import {BracketPage} from './pages/tournament/bracket/bracket';

// tournament information pages
import {DateTimePage} from './pages/tournament/info/dateTime/dateTime';
import {LocationsPage} from './pages/tournament/info/locations/locations';
import {StructurePage} from './pages/tournament/info/structure/structure';
import {MembersPage} from './pages/tournament/info/members/members';

// settings pages
// import {TermsPage} from './pages/settings/terms/terms';
// import {PrivacyPage} from './pages/settings/privacy/privacy';
// import {AboutPage} from './pages/settings/about/about';

// import {ListPage} from './pages/tournament/list/list';
// import {SetupPage} from './pages/tourny-info/setup/setup';




@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController]];
  }

  constructor(app, platform, menu) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's main pages
    this.pages = [
      { title: 'Scores & Schedule', component: SchedulePage },
      { title: 'Standings', component: StandingsPage },
      { title: 'Bracket', component: BracketPage }
    ];

    // set our tournament details pages
    this.tournamentInfo = [
      { title: 'Structure', component: StructurePage },
      { title: 'Courts & Locations', component: LocationsPage },
      { title: 'Date & Times', component: DateTimePage },
      { title: 'Team, Players, Refs', component: MembersPage }
    ];

    // set our apps settings pages
    // this.settings = [
    //   { title: 'Notifications', component: HelloIonicPage },
    //   { title: 'Terms & Conditions', component: ListPage },
    //   { title: 'Privacy', component: ListPage },
    //   { title: 'About', component: ListPage }
    // ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = StandingsPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  closeMenu(){
    // close the menu when clicking a link from the menu
    this.menu.close();
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
