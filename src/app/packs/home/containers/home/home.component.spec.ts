import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RouterTestingModule } from '@angular/router/testing'
import { NgEngineModule } from 'ng-engine'
import { SharedModule } from '../../../../shared/shared.module'
import { StoreModule, combineReducers, Store } from '@ngrx/store'
// COMPONENTS
import { ContainersModule } from '../index'

import { HomeComponent } from './home.component'
import { APP_BASE_HREF } from '@angular/common';
import * as appConfig from '../../../../../appConfig'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        StoreModule.forRoot({}),
        // other imports
        ContainersModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: appConfig.environment.APP_BASE_HREF
        }
      ]

    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    //fixture.detectChanges()
  })

  it('should create', (done) => {
    expect(component).toBeTruthy()
    done()
  })

  afterEach(() => {
    fixture.destroy()
  })
})
