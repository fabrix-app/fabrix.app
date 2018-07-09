import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input
} from '@angular/core'
import { chain, isEmpty } from 'lodash'

import { AnimationEvent } from '@angular/animations'
import { sidenavExpansionAnimations } from './sidenav-collapse.animations'
import { NavBuilt } from '../../../../core/services/navigation/navigation.service'

@Component({
  selector: 'app-sidenav-collapse',
  templateUrl: './sidenav-collapse.component.html',
  styleUrls: ['./sidenav-collapse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [sidenavExpansionAnimations.menuExpansion]
})
export class SidenavCollapseComponent implements OnInit {
  @Input() public nav: NavBuilt // : SelectableGroup
  // @Output() readonly ready: EventEmitter<any> = new EventEmitter()
  // @Output() readonly opened: EventEmitter<any> = new EventEmitter()
  // @Output() readonly closed: EventEmitter<any> = new EventEmitter()

  constructor() {

  }

  _menuAnimation(event: AnimationEvent) {
    const classList = event.element.classList
    const cssClass = 'expanded'
    const { phaseName, toState } = event
    // Toggle the body's `overflow: hidden` class when closing starts or when expansion ends in
    // order to prevent the cases where switching too early would cause the animation to jump.
    // Note that we do it directly on the DOM element to avoid the slight delay that comes
    // with doing it via change detection.
    if (phaseName === 'done' && toState === 'opened') {
      classList.add(cssClass)
    } else if (phaseName === 'start' && toState === 'closed') {
      classList.remove(cssClass)
    }
  }

  trackChild(i, child) {
    return child ? child.id : i
  }

  ngOnInit() {
  }
}
