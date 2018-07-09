import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core'
import { NavBuilt } from '../../../../core/services/navigation/navigation.service'
import { User } from '../../../../core/models/User'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  @Input() public nav: NavBuilt
  @Output() readonly toggle: EventEmitter<any> = new EventEmitter()

  @Input() user: User
  @Input() isAuthenticated: boolean

  constructor() {}

  ngOnInit() {}

  trackChild(i, child) {
    return child ? child.id : i
  }
}
