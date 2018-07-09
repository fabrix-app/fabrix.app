import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { Location } from '@angular/common'

import { NgEngineModule, NgEngineService, ENGINE_CONFIG } from 'ng-engine'
// App Config for NgEngine
import * as appConfig from '../../../../../appConfig'

import { ComponentsModule } from '../index'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgEngineModule,
        ComponentsModule
      ],
      declarations: [ ],
      providers: [
        {
          provide: ENGINE_CONFIG,
          useValue: {
            appConfig: appConfig
          }
        },
        Location
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
