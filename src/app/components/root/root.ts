import {Component} from "@angular/core";
import {DesktopIntegrationService} from "../../services/desktopIntegration";
import {routeTransition} from "../../helpers/route-animation";

@Component({
  selector: 'app-root',
  animations: [ routeTransition ],
  templateUrl: 'root.html',
  styleUrls: ['root.scss']
})
export class RootComponent {
  constructor(private _desktopIntegration: DesktopIntegrationService) {
    this._desktopIntegration.register();
  }

  public getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
