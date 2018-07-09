import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgEngineModule } from 'ng-engine'
import { SharedModule } from '../../../../shared/shared.module'
// COMPONENTS
import { ComponentsModule } from '../index'
// Component
import { LoginHeaderComponent } from './login-header.component'

describe('LoginHeaderComponent', () => {
  let component: LoginHeaderComponent
  let fixture: ComponentFixture<LoginHeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        // NgEngineModule,
        // Other Imports
        ComponentsModule
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
