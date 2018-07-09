import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ComponentsModule } from '../index'

import { ProfileComponent } from './profile.component'

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ComponentsModule ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
