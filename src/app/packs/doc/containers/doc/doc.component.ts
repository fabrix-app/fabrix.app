// Common/Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute, Router, UrlTree } from '@angular/router'

// NgEngine
import { NgEngineService } from 'ng-engine'

// RxJS
import { Observable } from 'rxjs'
import { Subject } from 'rxjs'
import { takeUntil, tap, map } from 'rxjs/operators'

// NGRX
import * as docs from '../../store/actions/docs'
import * as fromDocs from '../../store/reducers'
import { Store, select } from '@ngrx/store'
import { FormGroupState, SetValueAction } from 'ngrx-forms'
import { Actions, ofType } from '@ngrx/effects'

// Services
// import { CollectionNamePipe } from '../../services/collection-name.pipe'

// Models
import { Doc } from '../../models/Doc'

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocComponent implements OnInit {

  public doc$: Observable<Doc>

  constructor(
    private _ngEngine: NgEngineService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _store: Store<any>,
    private _actions$: Actions
  ) {
    this.doc$ = _store.pipe(select(fromDocs.getDocsSelected))
  }

  ngOnInit() {
  }

}
