import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-forgot-password-header',
  templateUrl: './forgot-password-header.component.html',
  styleUrls: ['./forgot-password-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
