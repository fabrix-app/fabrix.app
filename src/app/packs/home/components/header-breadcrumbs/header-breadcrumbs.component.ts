import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core'
import { Location } from '@angular/common'
import { NavigationEnd, RouterEvent } from '@angular/router'
import { sortBy, isEmpty } from 'lodash'
import { SelectableGroup } from '../../../../core/services/navigation/navigation.service'

@Component({
  selector: 'app-header-breadcrumbs',
  templateUrl: './header-breadcrumbs.component.html',
  styleUrls: ['./header-breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBreadcrumbsComponent implements OnInit {
  @Input() public nav: SelectableGroup // NavItems = {}

  constructor(private _location: Location) {}

  public goBack(): void {
      this._location.back()
  }

  ngOnInit() {}
}
