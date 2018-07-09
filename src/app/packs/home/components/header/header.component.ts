import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core'
import { RouterEvent } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() nav // : NavItems
  constructor() { }

  ngOnInit() {

  }

}
