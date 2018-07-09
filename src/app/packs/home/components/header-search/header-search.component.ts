import {
  Component,
  OnInit,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core'

import { FormControl } from '@angular/forms'

import 'rxjs/add/operator/debounceTime'
import { of } from 'rxjs/observable/of'

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSearchComponent implements OnInit {
  @Input() query = ''
  @Input() placeholder = 'Search...'
  @Input() debounceTime = 100
  @Input() width: number
  @Input() emptyText = ''
  @Input() loading = false

  @Output() readonly updateQuery: EventEmitter<any> = new EventEmitter()

  public searchCtrl: FormControl = new FormControl()
  // TODO connect to Autocomplete
  public filteredResults = of([])

  constructor() {
    // TODO destroy subscription onDestroy
    this.searchCtrl.valueChanges
      .debounceTime(this.debounceTime)
      .subscribe(data => {
        console.log('SEARCHING...', data)
      })
  }

  private _updateQuery(query) {
    return this.updateQuery.emit(query)
  }

  ngOnInit() {

  }

}
