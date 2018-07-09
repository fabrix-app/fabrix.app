import { NetworkRequestModule } from './network-request.module'

describe('NetworkRequestModule', () => {
  let networkRequestModule: NetworkRequestModule

  beforeEach(() => {
    networkRequestModule = new NetworkRequestModule()
  })

  it('should create an instance', () => {
    expect(networkRequestModule).toBeTruthy()
  })
})
