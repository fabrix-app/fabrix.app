import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NgEngineModule, NgEngineService, ENGINE_CONFIG } from 'ng-engine'
// App Config for NgEngine
import * as appConfig from '../../../../../appConfig'


import { ComponentsModule } from '../index'

import { HeaderActionGroupComponent } from './header-action-group.component'


describe('HeaderActionGroupComponent', () => {
  let component: HeaderActionGroupComponent
  let fixture: ComponentFixture<HeaderActionGroupComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        NgEngineModule,
        ComponentsModule
      ],
      providers: [
        {
          provide: ENGINE_CONFIG,
          useValue: {
            appConfig: appConfig
          }
        }
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderActionGroupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
