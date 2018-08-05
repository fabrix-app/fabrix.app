// import { ComponentFixture, TestBed, async } from '@angular/core/testing'
// import { RouterTestingModule } from '@angular/router/testing'
// import { StoreModule, combineReducers, Store } from '@ngrx/store'
//
// // For Material
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//
// // NgEngine Module
// import { NgEngineModule, NgEngineService, ENGINE_CONFIG } from 'ng-engine'
// // App Config for NgEngine
// import * as appConfig from '../../../../../appConfig'
//
// // Shared
// import { SharedModule } from '../../../../shared/shared.module'
//
// // NGRX
// import * as fromMain from '../../store/reducers'
//
// // Containers
// import { ContainersModule } from '../'
// // Main Component
// import { MainComponent } from './main.component'
//
// describe('MainComponent', () => {
//   let store: Store<fromMain.State>
//   let component: MainComponent
//   let ngEngineService: NgEngineService
//   let fixture: ComponentFixture<MainComponent>
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         BrowserAnimationsModule,
//         SharedModule,
//         StoreModule.forRoot(fromMain.reducers),
//         NgEngineModule,
//         // other imports
//         ContainersModule
//       ],
//       providers: [
//         {
//           provide: ENGINE_CONFIG,
//           useValue: {
//             appConfig: appConfig
//           }
//         }
//       ]
//     }).compileComponents()
//   }))
//
//   beforeEach(() => {
//     store = TestBed.get(Store)
//     spyOn(store, 'dispatch').and.callThrough()
//     ngEngineService = TestBed.get(NgEngineService)
//     fixture = TestBed.createComponent(MainComponent)
//     component = fixture.componentInstance
//     fixture.detectChanges()
//   })
//
//   it('should create the component', () => {
//     expect(component).toBeTruthy()
//   })
// })
