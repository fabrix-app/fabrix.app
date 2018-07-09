import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { ComponentsModule } from '../index'

import { SidenavCollapseComponent } from './sidenav-collapse.component'


describe('SidenavCollapseComponent', () => {
  let component: SidenavCollapseComponent
  let fixture: ComponentFixture<SidenavCollapseComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ComponentsModule
      ],
      declarations: [ ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCollapseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
