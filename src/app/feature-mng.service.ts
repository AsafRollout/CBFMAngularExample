import { Injectable } from '@angular/core';
import * as Rox from 'rox-browser'
import { Subject } from 'rxjs';

// should only be initiated once! can be used in any component
@Injectable({
  providedIn: 'root'
})
export class FeatureMngService {

  flagsChanged: Subject<void> = new Subject<void>();
  constructor() { 
    // initiating CB FM service
    Rox.setup('6357e4c221c6ca36cc89fb54', { configurationFetchedHandler: (res) => {
      // if there are changes emit to subscribers
      if (res.hasChanges) {
        this.flagsChanged.next();
      }
    }})
  }

  getValue(flagName: string) {
    // get CB FM flag value
    return Rox.dynamicApi.value(flagName, 'default')
  }
}
