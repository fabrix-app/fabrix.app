import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { Location } from '@angular/common'

import { ComponentsModule } from '../index'


import { HeaderBreadcrumbsComponent } from './header-breadcrumbs.component'

describe('HeaderBreadcrumbsComponent', () => {
  let component: HeaderBreadcrumbsComponent
  let fixture: ComponentFixture<HeaderBreadcrumbsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ComponentsModule
      ],
      providers: [
        Location
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBreadcrumbsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
