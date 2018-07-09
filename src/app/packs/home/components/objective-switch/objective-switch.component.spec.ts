import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ComponentsModule } from '../index'

import { ObjectiveSwitchComponent } from './objective-switch.component'

describe('ObjectiveSwitchComponent', () => {
  let component: ObjectiveSwitchComponent
  let fixture: ComponentFixture<ObjectiveSwitchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ ComponentsModule ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveSwitchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
