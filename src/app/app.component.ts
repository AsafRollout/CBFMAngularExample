import { Component } from '@angular/core';
import { FeatureMngService } from './feature-mng.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  someFlagValue=this.fmService.getValue('someFlag')
  _fmSubscription

  constructor(private fmService: FeatureMngService) {
    // subscribing to FM new configurations
    this._fmSubscription = fmService.flagsChanged.subscribe(() => { 
      this.refreshView()
    });
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this._fmSubscription.unsubscribe();
  }

  refreshView() {
    // getting flag value from FM service
    this.someFlagValue=this.fmService.getValue('someFlag')
  }
}
