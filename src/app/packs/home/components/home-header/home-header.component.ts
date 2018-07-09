import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
