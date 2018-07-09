import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ComponentsModule } from '../index'

import { HeaderSearchComponent } from './header-search.component'

describe('HeaderSearchComponent', () => {
  let component: HeaderSearchComponent
  let fixture: ComponentFixture<HeaderSearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ComponentsModule ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
