import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core'
import { User } from '../../../../core/models/User'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  @Input() user: User
  @Input() isAuthenticated: boolean

  constructor() { }

  ngOnInit() {
  }

}
