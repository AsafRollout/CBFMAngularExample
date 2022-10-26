import { Component } from '@angular/core';
import * as Rox from 'rox-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  someFlagValue=Rox.dynamicApi.value('someFlag', 'default')

  constructor() {
    Rox.setup('6357e4c221c6ca36cc89fb54', { configurationFetchedHandler: (res) => {
      if (res.hasChanges) {
        this.reloadView()
      }
    }})
  }

  reloadView() {
    this.someFlagValue=Rox.dynamicApi.value('someFlag', 'default')
  }
}
