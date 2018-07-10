import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
