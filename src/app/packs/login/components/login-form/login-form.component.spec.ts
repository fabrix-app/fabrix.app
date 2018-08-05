// import { async, ComponentFixture, TestBed } from '@angular/core/testing'
// import { RouterTestingModule } from '@angular/router/testing'
// import { FormGroupState } from 'ngrx-forms'
// // NgEngine
// import { NgEngineModule, NgEngineService, ENGINE_CONFIG } from 'ng-engine'
// // App Config for NgEngine
// import * as appConfig from '../../../../../appConfig'
// // Shared
// import { SharedModule } from '../../../../shared/shared.module'
// // NGRX
// import { StoreModule } from '@ngrx/store'
// import { EffectsModule } from '@ngrx/effects'
// import { NgrxFormsModule } from 'ngrx-forms'
//
// // Effects for Pack
// import { LoginEffects, LoginFormEffects } from '../../store/effects'
// import * as login from '../../store/actions/login'
// import * as fromLogin from '../../store/reducers'
//
// // COMPONENTS
// import { ComponentsModule } from '../index'
//
// import { LoginFormComponent } from './login-form.component';
// import  * as loginForm from '../../store/reducers/login-form'
// import {InitializeAction,ActionTypes} from '../../store/actions/login-form'
//
// describe('LoginFormComponent', () => {
//   let component: LoginFormComponent;
//   let fixture: ComponentFixture<LoginFormComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       //declarations: [ LoginFormComponent ],
//       imports: [
//         RouterTestingModule,
//         SharedModule,
//         StoreModule.forRoot({}),
//        StoreModule.forFeature('login', fromLogin.reducers),
//         EffectsModule.forRoot([ LoginEffects, LoginFormEffects ]),
//         NgrxFormsModule,
//         NgEngineModule,
//         // Other Imports
//         ComponentsModule
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
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginFormComponent);
//     component = fixture.componentInstance;
//     //fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//     it('should test INITIALIZE action', () => {
// 	const payload: any = {
// 	    email: 'email',
// 	    password: '12345678',
// 	    remember_me:true
// 	};
// 	const action = new InitializeAction(payload);
//
// 	expect({...action}).toEqual({type: ActionTypes.INITIALIZE, payload});
//     });
//
//     it('should perform form validation using INITIALIZE action type in reducer', () => {
//         const initialState = loginForm.initialState;
//         const payload: any = {
//           email: 'email@gmail.com',
//           password: '123456',
//           remember_me:true
//
//         };
//         const state = loginForm.reducer(initialState, {type: ActionTypes.INITIALIZE, payload: payload});
//
//         expect(state).toEqual(payload);
//     });
// });
