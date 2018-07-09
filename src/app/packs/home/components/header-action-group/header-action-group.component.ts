import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output, EventEmitter
} from '@angular/core'

import { NgEngineService } from 'ng-engine'

@Component({
  selector: 'app-header-action-group',
  templateUrl: './header-action-group.component.html',
  styleUrls: ['./header-action-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderActionGroupComponent implements OnInit {
  // Search
  @Input() query: string
  @Output() readonly updateQuery: EventEmitter<any> = new EventEmitter()

  // Actions
  @Output() readonly toggleAlerts: EventEmitter<any> = new EventEmitter()
  @Output() readonly toggleMenu: EventEmitter<any> = new EventEmitter()

  constructor(
    public _ngEngine: NgEngineService
  ) { }

  /**
   * Search Component
   * @param e
   * @private
   */
  public _updateQuery(e) {
    this._ngEngine.log('HeaderActionGroupComponent._updateQuery', e)
    this.updateQuery.emit(e)
  }

  /**
   * Actions
   */
  public clickAlerts(e) {
    this._ngEngine.log('HeaderActionGroupComponent.clickAlerts', e)
    this.toggleAlerts.emit(true)
  }

  public clickMenu(e) {
    this._ngEngine.log('HeaderActionGroupComponent.clickMenu', e)
    this.toggleMenu.emit(true)
  }

  ngOnInit() {

  }
}
