import { TestBed, inject } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { StoreModule } from '@ngrx/store'
import { NavigationService } from './navigation.service'

describe('NavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({}),
      ],
      providers: [NavigationService]
    })
  })

  it('should be created', inject([NavigationService], (service: NavigationService) => {
    expect(service).toBeTruthy()
  }))
})
