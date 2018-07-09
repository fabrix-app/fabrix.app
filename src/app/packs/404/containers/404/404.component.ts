import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-404-component',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourZeroFourComponent {
  public from$: Observable<any> | null = null
  constructor(private _router: ActivatedRoute) {
    this.from$ = this._router.queryParams
  }
}
