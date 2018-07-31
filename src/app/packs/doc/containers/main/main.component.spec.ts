import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { StoreModule, combineReducers, Store } from '@ngrx/store'

// NgEngine Module
import { NgEngineModule, NgEngineService, ENGINE_CONFIG } from 'ng-engine'
// App Config for NgEngine
import * as appConfig from '../../../../../appConfig'

// Docs Component
import { MainComponent } from './main.component'

import * as docs from '../../store/actions/docs'
import * as fromDocs from '../../store/reducers'

describe('MainComponent', () => {
  let store: Store<fromDocs.State>
  let component: MainComponent
  let ngEngineService: NgEngineService
  let fixture: ComponentFixture<MainComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(fromDocs.reducers),
        NgEngineModule
        // other imports
      ],
      declarations: [ MainComponent ],
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
    fixture = TestBed.createComponent(MainComponent)
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

  it('should set h1 as appState$.title', async(() => {
    const title = ngEngineService.config.get('app.title')
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      const compiled = fixture.debugElement.nativeElement
      expect(compiled.querySelector('h1').textContent).toContain(title)
    })
  }))

  it('should set h2 as docsState$.title', async(() => {
    // const title = ngEngineService.config.get('docs.title')
    // const action = new docs.HelloWorldAction(title)
    // store.dispatch(action)
    // expect(store.dispatch).toHaveBeenCalledWith(action)

    // component.docsState$.subscribe(data => {
    //   fixture.whenStable().then(() => {
    //     fixture.detectChanges()
    //     const compiled = fixture.debugElement.nativeElement
    //     expect(compiled.querySelector('h2').textContent).toContain(data.title)
    //   })
    // })
  }))
})
