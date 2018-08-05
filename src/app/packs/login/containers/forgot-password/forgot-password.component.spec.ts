// import { async, ComponentFixture, TestBed } from '@angular/core/testing'
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
// // NGRX
// import * as login from '../../store/actions/login'
// import * as fromLogin from '../../store/reducers'
//
// // Shared
// import { SharedModule } from '../../../../shared/shared.module'
//
// // Components
// import { ContainersModule } from '../'
//
// // Component
// import { ForgotPasswordComponent } from './forgot-password.component'
//
// describe('ForgotPasswordComponent', () => {
//   let component: ForgotPasswordComponent
//   let fixture: ComponentFixture<ForgotPasswordComponent>
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         BrowserAnimationsModule,
//         SharedModule,
//         StoreModule.forRoot(fromLogin.reducers),
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
//     })
//     .compileComponents()
//   }))
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ForgotPasswordComponent)
//     component = fixture.componentInstance
//     fixture.detectChanges()
//   })
//
//   it('should create', () => {
//     expect(component).toBeTruthy()
//   })
// })
