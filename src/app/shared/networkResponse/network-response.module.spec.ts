import { NetworkResponseModule } from './network-response.module'

describe('NetworkResponseModule', () => {
  let networkResponseModule: NetworkResponseModule

  beforeEach(() => {
    networkResponseModule = new NetworkResponseModule()
  })

  it('should create an instance', () => {
    expect(networkResponseModule).toBeTruthy()
  })
})
