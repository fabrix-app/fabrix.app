import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
// import { chain } from 'lodash'

// NgEngine
import { NgEngineService } from 'ng-engine'

// RXJS
import { Observable } from 'rxjs'

// NGRX
import { Store, select } from '@ngrx/store'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor(
    private _ngEngine: NgEngineService,
    private _store: Store<any>,
    private _router: Router
  ) {

  }

  ngOnInit() {}
}
