import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'
import { Location } from '@angular/common'

// NGRX
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
// Root Reducers, Actions, Effects
import * as fromRootReducers from '../../store/reducers'
// import * as fromRootActions from './store/actions'
// import * as fromRootEffects from './core/store/effects'

import { NgEngineModule, NgEngineService, ENGINE_CONFIG } from 'ng-engine'
// App Config for NgEngine
import * as appConfig from '../../../../appConfig'

// Shared Module
import { SharedModule } from '../../../shared/shared.module'

// Components
import { ComponentsModule } from '../../components/index'

// Services
import { ServicesModule } from '../../services/index'

// For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Component to Test
import { AppComponent } from './app.component'


fdescribe('AppComponent', () => {
  let component: AppComponent
  let location: Location
  let router: Router
  let fixture: ComponentFixture<AppComponent>
  let ngEngineService: NgEngineService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(fromRootReducers.reducers),
        EffectsModule.forRoot([]),
        NgEngineModule,
        SharedModule,
        ServicesModule,
        ComponentsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
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
    router = TestBed.get(Router)
    ngEngineService = TestBed.get(NgEngineService)
    location = TestBed.get(Location)
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
