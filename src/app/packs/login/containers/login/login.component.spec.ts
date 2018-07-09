import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { StoreModule, combineReducers, Store } from '@ngrx/store'

// For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// NgEngine Module
import { NgEngineModule, NgEngineService, ENGINE_CONFIG } from 'ng-engine'
// App Config for NgEngine
import * as appConfig from '../../../../../appConfig'

// NGRX
import * as login from '../../store/actions/login'
import * as fromLogin from '../../store/reducers'

// Shared
import { SharedModule } from '../../../../shared/shared.module'

// Components
import { ContainersModule } from '../'

// Login Component
import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let store: Store<fromLogin.State>
  let component: LoginComponent
  let ngEngineService: NgEngineService
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        SharedModule,
        StoreModule.forRoot(fromLogin.reducers),
        NgEngineModule,
        // other imports
        ContainersModule
      ],
      providers: [
        {
          provide: ENGINE_CONFIG,
          useValue: {
            appConfig: appConfig
          }
        }
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)
    spyOn(store, 'dispatch').and.callThrough()
    ngEngineService = TestBed.get(NgEngineService)
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  // it('should subscribe to published app state', async(() => {
  //   ngEngineService.dispatch('SetTitleAction', {title: 'Proxy Engine with Angular'})
  //   component.appState$.subscribe(data => {
  //     expect(data.title).toBe('Proxy Engine with Angular')
  //   })
  // }))
  //
  // it('should set h1 as appState$.title', async(() => {
  //   ngEngineService.dispatch('SetTitleAction', {title: 'Proxy Engine with Angular'})
  //   component.appState$.subscribe(data => {
  //     fixture.whenStable().then(() => {
  //       fixture.detectChanges()
  //       const compiled = fixture.debugElement.nativeElement
  //       expect(compiled.querySelector('h1').textContent).toContain('Proxy Engine with Angular')
  //     })
  //   })
  // }))

  // it('should set h1 as appState$.title', async(() => {
  //   const title = ngEngineService.config.get('app.title')
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges()
  //     const compiled = fixture.debugElement.nativeElement
  //     expect(compiled.querySelector('h1').textContent).toContain(title)
  //   })
  // }))
  //
  // it('should set h2 as loginState$.title', async(() => {
  //   // const title = ngEngineService.config.get('login.title')
  //   // const action = new login.HelloWorldAction(title)
  //   // store.dispatch(action)
  //   // expect(store.dispatch).toHaveBeenCalledWith(action)
  //
  //   component.loginState$.subscribe(data => {
  //     fixture.whenStable().then(() => {
  //       fixture.detectChanges()
  //       const compiled = fixture.debugElement.nativeElement
  //       expect(compiled.querySelector('h2').textContent).toContain(data.title)
  //     })
  //   })
  // }))
})
